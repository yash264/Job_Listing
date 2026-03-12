import express from 'express';
import {
  jobCreate,
  fetchJob,
  fetchCandidates,
  acceptConfirmation,
  fetchProfile
} from '../controllers/recruitment.controller.js';

import authenticateUser from '../middleware/auth.middleware.js';

const RecruitmentRoute = express.Router();

RecruitmentRoute.post('/jobCreate', authenticateUser, jobCreate);
RecruitmentRoute.get('/fetchJob', authenticateUser, fetchJob);
RecruitmentRoute.get('/fetchCandidates', authenticateUser, fetchCandidates);
RecruitmentRoute.post('/fetchProfile', authenticateUser, fetchProfile);
RecruitmentRoute.post('/acceptConfirmation', authenticateUser, acceptConfirmation);

export default RecruitmentRoute;