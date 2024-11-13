import EmployeesTable from "@/components/table/EmployeesTable";
import { Container, Grid2, Typography, TextField } from "@mui/material";

export default async function Home() {

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{ mb: 3 }}
      >
        Employee Management System
      </Typography>

      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        sx={{ mb: 3, maxWidth: 400 }}
      />

      <Grid2 container sx={{ width: "100%", maxWidth: 1200 }}>
        <EmployeesTable />
      </Grid2>
    </Container>
  );
}
