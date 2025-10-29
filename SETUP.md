# Smart Task Assistant - Complete Setup Guide

## Table of Contents
1. [Things You Need to Understand](#things-you-need-to-understand)
2. [System Requirements](#system-requirements)
3. [Installation Steps](#installation-steps)
4. [Running the Application](#running-the-application)
5. [Environment Configuration](#environment-configuration)
6. [Troubleshooting](#troubleshooting)

---

## Things You Need to Understand

### 1. **What is This Application?**
The Smart Task Assistant is a web-based productivity app that helps you manage tasks with AI-powered features. It uses Google's Gemini AI to provide intelligent insights, task categorization, and duration estimation.

### 2. **Technology Stack**
- **Frontend Framework**: Next.js 16 (React-based)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI Integration**: Vercel AI SDK + Google Gemini
- **State Management**: React hooks + Local Storage
- **Package Manager**: npm or yarn

### 3. **Key Architecture Concepts**

#### **Client-Side Components**
- `TaskForm`: Input component for creating new tasks
- `TaskList`: Displays all tasks with filtering
- `TaskCard`: Individual task display with actions
- `TaskStats`: Shows task analytics and metrics
- `TaskFilters`: Filter and sort tasks
- `AIInsights`: AI-powered features panel

#### **Server-Side Logic**
- `lib/gemini.ts`: Handles all AI API calls to Gemini
- Route handlers: Process requests from the frontend

#### **Data Storage**
- **Local Storage**: Tasks are saved in browser's local storage (persists across sessions)
- **No Backend Database**: This is a client-side app (can be extended with a database later)

### 4. **How AI Features Work**
- **Get Insights**: Analyzes your task list and provides recommendations
- **Categorize Tasks**: Groups tasks by category using AI
- **Estimate Duration**: Predicts how long each task will take
- **Suggest Titles**: AI helps generate better task titles

### 5. **Environment Variables**
The app uses the Vercel AI Gateway, which automatically handles API keys. No manual API key setup needed if deployed on Vercel.

---

## System Requirements

### **Minimum Requirements**
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or yarn v3.0.0+)
- **RAM**: 2GB minimum
- **Disk Space**: 500MB for node_modules
- **OS**: Windows, macOS, or Linux

### **Check Your Versions**
\`\`\`bash
node --version
npm --version
\`\`\`

---

## Installation Steps

### **Step 1: Download the Code**

#### Option A: Download ZIP
1. Click the three dots (⋯) in the top right of the Code Project
2. Select "Download ZIP"
3. Extract the ZIP file to your desired location
4. Open terminal/command prompt in the extracted folder

#### Option B: Clone from GitHub
\`\`\`bash
git clone <your-github-repo-url>
cd smart-task-assistant
\`\`\`

### **Step 2: Install Dependencies**

\`\`\`bash
npm install
\`\`\`

This command will:
- Read the `package.json` file
- Download all required packages
- Create a `node_modules` folder
- Generate a `package-lock.json` file

**Expected time**: 2-5 minutes (depending on internet speed)

### **Step 3: Verify Installation**

\`\`\`bash
npm list
\`\`\`

This shows all installed packages. You should see:
- `next`
- `react`
- `react-dom`
- `ai` (Vercel AI SDK)
- `tailwindcss`
- And other dependencies

---

## Running the Application

### **Development Mode** (Recommended for local development)

\`\`\`bash
npm run dev
\`\`\`

**What happens:**
- Starts a local development server
- Opens at `http://localhost:3000`
- Hot-reloads when you make changes
- Shows errors in the terminal

**Expected output:**
\`\`\`
> smart-task-assistant@1.0.0 dev
> next dev

  ▲ Next.js 16.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 2.5s
\`\`\`

### **Production Build** (For deployment)

\`\`\`bash
npm run build
\`\`\`

Then run:
\`\`\`bash
npm run start
\`\`\`

**What happens:**
- Optimizes the app for production
- Creates an optimized build
- Runs the production server

---

## Environment Configuration

### **For Local Development**

The app works out-of-the-box with no environment variables needed for local testing.

### **For Deployment to Vercel**

1. Push your code to GitHub
2. Connect to Vercel
3. Vercel automatically handles Gemini API keys through the AI Gateway
4. No manual environment variable setup required

### **Optional: Custom Environment Variables**

If you want to add custom variables, create a `.env.local` file:

\`\`\`bash
# .env.local
NEXT_PUBLIC_APP_NAME=Smart Task Assistant
NEXT_PUBLIC_MAX_TASKS=100
\`\`\`

**Note**: Variables prefixed with `NEXT_PUBLIC_` are accessible in the browser. Others are server-only.

---

## Troubleshooting

### **Issue: "npm: command not found"**
**Solution**: Node.js is not installed. Download from https://nodejs.org/

### **Issue: Port 3000 already in use**
**Solution**: Run on a different port:
\`\`\`bash
npm run dev -- -p 3001
\`\`\`

### **Issue: "Module not found" errors**
**Solution**: Reinstall dependencies:
\`\`\`bash
rm -rf node_modules package-lock.json
npm install
\`\`\`

### **Issue: AI features not working**
**Solution**: 
- Check internet connection
- Verify you're on Vercel (for production) or have valid API keys
- Check browser console for errors (F12)

### **Issue: Tasks not saving**
**Solution**: 
- Check if browser allows local storage
- Try clearing browser cache
- Use a different browser

### **Issue: Slow performance**
**Solution**:
- Clear browser cache
- Close other applications
- Restart the development server

---

## Quick Command Reference

| Command | Purpose |
|---------|---------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Run production server |
| `npm run lint` | Check code quality |
| `npm list` | Show installed packages |

---

## Next Steps After Setup

1. **Open the app**: Visit `http://localhost:3000`
2. **Create a task**: Use the input form to add tasks
3. **Try AI features**: Click buttons in the AI Insights panel
4. **Test filtering**: Use the filter options to organize tasks
5. **Deploy**: Click "Publish" to deploy to Vercel

---

## Getting Help

- **Check the browser console**: Press F12 to see errors
- **Check the terminal**: Look for error messages in the terminal where you ran `npm run dev`
- **Read error messages carefully**: They usually tell you what's wrong
- **Restart the server**: Stop (Ctrl+C) and run `npm run dev` again

---

## File Structure

\`\`\`
smart-task-assistant/
├── app/
│   ├── page.tsx              # Main page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── task-form.tsx         # Task input form
│   ├── task-list.tsx         # Task list display
│   ├── task-card.tsx         # Individual task
│   ├── task-stats.tsx        # Statistics
│   ├── task-filters.tsx      # Filter controls
│   ├── ai-insights.tsx       # AI features
│   └── header.tsx            # Header component
├── lib/
│   ├── gemini.ts             # AI integration
│   └── utils.ts              # Utility functions
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── next.config.mjs           # Next.js config
└── README.md                 # Project documentation
\`\`\`

---

## Success Checklist

- [ ] Node.js and npm installed
- [ ] Dependencies installed (`npm install` completed)
- [ ] Development server running (`npm run dev`)
- [ ] App opens at `http://localhost:3000`
- [ ] Can create and view tasks
- [ ] AI features work (click AI buttons)
- [ ] Tasks persist after page refresh
- [ ] No errors in browser console (F12)

Once all items are checked, you're ready to use the app!
