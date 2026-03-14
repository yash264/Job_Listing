## HireSathi Frontend README

---

Overview
HireSathi Frontend is a React application built with Vite. It provides the UI for job listings, candidate management, and basic authentication. This README contains the exact, actionable steps to run, build, and verify the frontend site.

---

## Project Structure
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
│  └─ utils/
└─ README.md
`

---

## Prerequisites
- Node.js v18 or later  
- npm (or compatible package manager)  
- Git

---

step 1 :
1. Clone repository
`bash
git clone <repo-url>
cd HireSathi
`

2. Switch to a working branch
`bash
git fetch origin
git checkout -b feat/frontend-final
cd frontend
`

3. Install dependencies
`bash
npm install
`

4. Configure environment
`bash
cp .env.example .env

Edit frontend/.env and set VITEAPIBASE_URL if needed
`

5. Run development server
`bash
npx vite --host 0.0.0.0 --port 5173
`
Local URL: http://localhost:5173

6. Build production assets
`bash
npm run build

Output directory: dist (optional) after final frontend commit 
`

## Serve production build for smoke test
`bash
npx serve dist

Open the URL shown by server
`

---

### Environment Variables
frontend/.env minimal example:
`
VITEAPIBASE_URL=http://localhost:4000/api
VITEAPPTITLE=HireSathi
`
## Troubleshooting
- Dev server not reachable — ensure Vite started with --host 0.0.0.0 and port 5173 is available.  
- API failures — confirm VITEAPIBASE_URL points to a running backend or run a mock API on port 4000.  
- Module type warnings — add "type": "module" to package.json or rename config files to .cjs.

## Verification Checklist
- Dev server loads at http://localhost:5173.  
- npm run build completes without errors.  
- Production build served from dist renders core pages: Dashboard, Jobs, Candidates, Login, Signup.
