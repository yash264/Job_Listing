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

---
