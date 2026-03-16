import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    refId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    jobRefId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "recruitment"
    },
    document: {
        type: String
    },
    yourSelf: {
        type: String
    },
    status: {
        type: Boolean,
        default: false
    }
});

const Application = mongoose.model("application", applicationSchema);

export default Application;