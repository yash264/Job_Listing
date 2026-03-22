import express from "express";
import {
  fetchNotification,
  applicationForm,
  submitForm,
  fetchPastApplication
} from "../controllers/application.controller.js";

import authenticateUser from "../middleware/auth.middleware.js";

const ApplicationRoute = express.Router();

ApplicationRoute.get("/fetchNotification", authenticateUser, fetchNotification);
ApplicationRoute.post("/applicationForm", authenticateUser, applicationForm);
ApplicationRoute.post("/submitForm", authenticateUser, submitForm);
ApplicationRoute.get("/fetchPastApplication", authenticateUser, fetchPastApplication);

export default ApplicationRoute;