import { Box, Button, Grid2, TextField, Typography } from "@mui/material"

export default function AddEmployeeForm({employee, handleSubmit}) {
  return (
    <Box sx={{ width: '100%', maxWidth: 400, margin: 'auto', padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        {employee ? "Update Employee" : "Add New Employee"}
      </Typography>
      <form action={handleSubmit}>
        <Grid2 container spacing={2}>
          <Grid2 xs={12}>
            <TextField
              defaultValue={employee?.name}
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              required
            />
          </Grid2>

          <Grid2 xs={12}>
            <TextField
              defaultValue={employee?.email}
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
              defaultValue={employee?.salary}
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
              {employee ? "Update Employee" : "Add Employee"}
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Box>
  )
}
