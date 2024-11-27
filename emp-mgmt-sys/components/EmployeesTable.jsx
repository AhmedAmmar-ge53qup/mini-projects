import { deleteEmployee, getEmployees } from '@/model/employees';
import { redirect } from 'next/navigation';
import EmployeesTableClient from './EmployeesTableClient';

export default async function EmployeesTable() {

  const employees = await getEmployees();

  async function handleDelete(formData) {
    "use server"
    const id = formData.get('id');
    await deleteEmployee(parseInt(id));
    redirect('/');
  };

  return <EmployeesTableClient employees={employees} handleDelete={handleDelete} />;
};
