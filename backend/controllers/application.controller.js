import mongoose from "mongoose";
import Recruitment from "../models/recruitment.model.js";
import Application from "../models/application.model.js";
import UserData from "../models/auth.model.js";


/* FETCH JOB NOTIFICATIONS */
export const fetchNotification = async (req, res) => {
    try {
        const jobs = await Recruitment.find().populate("refId", "name email");

        const mergedData = jobs.map(job => ({
            name: job.refId.name,
            email: job.refId.email,
            id: new mongoose.Types.ObjectId(job._id),
            refId: new mongoose.Types.ObjectId(job.refId),
            role: job.role,
            applyTill: job.applyTill,
        }));

        res.status(200).json({
            success: true,
            message: mergedData
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};


/* VIEW JOB DETAILS */
export const applicationForm = async (req, res) => {
    try {
        const provider = await UserData.findOne({
            _id: new mongoose.Types.ObjectId(req.body.refId),
        });

        if (!provider) {
            return res.json({
                success: false,
                message: "Provider not found"
            });
        }

        const roleExists = await Recruitment.findOne({
            _id: new mongoose.Types.ObjectId(req.body.id)
        });

        const mergedData = {
            name: provider.name,
            email: provider.email,
            mobile: provider.mobile,
            homeTown: provider.homeTown,
            profilePic: provider.profilePic,

            id: new mongoose.Types.ObjectId(req.body.refId),
            jobRefId: new mongoose.Types.ObjectId(roleExists._id),
            role: roleExists.role,
            eligibility: roleExists.eligibility,
            skills: roleExists.skills,
            salary: roleExists.salary,
            applyTill: roleExists.applyTill,
            instructions: roleExists.instructions
        };

        res.status(200).json({
            success: true,
            message: mergedData
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};


/* SUBMIT APPLICATION */
export const submitForm = async (req, res) => {
    try {
        if (req.user.type !== "jobseeker") {
            return res.status(404).json({
                success: false,
                message: "Only jobseekers can apply"
            });
        }

        const ifExists = await Application.findOne({
            refId: new mongoose.Types.ObjectId(req.user.id),
            jobRefId: new mongoose.Types.ObjectId(req.body.jobRefId)
        });

        if (ifExists) {
            return res.json({
                success: false,
                message: "Application already submitted"
            });
        }

        await Application.create({
            refId: new mongoose.Types.ObjectId(req.user.id),
            jobRefId: new mongoose.Types.ObjectId(req.body.jobRefId),
            document: req.body.document,
            yourSelf: req.body.yourSelf,
            status: false
        });

        res.status(200).json({
            success: true,
            message: "Application Submitted"
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};


/* FETCH PAST APPLICATIONS */
export const fetchPastApplication = async (req, res) => {
    try {

        if (req.user.type !== "jobseeker") {
            return res.status(403).json({
                success: false,
                message: "Only jobseekers can view past applications"
            });
        }

        const applications = await Application.find({
            refId: req.user.id
        })
            .populate({
                path: "jobRefId",
                select: "role refId",
                populate: {
                    path: "refId",
                    select: "name"
                }
            });

        const mergedData = applications.map(app => ({
            name: app.jobRefId?.refId?.name,
            role: app.jobRefId?.role,
            document: app.document,
            status: app.status
        }));

        res.status(200).json({
            success: true,
            data: mergedData
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

