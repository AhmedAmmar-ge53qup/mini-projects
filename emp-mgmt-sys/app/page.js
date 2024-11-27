import EmployeesTable from "@/components/EmployeesTable";
import Navbar from "@/components/NavBar";
import { Button, Input } from "@nextui-org/react"; // Import NextUI components
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen text-center px-4">
        <p className="text-4xl font-semibold mb-3">
          Employee Management System
        </p>

        <div className="w-full max-w-5xl">
          <Link href="/crud-emp/add">
            <Button auto flat className="mb-5 w-full sm:w-auto">
              Add Employee
            </Button>
          </Link>
          <EmployeesTable />
        </div>
      </div>
    </>
  );
}
