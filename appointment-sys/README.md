
# Appointment System

This is a mini-project designed to showcase the functionality of a simple appointment booking system.

## Features

- **Multi-Step Form**: Step-by-step form for inputting appointment details.  
- **Validation**:  
  - Client-side validation for immediate feedback.  
  - Server-side validation for robust error checking.  
- **Conflict Detection**: Ensures no overlapping appointments are allowed.  
- **Booking Options**:  
  - Book another appointment after completing one.  
  - View all booked appointments.  

## Purpose

This project focuses on implementing core functionalities of an appointment system. It does not include user authentication as it is intended solely to demonstrate appointment management skills.

## Live Demo

The project is deployed at: [Appointment System](https://appointment-sys-theta.vercel.app/)


## Getting Started

### Prerequisites

- Node.js installed on your machine.  
- A Supabase project configured with the necessary database schema.  

### Installation

1. Clone the repository:  
   ```bash
   git clone <repository-url>
   cd appointment-system
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Generate Prisma client:  
   ```bash
   npx prisma generate
   ```

4. Run the development server:  
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the application locally.

## Technologies Used

- **Supabase**: For database management.  
- **Prisma**: To interact with the database.  
- **Next.js 14 App Router**: For routing and server-side rendering.  
- **NextUI & Tailwind CSS**: For modern and responsive UI.  

## Folder Structure

```
appointment-system/
├── app/               # Application pages and components
├── prisma/            # Prisma schema and database setup
├── public/            # Static assets
└── README.md          # Project documentation
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)  
- [Supabase Documentation](https://supabase.com/docs)  
- [Prisma Documentation](https://www.prisma.io/docs)  
- [NextUI Documentation](https://nextui.org/docs)  
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)  
