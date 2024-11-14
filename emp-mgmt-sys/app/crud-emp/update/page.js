import { updateEmployee } from '@/model/employees';
import AddEmployeeForm from '../AddEmployeeForm';
import prisma from '@/prisma/prisma';
import { redirect } from 'next/navigation';

export default async function UpdateEmployeePage({searchParams}) {

    const {id} = await searchParams;
    const emp = await prisma.employee.findUniqueOrThrow({where: {id: parseInt(id)}});
    
    const handleUpdateEmployee = async (formData) => {
        "use server"
    
        const {name, email, salary} = Object.fromEntries(formData.entries());
        const role = "Regular Employee";
        const res = await updateEmployee({name, email, salary: parseFloat(salary), role}, id);
    
        console.log("Employee Updated: " + res.id);
        redirect("/");
      };

  return <AddEmployeeForm employee={emp} handleSubmit={handleUpdateEmployee} />
}
