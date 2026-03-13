HireSathi Frontend README

Summary
This repository contains the  frontend site for HireSathi built with React and Vite. The frontend implements pages for Dashboard, Jobs, Candidates, CandidateDetail, Login, Signup, shared UI components, and a centralized API utility.

---

What was implemented
- Complete frontend app under frontend/ with Vite configuration and Tailwind-ready styles.  
- Routeable pages: Dashboard, Jobs, Candidates, CandidateDetail, Login, Signup.  
- Reusable UI components: Button, Card, DashboardLayout.  
- API utility: src/utils/api.js using VITEAPIBASE_URL for all requests.  
- Production build configuration and preview scripts.

---

Project structure
`
frontend/
├─ index.html
├─ package.json
├─ vite.config.js
├─ .env.example
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ index.css
│  ├─ components/
│  ├─ layout/
│  ├─ pages/
│  └─ utils/api.js
`

---

Requirements
- Node.js v18 or later  
- npm (or compatible package manager)  
- Git (for source control)  
- Optional: running backend on port 4000 for end-to-end testing

---

Environment variables
Copy .env.example to .env and set:
`
VITEAPIBASE_URL=http://localhost:4000/api
VITEAPPTITLE=HireSathi


---

Run locally
`bash
cd frontend
npm install
npx vite --host 0.0.0.0 --port 5173

open http://localhost:5173
`
Local URL: http://localhost:5173

---

Build and preview
`bash
cd frontend
npm run build
npm run preview

or serve dist with a static server
npx serve dist
`

---

Mock API for frontend testing
If the backend is unavailable, run a simple mock API on port 4000:
`bash
node -e "const http=require('http');const data=JSON.stringify({ok:true,jobs:[]});http.createServer((req,res)=>{if(req.url.startsWith('/api')){res.writeHead(200,{'Content-Type':'application/json'});res.end(data);}else{res.writeHead(404);res.end();}}).listen(4000,'0.0.0.0',()=>console.log('Mock API listening on 4000'))"
`
This makes VITEAPIBASE_URL=http://localhost:4000/api usable for UI testing.

---


Key commands
`bash

install
npm install

dev
npx vite --host 0.0.0.0 --port 5173

build
npm run build

preview
npm run preview
`

---

Notes
- API calls use import.meta.env.VITEAPIBASE_URL.  
- Ensure CORS is enabled on the backend for http://localhost:5173 when testing locally.  
- If module type warnings appear, add "type": "module" to frontend/package.json or adjust config filenames to .cjs.

---Quick verification commands (run from repo root)
`bash

show key files and confirm presence
ls -la frontend
ls -la frontend/src
sed -n '1,120p' frontend/index.html
sed -n '1,160p' frontend/src/main.jsx
sed -n '1,240p' frontend/src/App.jsx
sed -n '1,200p' frontend/package.json

install and start dev server
cd frontend
npm install
npx vite --host 0.0.0.0 --port 5173 2>&1 | tee vite-start.log

Common problems and single-line fixes
- Missing #root in index.html:
  `html
  <div id="root"></div>
  `
- Dependency missing (example react-router-dom):
  `bash
  cd frontend && npm install react-router-dom
  `
- Vite bound to localhost only (not exposed):
  `bash
  npx vite --host 0.0.0.0 --port 5173
  `
- Import path error (e.g., ./App not found): open src/main.jsx and ensure import App from './App'; matches src/App.jsx filename and casing.
- CSS import fails: ensure src/index.css exists and path in main.jsx is import './index.css';.
- API calls failing in browser (CORS or wrong URL): set frontend/.env:
  `
  VITEAPIBASE_URL=http://localhost:4000/api
  `
  then restart dev server.

---

4. Runtime checks in browser and terminal
- Browser: open http://localhost:5173 and check DevTools → Console for errors and Network for failing API calls.  
- Terminal: if Vite starts, confirm it prints Local: http://localhost:5173/ and Network: http://0.0.0.0:5173/.  
- API: from the Codespace or machine run:
`bash
curl -i http://localhost:4000/api/fetchJob
`
If it returns 200/JSON, backend is reachable.

Frontend__
