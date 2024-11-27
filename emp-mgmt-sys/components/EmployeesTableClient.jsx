"use client"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from '@nextui-org/react';
import Link from 'next/link';
import { useFormStatus } from 'react-dom';
import DeleteEmpFormSubmit from './DeleteEmpFormSubmit';

export default function EmployeesTableClient({ employees, handleEdit, handleDelete }) {

    const status = useFormStatus();

    return (
        <Table aria-label="Employee Management Table">
            <TableHeader>
                <TableColumn>Email</TableColumn>
                <TableColumn>Name</TableColumn>
                <TableColumn>Salary</TableColumn>
                <TableColumn>Role</TableColumn>
                <TableColumn>Actions</TableColumn>
            </TableHeader>

            <TableBody>
                {employees.map((employee) => (
                    <TableRow key={employee.id}>
                        <TableCell>{employee.email}</TableCell>
                        <TableCell>{employee.name}</TableCell>
                        <TableCell>{employee.salary}</TableCell>
                        <TableCell>{employee.role}</TableCell>
                        <TableCell>
                            <div className="flex space-x-3">
                                <Link href={`/crud-emp/update?id=${employee.id}`}>
                                    <Button auto flat color='success' variant='ghost'>✏️</Button> {/* Edit Icon */}
                                </Link>
                                <form action={handleDelete} className="inline-block">
                                    <input name="id" type="hidden" value={employee.id} />
                                    <DeleteEmpFormSubmit />
                                </form>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
