import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAvatarImageSet: { type: Boolean, default: false },
        avatarImage: { type: String, default: "" },
    },
    {
        timestamps: true
    }
);

const Users = mongoose.model('Users', userSchema);

export { Users }