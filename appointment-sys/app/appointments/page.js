import { getAppointments } from "@/model/appointments";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Typography, // Import Typography to add the title
} from "@mui/material";

export default async function AppointmentsPage() {
  const appointments = await getAppointments();

  return (
    <Container
      sx={{
        display: "flex", // Using flexbox to center content
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        minHeight: "100vh", // Ensures full viewport height
        flexDirection: "column", // Stack the content vertically
        gap: 3, // Adds space between the title and table
      }}
    >
      {/* Title above the table */}
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        Appointment List
      </Typography>

      <TableContainer
        component={Paper}
        sx={{
          width: "100%", // Make sure the table uses full available width
          maxWidth: "1200px", // Optional: restrict the max width for better readability
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="appointments table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Appointment Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Service</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell>{appointment.id}</TableCell>
                <TableCell>{appointment.email}</TableCell>
                <TableCell>{appointment.phone}</TableCell>
                <TableCell>{appointment.fullName}</TableCell>
                <TableCell>
                  {new Date(appointment.appointmentDate).toLocaleString()}
                </TableCell>
                <TableCell>{appointment.status}</TableCell>
                <TableCell>{appointment.service}</TableCell>
                <TableCell>{appointment.notes || "-"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
