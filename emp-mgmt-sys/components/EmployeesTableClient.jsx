"use client"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from '@nextui-org/react';

export default function EmployeesTableClient({ employees, handleEdit, handleDelete }) {
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
                                {/* Edit Button with Form */}
                                <form action={handleEdit} className="inline-block">
                                    <input name="id" type="hidden" value={employee.id} />
                                    <Button type='submit' auto flat color='success' variant='ghost'>✏️</Button> {/* Edit Icon */}
                                </form>

                                {/* Delete Button */}
                                <form action={handleDelete} className="inline-block">
                                    <input name="id" type="hidden" value={employee.id} />
                                    <Button type="submit" auto flat color="danger" variant='ghost'>
                                        🗑️ {/* Delete Icon */}
                                    </Button>
                                </form>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
