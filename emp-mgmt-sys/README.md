
# Employee Management System

This is a simple employee management system built with:

- **Next.js 14 App Router**
- **Supabase** (authentication and database)
- **Prisma** (database ORM)
- **NextUI** and **Tailwind CSS** (UI design)

## Features

- **Authentication**: Users must sign up and log in to access the application.  
- **CRUD Operations**: Create, read, update, and delete employee records.  
- **Protected Routes**: Uses `middleware.js` to restrict access to authenticated users.  

## Live Demo

The project is deployed at: [Employee Management System](https://emp-mgmt-sys.vercel.app/)

## Getting Started

### Prerequisites

- Node.js installed on your machine.  
- A Supabase project configured with the necessary database schema.  

### Installation

1. Clone the repository:  
   ```bash
   git clone <repository-url>
   cd employee-management-system
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

- **Supabase**: For authentication and database management.  
- **Prisma**: To interact with the database.  
- **Next.js 14 App Router**: For routing and server-side rendering.  
- **NextUI & Tailwind CSS**: For modern and responsive UI.  

## Folder Structure

```
employee-management-system/
├── app/               # Application pages and components
├── prisma/            # Prisma schema and database setup
├── public/            # Static assets
├── middleware.js      # Authentication protection
└── README.md          # Project documentation
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)  
- [Supabase Documentation](https://supabase.com/docs)  
- [Prisma Documentation](https://www.prisma.io/docs)  
- [NextUI Documentation](https://nextui.org/docs)  
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)  
