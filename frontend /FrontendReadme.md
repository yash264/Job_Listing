HireSathi Frontend README

Frontend Structure
`
frontend/
├─ public/
│  └─ index.html
├─ src/
│  ├─ components/
│  │  ├─ ui/
│  │  │  ├─ Button.jsx
│  │  │  └─ Card.jsx
│  ├─ layout/
│  │  └─ DashboardLayout.jsx
│  ├─ pages/
│  │  ├─ Dashboard.jsx
│  │  ├─ Jobs.jsx
│  │  ├─ Candidates.jsx
│  │  ├─ CandidateDetail.jsx
│  │  ├─ EmployerDashboard.jsx
│  │  ├─ Login.jsx
│  │  └─ Signup.jsx
│  ├─ data/
│  │  └─ jobs.json
│  ├─ utils/
│  │  └─ api.js
│  ├─ main.jsx
│  └─ index.css
├─ vite.config.js
├─ package.json
└─ .env
`

Project
HireSathi Frontend — React + Vite single page application for job listings and candidate management. This README gives a copy‑paste ready guide to get the frontend running locally, build for production, and follow a clear zero to hero workflow from a fresh machine to a deployed build.

---

Prerequisites
- Node.js v18+ and npm (or pnpm/yarn) installed.  
- Git for source control.  
- Optional: Docker or a running backend on port 4000 for full end‑to‑end testing.

---

Quick Start :
Follow these steps in order to go from nothing to a running local app and a production build.

1 Clone repository
`bash
git clone <repo-url>
cd HireSathi
`

2 Create a feature branch (safe workflow)
`bash
git fetch origin
git checkout -b frontend
`

3 Install dependencies
`bash

npm install
`

4 Configure environment variables
Create a .env file in frontend (do not commit secrets). Example:
`env

frontend/.env
VITEAPIBASE_URL=http://localhost:4000/api
VITEAPPTITLE="HireSathi"
`
Important: If your backend is not ready, you can use the mock server described below.

5 Run development server
`bash

bind to all interfaces so Codespaces or remote containers can expose the port
npx vite --host 0.0.0.0 --port 5173
`
Local URL: http://localhost:5173  
Notes: If you use Codespaces or a container, ensure the port 5173 is exposed/public.

6 If backend is not available use a quick mock API
Run this from the repo root or backend folder to let the frontend fetch data:
`bash

from backend folder
node -e "const http=require('http');const data=JSON.stringify({ok:true,jobs:[]});http.createServer((req,res)=>{if(req.url.startsWith('/api')){res.writeHead(200,{'Content-Type':'application/json'});res.end(data);}else{res.writeHead(404);res.end();}}).listen(4000,'0.0.0.0',()=>console.log('Mock API listening on 4000'))"
`
This serves http://localhost:4000/api responses so the UI works while backend is fixed.

7 Build production assets
`bash
npm run build

output will be in the dist folder
`

8 Serve production build locally for smoke test
`bash

install serve if needed: npm i -g serve
npx serve dist

or
npx http-server dist -p 8080

then open http://localhost:8080
`

---

Environment Variables and Configuration
Frontend .env keys
- VITEAPIBASE_URL — base URL for backend API (example: http://localhost:4000/api).  
- VITEAPPTITLE — application title shown in the UI.

Where to set them
- Local: frontend/.env (do not commit).  
- CI/CD: set as environment variables in your deployment provider (Vercel, Netlify, GitHub Actions).

---

Build Test Deploy

Build
`bash
cd frontend
npm run build
`

Test
- Manual: run dev server and exercise pages (Jobs, Candidates, Login).  
- Automated: run unit and lint scripts if present:
`bash
npm run lint
npm test
`

Deploy
- Static hosts: point the host to frontend/dist and use npm run build as the build command.  
- CI: ensure VITEAPIBASE_URL is set to the production API endpoint.

---

Troubleshooting
- Blank page or module type warnings  
  - If Node warns about module type, add "type": "module" to frontend/package.json or rename config files using ESM to .cjs.
- Dev server not reachable externally  
  - Start Vite with --host 0.0.0.0 and ensure port 5173 is public in Codespaces or container settings.
- CORS errors when calling API  
  - Ensure backend allows http://localhost:5173 or configure cors() on the backend.
- Backend unreachable  
  - Use the mock server above to continue frontend work.
- Port conflict  
  - Find and kill process:  
    `bash
    ss -tulpn | grep 5173
    # then kill the PID if needed
    `

---

Contributing
- Create a branch: git checkout -b feat/your-change  
- Make changes only inside frontend/ if your PR is frontend‑only.  
- Commit and push:
`bash
git add frontend
git commit -m "feat(frontend): short description"
git push -u origin feat/your-change
`
- Open a Pull Request to main and include how to test and build steps.

---

Minimal Commands Cheat Sheet
`bash

clone and branch
git clone <repo-url>
cd HireSathi
git checkout -b feat/frontend-only

install and run dev
cd frontend
npm install
npx vite --host 0.0.0.0 --port 5173

build
npm run build
HireSathi Frontend README

