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
        
        const createdUser = await Users.create({
            username: userName,
            password: hashedPassword,
        });
        delete createdUser.password;
        return res.json({ status: 201, createdUser });
    } catch (error) {
        next(error);
    }
    
}

export const login = async (req, res, next) => {
    console.log(req.body);
}