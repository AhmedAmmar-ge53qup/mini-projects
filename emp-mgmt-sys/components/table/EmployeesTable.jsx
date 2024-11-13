import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Tooltip, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
import { deleteEmployee, getEmployees } from '@/model/employees';
import { redirect } from 'next/navigation';

export default async function EmployeesTable() {
  
  const employees = await getEmployees();

  async function handleDelete(formData) 
  {
    "use server"
    const id = formData.get('id');
    await deleteEmployee(parseInt(id));
    redirect('/');
  };

  async function handleEdit(formData) {
    "use server"
    const id = formData.get('id');
    console.log(`Editing ${id}`);
    // TODO
  };

  return (
    <>
      <Link href="/add-emp">
        <Button variant="contained" color="primary" style={{ marginBottom: '20px' }}>
          Add Employee
        </Button>
      </Link>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.salary}</TableCell>
                <TableCell>{employee.role}</TableCell>
                <TableCell>
                  <Tooltip title="Edit">
                    <form action={handleEdit} style={{display: 'inherit'}}>
                      <input name='id' defaultValue={employee.id} style={{display: 'none'}} />
                      <IconButton color="primary" type='submit'>
                        <EditIcon />
                      </IconButton>
                    </form>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <form action={handleDelete} style={{display: 'inherit'}}>
                      <input name='id' defaultValue={employee.id} style={{display: 'none'}}/>
                      <IconButton color="error" type='submit'>
                        <DeleteIcon />
                      </IconButton>
                    </form>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
