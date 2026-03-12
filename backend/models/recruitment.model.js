import mongoose from "mongoose";

const recruitmentSchema = new mongoose.Schema({
    refId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"   
    },
    role: {
        type: String
    },
    salary: {
        type: Number
    },
    eligibility: {
        type: String
    },
    skills: {
        type: String
    },
    applyTill: {
        type: Date
    },
    instructions: {
        type: String
    }
});

const Recruitment = mongoose.model("recruitment", recruitmentSchema);

export default Recruitment;