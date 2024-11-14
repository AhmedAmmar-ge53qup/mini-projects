import { addEmployee } from '@/model/employees';
import { redirect } from 'next/navigation';
import AddEmployeeForm from '../AddEmployeeForm';

export default function AddEmployeePage() {

  const handleAddEmployee = async (formData) => {
    "use server"

    const {name, email, salary} = Object.fromEntries(formData.entries());
    const role = "Regular Employee";
    const res = await addEmployee({name, email, salary: parseFloat(salary), role});

    console.log("Employee Added: " + res.id);
    redirect("/");
  };

  return <AddEmployeeForm handleSubmit={handleAddEmployee}/>;
}
