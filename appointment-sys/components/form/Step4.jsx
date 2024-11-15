import { TextField, Typography, Box } from "@mui/material";

export default function Step4({ formData, handleChange, status, service, appointmentDate }) {
    return (
        <Box>
            {/* Display Full Name */}
            <Box sx={{ marginBottom: 2 }}>
                <Typography variant="h6" color="textPrimary">Full Name</Typography>
                <TextField
                    value={formData.fullName}
                    variant="outlined"
                    fullWidth
                    disabled
                    sx={{ marginBottom: 1 }}
                />
            </Box>

            {/* Display Email */}
            <Box sx={{ marginBottom: 2 }}>
                <Typography variant="h6" color="textPrimary">Email</Typography>
                <TextField
                    value={formData.email}
                    variant="outlined"
                    fullWidth
                    disabled
                    sx={{ marginBottom: 1 }}
                />
            </Box>

            {/* Display Phone Number */}
            <Box sx={{ marginBottom: 2 }}>
                <Typography variant="h6" color="textPrimary">Phone</Typography>
                <TextField
                    value={formData.phone}
                    variant="outlined"
                    fullWidth
                    disabled
                    sx={{ marginBottom: 1 }}
                />
            </Box>

            {/* Display Appointment Date */}
            <Box sx={{ marginBottom: 2 }}>
                <Typography variant="h6" color="textPrimary">Appointment Date</Typography>
                <TextField
                    value={appointmentDate ? new Date(appointmentDate).toUTCString() : 'Not Selected'}
                    variant="outlined"
                    fullWidth
                    disabled
                    sx={{ marginBottom: 1 }}
                />
            </Box>

            {/* Display Status */}
            <Box sx={{ marginBottom: 2 }}>
                <Typography variant="h6" color="textPrimary">Status</Typography>
                <TextField
                    value={status || 'Not Selected'}
                    variant="outlined"
                    fullWidth
                    disabled
                    sx={{ marginBottom: 1 }}
                />
            </Box>

            {/* Display Service */}
            <Box sx={{ marginBottom: 2 }}>
                <Typography variant="h6" color="textPrimary">Service</Typography>
                <TextField
                    value={service || 'Not Selected'}
                    variant="outlined"
                    fullWidth
                    disabled
                    sx={{ marginBottom: 1 }}
                />
            </Box>

            {/* Notes - Editable */}
            <Box sx={{ marginBottom: 2 }}>
                <TextField
                    name="notes"
                    label="Notes"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    placeholder="Enter any special requests or notes"
                    value={formData.notes}
                    onChange={handleChange}
                    inputProps={{
                        maxLength: 500, // Limit notes to 500 characters
                    }}
                />
            </Box>
        </Box>
    );
}
