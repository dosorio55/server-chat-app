import { Users } from "../models/user.model.js";
import bcrypt from 'bcrypt';

export const register = async (req, res, next) => {

    const { userName, password } = req.body;

    try {
        const prevUserCheck = await Users.findOne({ username: userName });

        if (prevUserCheck)
            return res.json({ msg: "Username is already in use" });

        /* hash password */
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await Users.create({
            username: userName,
            password: hashedPassword,
        });
        delete user.password;
        return res.json({ status: 201, user, msg: 'registered' });
    } catch (error) {
        next(error);
    }
};

export const login = async (req, res, next) => {
    try {
        const { userName, password } = req.body;
        const user = await Users.findOne({username: userName });
        if (!user)
            return res.json({ msg: "Incorrect Username or Password" });

        /* Comparare password */
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid)
            return res.json({ msg: "Incorrect Username or Password" });
        delete user.password;
        return res.json({ user, msg: 'logged in!', status: 201 });
    } catch (error) {
        next(error);
    }
};

export const setAvatar = async (req, res, next) => {
    const userId = req.params.id;
    const avatarImage = req.body.image;

    try {
        await Users.findByIdAndUpdate(userId, {
            isAvatarImageSet: true, avatarImage
        });
        return res.json({
            isSet: true,
            image: avatarImage
        })
    } catch (error) {
        next(error)
    }
}

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await Users.find({ _id: { $ne: req.params.id } }).select([
            "email",
            "username",
            "avatarImage",
            "_id",
        ]);
        return res.json(users);
    } catch (error) {
        next(error);
    }
}