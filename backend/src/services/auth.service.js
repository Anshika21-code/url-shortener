import User from "../models/user.model.js";
import jsonwebtoken from "jsonwebtoken";

export const register_user = async (name, email, password) => {
    const user = await User.findOne({ email });
    if (user) throw new Error("User already exists");
    const newUser = await User.create({ name, email, password });
    await newUser.save();
    return newUser;
}
