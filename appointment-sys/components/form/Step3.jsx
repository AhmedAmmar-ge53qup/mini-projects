import { FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

export default function Step3({formErrors, status, setStatus, service, setService, appointmentDate, setAppointmentDate}) {

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    name="appointmentDate"
                    renderInput={(props) => <TextField {...props} />}
                    label="Appointment Date"
                    value={appointmentDate}
                    onChange={setAppointmentDate} // Update state on change
                    error={!!formErrors.appointmentDate}
                    helperText={formErrors.appointmentDate}
                    required
                    inputProps={{
                        min: new Date().toISOString().split("T")[0], // Prevent selecting past dates
                    }}
                    fullWidth
                />
            </LocalizationProvider>

            <FormControl fullWidth variant="outlined" required error={!!formErrors.status}>
                <InputLabel>Status</InputLabel>
                <Select
                    name="status"
                    label="Status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="confirmed">Confirmed</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                </Select>
                {formErrors.status && <Typography variant="body2" color="error">{formErrors.status}</Typography>}
            </FormControl>

            <FormControl fullWidth variant="outlined" required error={!!formErrors.service}>
                <InputLabel>Service</InputLabel>
                <Select
                    name="service"
                    label="Service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                >
                    <MenuItem value="consultation">Consultation</MenuItem>
                    <MenuItem value="meeting">Meeting</MenuItem>
                    <MenuItem value="check-up">Check-up</MenuItem>
                </Select>
                {formErrors.service && <Typography variant="body2" color="error">{formErrors.service}</Typography>}
            </FormControl>
        </>
    )
}
