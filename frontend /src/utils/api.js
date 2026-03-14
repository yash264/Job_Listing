import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api';

const client = axios.create({
  baseURL: API_BASE,
  timeout: 10000
});

// Attach JWT if present
client.interceptors.request.use(config => {
  const token = localStorage.getItem('token'); // or your auth store
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Provider
export async function createJob(payload) {
  return client.post('/jobCreate', payload);
}
export async function fetchJobs() {
  return client.get('/fetchJob');
}
export async function fetchCandidates() {
  return client.get('/fetchCandidates');
}
export async function fetchProfile(jobRefId) {
  return client.post('/fetchProfile', { jobRefId });
}
export async function acceptConfirmation(jobRefId) {
  return client.post('/acceptConfirmation', { jobRefId });
}

// Job seeker
export async function fetchNotification() {
  return client.get('/fetchNotification');
}
export async function applicationForm(id, refId) {
  return client.post('/applicationForm', { id, refId });
}
// submitForm expects file + text -> use FormData
export async function submitForm({ jobRefId, documentFile, yourSelf }) {
  const fd = new FormData();
  fd.append('jobRefId', jobRefId);
  if (documentFile) fd.append('document', documentFile);
  fd.append('yourSelf', yourSelf || '');
  return client.post('/submitForm', fd, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
}
export async function fetchPastApplication() {
  return client.get('/fetchPastApplication');
}

export default client;
