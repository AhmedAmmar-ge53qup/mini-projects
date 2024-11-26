# Mini Projects

This repository contains two mini-projects built using the following tech stack:

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org)
- **Database**: [Supabase](https://supabase.com) (authentication and storage)
- **ORM**: [Prisma](https://www.prisma.io) (for database communication)
- **UI Frameworks**: [NextUI](https://nextui.org) and [Tailwind CSS](https://tailwindcss.com)

## Projects

1. **[Employee Management System](./emp-mgmt-sys)**  
   A system to manage employee records with full CRUD functionality and protected routes using `middleware.js`.  

2. **[Appointment System](./appointment-sys)**  
   A feature-rich appointment booking system showcasing a multi-step form with client-side and server-side validation, conflict detection to prevent overlapping appointments, and options to manage bookings without authentication.

Each project folder contains a README.md file with setup instructions and project-specific details.

## Getting Started

To run any project locally:

```bash
npm install
npx prisma generate
npm run dev
```
