import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profilePic:{
        type: String
    },
    type: {
        type: String,
        enum: ["jobseeker", "jobprovider"],
        required: true
    },
    gender: {
        type: String
    },
    mobile: {
        type: Number
    },
    qualification: {
        type: String
    },
    homeTown: {
        type: String
    },
    password: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const UserData = mongoose.model("user", userSchema);

export default UserData;