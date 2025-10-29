# Smart Task Assistant - Requirements & Setup Guide

## Project Overview
Smart Task Assistant is an AI-powered task management application built with Next.js and Gemini AI. It helps users organize, prioritize, and manage their tasks with intelligent AI-powered insights and recommendations.

---

## System Requirements

### Minimum Requirements
- **Operating System**: Windows, macOS, or Linux
- **Node.js**: v18.17 or higher
- **npm**: v9 or higher (or yarn v3+)
- **RAM**: 2GB minimum
- **Disk Space**: 500MB for installation and dependencies

### Recommended Requirements
- **Node.js**: v20 LTS or higher
- **npm**: v10 or higher
- **RAM**: 4GB or higher
- **Disk Space**: 1GB or higher

---

## Prerequisites to Install

Before running the application, ensure you have:

1. **Node.js & npm** - Download from [nodejs.org](https://nodejs.org)
   - Verify installation: `node --version` and `npm --version`

2. **Git** (optional, for cloning repository)
   - Download from [git-scm.com](https://git-scm.com)

3. **Code Editor** (recommended)
   - VS Code, WebStorm, or any preferred editor

4. **Gemini API Key** (for AI features)
   - Get free API key from [Google AI Studio](https://aistudio.google.com/app/apikey)

---

## Dependencies

### Core Dependencies
- **next**: 16.0.0 - React framework for production
- **react**: 19.2.0 - UI library
- **react-dom**: 19.2.0 - React DOM rendering
- **typescript**: ^5 - Type safety

### AI & Data Processing
- **ai**: 5.0.81 - Vercel AI SDK for Gemini integration
- **zod**: 3.25.76 - Schema validation

### UI Components & Styling
- **tailwindcss**: ^4.1.9 - Utility-first CSS framework
- **@radix-ui/***: Various UI component libraries
- **lucide-react**: ^0.454.0 - Icon library
- **sonner**: ^1.7.4 - Toast notifications
- **next-themes**: ^0.4.6 - Dark mode support

### Form & State Management
- **react-hook-form**: ^7.60.0 - Form state management
- **@hookform/resolvers**: ^3.10.0 - Form validation resolvers

### Utilities
- **date-fns**: 4.1.0 - Date manipulation
- **class-variance-authority**: ^0.7.1 - Component variants
- **clsx**: ^2.1.1 - Conditional classnames
- **tailwind-merge**: ^3.3.1 - Merge Tailwind classes

---

## Environment Variables

### Required for AI Features
Create a `.env.local` file in the root directory with:

\`\`\`env
# Gemini AI Configuration (via Vercel AI Gateway)
# No additional setup needed - uses Vercel's default configuration
\`\`\`

**Note**: The application uses Vercel's AI Gateway by default. If you're deploying to Vercel, environment variables are automatically configured.

### Optional Environment Variables
\`\`\`env
# For local development
NEXT_PUBLIC_APP_NAME=Smart Task Assistant
\`\`\`

---

## Installation Steps

### Step 1: Download/Clone the Project

**Option A: Download ZIP**
1. Download the project ZIP file
2. Extract to your desired location
3. Open terminal/command prompt in the project folder

**Option B: Clone from GitHub**
\`\`\`bash
git clone <your-github-repo-url>
cd smart-task-assistant
\`\`\`

### Step 2: Install Dependencies
\`\`\`bash
npm install
\`\`\`
This will install all required packages listed in `package.json`.

### Step 3: Set Up Environment Variables
1. Create a `.env.local` file in the root directory
2. Add any required environment variables (see Environment Variables section)

### Step 4: Verify Installation
\`\`\`bash
npm run build
\`\`\`
This ensures all dependencies are correctly installed and the project builds successfully.

---

## Running the Application

### Development Mode
\`\`\`bash
npm run dev
\`\`\`
- Opens at `http://localhost:3000`
- Hot reload enabled - changes reflect instantly
- Best for development and testing

### Production Build
\`\`\`bash
npm run build
npm start
\`\`\`
- Optimized production build
- Better performance
- Use for final testing before deployment

### Linting
\`\`\`bash
npm run lint
\`\`\`
- Checks code quality and style
- Helps maintain code standards

---

## Project Structure

\`\`\`
smart-task-assistant/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── header.tsx          # Header component
│   ├── task-form.tsx       # Task creation form
│   ├── task-list.tsx       # Task list display
│   ├── task-card.tsx       # Individual task card
│   ├── task-stats.tsx      # Task statistics
│   ├── task-filters.tsx    # Task filtering
│   ├── ai-insights.tsx     # AI insights panel
│   └── ui/                 # shadcn UI components
├── lib/
│   ├── gemini.ts           # Gemini AI integration
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── next.config.mjs         # Next.js config
└── tailwind.config.ts      # Tailwind CSS config
\`\`\`

---

## Features & Functionality

### Core Features
- ✅ Create, read, update, delete tasks
- ✅ Set task priorities (Low, Medium, High)
- ✅ Filter tasks by status (All, Active, Completed)
- ✅ Sort tasks by date or priority
- ✅ Task completion tracking
- ✅ Local storage persistence

### AI-Powered Features
- ✅ Get intelligent task insights and recommendations
- ✅ Automatic task categorization
- ✅ AI-powered task duration estimation
- ✅ Smart task title suggestions
- ✅ Workload analysis and optimization tips

### UI/UX Features
- ✅ Responsive mobile-first design
- ✅ Dark mode support
- ✅ Real-time task statistics
- ✅ Smooth animations and transitions
- ✅ Accessible components (ARIA labels)

---

## Troubleshooting

### Issue: Port 3000 already in use
\`\`\`bash
# Use a different port
npm run dev -- -p 3001
\`\`\`

### Issue: Dependencies not installing
\`\`\`bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
\`\`\`

### Issue: Build fails
\`\`\`bash
# Ensure TypeScript is correct
npm run build -- --debug
\`\`\`

### Issue: AI features not working
- Verify Gemini API key is set (if using custom setup)
- Check internet connection
- Ensure you're using the latest version of the AI SDK

---

## Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click "Deploy"
5. Share the live URL

### Deploy to Other Platforms
- **Netlify**: Connect GitHub repo and deploy
- **Railway**: Push code and deploy
- **Self-hosted**: Build and run on your server

---

## Development Tips

1. **Use TypeScript**: Leverage type safety for better development
2. **Component Reusability**: Break UI into smaller, reusable components
3. **Local Storage**: Tasks are saved in browser's local storage
4. **AI Integration**: Use the `generateInsights` function from `lib/gemini.ts`
5. **Styling**: Use Tailwind CSS classes for consistent styling

---

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Vercel AI SDK**: https://sdk.vercel.ai
- **Gemini API**: https://ai.google.dev
- **Radix UI**: https://www.radix-ui.com

---

## License

This project is open source and available under the MIT License.

---

## Quick Start Summary

\`\`\`bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
# Navigate to http://localhost:3000

# 4. Start using the app!
# Create tasks, use AI features, and manage your tasks
\`\`\`

---

**Last Updated**: October 29, 2025
**Version**: 1.0.0
