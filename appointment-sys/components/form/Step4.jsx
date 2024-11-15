import { TextField } from "@mui/material"

export default function Step4({formData, handleChange}) {
    return (
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
    )
}

