import mongoose from "mongoose";
import Recruitment from "../models/recruitment.model.js";
import Application from "../models/application.model.js";


/* CREATE JOB */
export const jobCreate = async (req, res) => {
    try {
        if (req.user.type !== "jobprovider") {
            return res.status(404).json({
                success: false,
                message: "Only job providers can create jobs"
            });
        }

        const { role, salary, eligibility, skills, applyTill, instructions } = req.body;

        const ifExists = await Recruitment.findOne({
            refId: new mongoose.Types.ObjectId(req.user.id),
            role: req.body.role
        });

        if (ifExists) {
            return res.json({
                success: false,
                message: "Role must be unique"
            });
        }

        await Recruitment.create({
            refId: new mongoose.Types.ObjectId(req.user.id),
            role,
            salary,
            eligibility,
            skills,
            applyTill,
            instructions
        });

        res.status(200).json({
            success: true,
            message: "Job Created Successfully"
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};


/* FETCH JOBS CREATED BY PROVIDER */
export const fetchJob = async (req, res) => {
    try {
        const jobsData = await Recruitment.find({
            refId: new mongoose.Types.ObjectId(req.user.id),
        });

        res.status(200).json({
            success: true,
            message: jobsData
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};


/* FETCH CANDIDATES */
export const fetchCandidates = async (req, res) => {
    try {
        const jobsData = await Recruitment.find({
            refId: new mongoose.Types.ObjectId(req.user.id)
        }).select("_id");

        if (!jobsData.length) {
            return res.json({
                success: false,
                message: "No candidatess found."
            });
        }

        const jobIds = jobsData.map(job => job._id);

        const applications = await Application.find({
            jobRefId: { $in: jobIds }
        }).populate("refId", "name email");

        const mergedData = applications.map(app => ({
            name: app.refId?.name,
            email: app.refId?.email,
            id: app.refId?._id,
            jobRefId: app._id,
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


/* FETCH CANDIDATE PROFILE */
export const fetchProfile = async (req, res) => {
    try {
        const application = await Application.findById({
            _id: new mongoose.Types.ObjectId(req.body.jobRefId)
        })
            .populate("refId", "name email profilePic gender mobile qualification homeTown");

        if (!application) {
            return res.status(404).json({
                success: false,
                message: "Application not found"
            });
        }

        const mergedData = {
            name: application.refId.name,
            email: application.refId.email,
            profilePic: application.refId.profilePic,
            gender: application.refId.gender,
            mobile: application.refId.mobile,
            qualification: application.refId.qualification,
            homeTown: application.refId.homeTown,

            document: application.document,
            yourSelf: application.yourSelf
        };

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


/* ACCEPT CANDIDATE */
export const acceptConfirmation = async (req, res) => {
    try {
        const result = await Application.updateOne(
            {
                _id: new mongoose.Types.ObjectId(req.body.jobRefId)
            },
            {
                status: true
            }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Application not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Candidate Accepted"
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};