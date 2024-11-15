import { TextField } from "@mui/material"

export default function Step2({formData, handleChange, formErrors}) {
  return (
    <TextField
    name="phone"
    label="Phone"
    variant="outlined"
    type="tel"
    fullWidth
    placeholder="Enter your phone number"
    value={formData.phone}
    onChange={handleChange}
    error={!!formErrors.phone}
    helperText={formErrors.phone}
    required
  />
  )
}
