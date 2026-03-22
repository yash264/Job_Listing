import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import UserData from "../models/auth.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });


// REGISTER
export const register = async (req, res) => {
    try {
        const { name, email, password, type } = req.body.payload;

        const ifExists = await UserData.findOne({ email: email });

        if (ifExists) {
            return res.status(400).json({
                success: false,
                message: "Email Already Exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const registerPerson = new UserData({
            name,
            email,
            password: hashedPassword,
            type
        });

        await registerPerson.save();

        res.status(201).json({
            success: true,
            message: "Registered Successfully."
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};


// LOGIN
export const login = async (req, res) => {
    try {
        const { email, password, type } = req.body.payload;

        const ifExists = await UserData.findOne({ email: email });

        if (!ifExists) {
            return res.json({
                success: false,
                message: "Please Register"
            });
        }

        if (ifExists.type !== type) {
            return res.json({
                success: false,
                message: "Invalid user type"
            });
        }

        const isMatch = await bcrypt.compare(password, ifExists.password);

        if (!isMatch) {
            return res.json({
                success: false,
                message: "Incorrect Password"
            });
        }

        // CREATE TOKEN
        const token = jwt.sign(
            {
                id: ifExists._id,
                email: ifExists.email,
                type: ifExists.type
            },
            process.env.jwt_secret,
            { expiresIn: "30d" }
        );

        res.json({
            success: true,
            token,
            message: "Login Successfull"
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};


// VERIFY TOKEN
export const verifyToken = async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ valid: false, data: null });
    }

    jwt.verify(token, process.env.jwt_secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ valid: false, data: null });
        }

        return res.json({
            valid: true,
            message: "Verfied Successfully"
        });
    });
};


// FETCH USER
export const fetchUser = async (req, res) => {
    try {
        const fetchUserData = await UserData
            .findById({ _id: req.user.id })
            .select("-password");

        if (!fetchUserData) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: fetchUserData,
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};


// UPDATE USER
export const updateUser = async (req, res) => {
    try {
        await UserData.findByIdAndUpdate(
            { _id: req.user.id },
            {
                gender: req.body.gender,
                mobile: req.body.mobile,
                qualification: req.body.qualification,
                homeTown: req.body.homeTown,
                profilePic: req.body.profilePic
            },
            { new: true }
        ).select("-password");

        res.status(200).json({
            success: true,
            message: "Profile Updated Successfully",
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};
