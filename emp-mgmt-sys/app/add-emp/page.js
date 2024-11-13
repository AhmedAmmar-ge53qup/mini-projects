import { addEmployee } from '@/model/employees';
import { TextField, Button, Grid2, Typography, Box } from '@mui/material';
import { redirect } from 'next/navigation';

export default function AddEmployeeForm() {

  const handleSubmit = async (formData) => {
    "use server"

    const {name, email, salary} = Object.fromEntries(formData.entries());
    const role = "Regular Employee";
    const res = await addEmployee({name, email, salary: parseFloat(salary), role});

    console.log("Employee Added: " + res.id);
    redirect("/");
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 400, margin: 'auto', padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Add New Employee
      </Typography>
      <form action={handleSubmit}>
        <Grid2 container spacing={2}>
          <Grid2 xs={12}>
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              required
            />
          </Grid2>

          <Grid2 xs={12}>
            <TextField
              name="email"
              type='email'
              label="E-mail"
              variant="outlined"
              fullWidth
              required
            />
          </Grid2>

          <Grid2 xs={12}>
            <TextField
              name="salary"
              label="Salary"
              variant="outlined"
              fullWidth
              type="number"
              required
            />
          </Grid2>

          <Grid2 xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Add Employee
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Box>
  );
}
