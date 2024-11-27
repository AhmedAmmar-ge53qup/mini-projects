"use client"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Input } from '@nextui-org/react';
import Link from 'next/link';
import DeleteEmpFormSubmit from './DeleteEmpFormSubmit';
import { useState } from 'react';

export default function EmployeesTableClient({ employees, handleDelete }) {

    const [searchQuery, setSearchQuery] = useState('');

    const filterEmployee = (employee) => {
        const query = searchQuery.toLowerCase();
        const nameMatches = employee.name.toLowerCase().includes(query);
        const emailMatches = employee.email.toLowerCase().includes(query);
        return nameMatches || emailMatches;
    };


    return (
        <>
            <Input
                aria-label="Search"
                label="Search"
                variant="bordered"
                fullWidth
                className="mb-3 max-w-sm"
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Table aria-label="Employee Management Table">
                <TableHeader>
                    <TableColumn>Email</TableColumn>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Salary</TableColumn>
                    <TableColumn>Role</TableColumn>
                    <TableColumn>Actions</TableColumn>
                </TableHeader>

                <TableBody>
                    {employees.filter((emp) => filterEmployee(emp)).map((employee) => (
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
        </>
    )
}
