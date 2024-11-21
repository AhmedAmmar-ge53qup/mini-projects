import { FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function Step3({
    formErrors,
    status,
    setStatus,
    service,
    setService,
    appointmentDate,
    setAppointmentDate,
    setAppointmentTime,
    appointmentTime,
}) {
    const [existingAppointmentTimes, setExistingAppointmentTimes] = useState([]);

    // Fetch existing appointment times for the selected day
    useEffect(() => {
        if (appointmentDate) {
            const selectedDate = dayjs(appointmentDate).format("YYYY-MM-DD");

            // Fetch appointments for the selected date
            axios
                .get(`/api/appointments?date=${selectedDate}`)
                .then((res) => setExistingAppointmentTimes(res.data))
                .catch((err) => console.log(err));
        }
    }, [appointmentDate]);

    // Extract hours from the existing appointment times for the selected date
    const disabledHours = existingAppointmentTimes.map((date) => dayjs(date).hour());

    const isHourDisabled = (hour) => disabledHours.includes(hour);

    const formatHourToAMPM = (hour) => dayjs().hour(hour).format("h:00 A");

    const availableHours = [];
    for (let i = 8; i <= 17; i++) {
        // Check if the hour is disabled (i.e., already taken)
        if (!isHourDisabled(i)) {
            availableHours.push(i);
        }
    }

    const handleTimeChange = (e) => {
        const selectedTime = e.target.value;
        setAppointmentTime(selectedTime);
    };

    return (
        <>
            {/* Date Picker */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    name="appointmentDate"
                    renderInput={(props) => <TextField {...props} />}
                    label="Appointment Date"
                    value={appointmentDate ? dayjs(appointmentDate) : null}
                    onChange={(newDate) => setAppointmentDate(newDate)}
                    error={!!formErrors.appointmentDate}
                    helperText={formErrors.appointmentDate}
                    required
                    minDate={dayjs()} // Prevent selecting past dates
                    views={["day"]} // Only show the day selection (no time)
                    inputProps={{ min: new Date().toISOString().split("T")[0] }} // Disable past dates in the input field
                    fullWidth
                />
            </LocalizationProvider>

            {/* Time Picker - Always visible, but options are conditional */}
            <FormControl fullWidth sx={{ marginTop: 2 }}>
                <InputLabel>Time</InputLabel>
                <Select
                    value={appointmentTime || ""}
                    onChange={handleTimeChange}
                    displayEmpty
                    error={!!formErrors.appointmentTime}
                    disabled={!appointmentDate} // Disable select if no date is selected
                >
                    <MenuItem value="" disabled>
                        Select a time
                    </MenuItem>
                    {appointmentDate && availableHours.length > 0 && availableHours.map((hour) => (
                        <MenuItem key={hour} value={hour}>
                            {formatHourToAMPM(hour)}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Status Selector */}
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
                {formErrors.status && (
                    <Typography variant="body2" color="error">
                        {formErrors.status}
                    </Typography>
                )}
            </FormControl>

            {/* Service Selector */}
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
                {formErrors.service && (
                    <Typography variant="body2" color="error">
                        {formErrors.service}
                    </Typography>
                )}
            </FormControl>
        </>
    );
}
