import EmployeesTable from "@/components/EmployeesTable";
import Navbar from "@/components/NavBar";
import { Container, Grid2, Typography, TextField, Button } from "@mui/material";
import Link from "next/link";

export default async function Home() {

  return (
    <>
      <Navbar />
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
          <Link href="/crud-emp/add">
            <Button variant="contained" color="primary" style={{ marginBottom: '20px' }}>
              Add Employee
            </Button>
          </Link>
          <EmployeesTable />
        </Grid2>
      </Container>
    </>
  );
}
