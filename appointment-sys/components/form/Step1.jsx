import { TextField } from "@mui/material"

export default function Step1({formData, handleChange, formErrors}) {
    return (
        <>
            <TextField
                name="fullName"
                label="Full Name"
                variant="outlined"
                fullWidth
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                error={!!formErrors.fullName}
                helperText={formErrors.fullName}
                required
            />
            <TextField
                name="email"
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                error={!!formErrors.email}
                helperText={formErrors.email}
                required
            />
        </>
    )
}
