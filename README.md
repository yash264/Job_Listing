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
nodemon index.js
```

---

## 🧾 Git Commands

Check git status:

```bash
git status
```

Add all files:

```bash
git add <directory>
```

Commit changes:

```bash
git commit -m "Initial commit"
```

Push to GitHub:

```bash
git push origin main
```
