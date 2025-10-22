# LMS Project

A full-stack Learning Management System built using Next.js, MongoDB, and Tailwind CSS.

## Features
- Authentication with NextAuth.js
- Student and Admin dashboards
- Course creation, enrollment, and progress tracking
- Responsive and modular UI

## Tech Stack
- **Framework:** Next.js (App Router)
- **Database:** MongoDB via Mongoose
- **Authentication:** NextAuth.js
- **Styling:** Tailwind CSS
- **Language:** JavaScript

## Project Structure
```
lms-project/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   ├── dashboard/
│   │   ├── login/
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   │   ├── Navbar.js
│   │   └── CourseCard.js
│   ├── lib/
│   │   └── mongodb.js
│   └── models/
│       └── User.js
├── .env.local
└── package.json
```

## Setup Instructions

```bash
git clone https://github.com/yourusername/lms-project.git
cd lms-project
npm install
npm run dev
```

## Environment Variables
Create a `.env.local` file with:
```
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key
```

## Core Modules
1. **Authentication Module** - User login/logout with NextAuth.js
2. **Dashboard Module** - Course overview and user management
3. **UI Components** - Reusable Navbar and CourseCard components

## Development Guidelines
- Follow JavaScript-only constraint
- Use App Router for all routing
- Implement responsive design with Tailwind CSS
- Maintain modular and scalable code structure