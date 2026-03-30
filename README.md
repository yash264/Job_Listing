## 💼 HireSathi

Your one-stop platform to track and showcase your skill progress. A modern and responsive web application that helps users to explore, and apply for jobs. This platform connects job seekers with opportunities across various industries.

---

## 🚀 Features
- 🔐 User authentication (Login / Signup)
- 🏢 View company details and job descriptions
- 📄 Apply to jobs directly through the platform
- ❤️ Have the option to upload documents
- 📱 Fully responsive design (mobile-friendly)

---

## 🌐 Live Demo

🚀 Live link:  https://hiresathi.vercel.app  
👉 Video Tutorial:  https://drive.google.com/file/d/1CU6L0UjJY0zvuSmIAYy2uPDgTD1lHoHW/view?usp=drive_link

---

## 🛠️ Tech Stack

- Frontend: React.js / Bootstrap
- Backend: Node.js / Express 
- Database: MongoDB
- Cloudinary: for Document Uploading

---

## 🔌 Backend API Endpoints

## 🌐 Base URL

All API endpoints start with the following base URL:

```bash
http://localhost:4000/api
```

### 👤 Authentication APIs

| Method | Endpoint | Description | Inputs (Frontend Fields) |
|------|---------|------------|---------------------------|
| POST | `/register` | Register a new user (Job Seeker / Job Provider) | `name`, `email`, `password`, `type` |
| POST | `/login` | Login user and generate JWT token | `email`, `password`, `type` |
| GET | `/verifyToken` | Verify JWT authentication token | `Authorization Token` |
| GET | `/fetchUser` | Fetch logged-in user profile | `Authorization Token` |
| PUT | `/updateUser` | Update user profile details | `gender`, `mobile`, `qualification`, `homeTown`, `profilePic` |

---

### 💼 Job Provider APIs

| Method | Endpoint | Description | Inputs (Frontend Fields) |
|------|---------|------------|---------------------------|
| POST | `/jobCreate` | Create a new job posting | `role`, `salary`, `eligibility`, `skills`, `applyTill`, `instructions` |
| GET | `/fetchJob` | Fetch all jobs created by the provider | `Authorization Token` |
| GET | `/fetchCandidates` | Fetch all candidates who applied for provider jobs | `Authorization Token` |
| POST | `/fetchProfile` | View detailed profile of a candidate | `jobRefId` |
| POST | `/acceptConfirmation` | Accept a candidate application | `jobRefId` |

---

### 🧑‍💻 Job Seeker APIs

| Method | Endpoint | Description | Inputs (Frontend Fields) |
|------|---------|------------|---------------------------|
| GET | `/fetchNotification` | Fetch available job notifications | `Authorization Token` |
| POST | `/applicationForm` | View detailed job information | `id`, `refId` |
| POST | `/submitForm` | Submit a job application | `jobRefId`, `document`, `yourSelf` |
| GET | `/fetchPastApplication` | Fetch all past job applications | `Authorization Token` |

---
---

## ⚙️ Environment Variables (.env)

Create a `.env` file in the root directory and add the following:

```bash
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/HireSathi
JWT_SECRET=Amdox_Intern
```

---

## 🖥️ Installation & Run Project

Clone the repository:

```bash
git clone https://github.com/yash264/HireSathi.git
```

Go into the project directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Run in development mode (if using nodemon):

```bash
nodemon src/app.js
```
## Ux :
https://www.figma.com/design/teM37dQ5jxbvkYHIpvMZ2M/Untitled?node-id=1-2750&t=xQaJK4HW4gOUOFWv-1
---
    ##"Mohit pawar"
