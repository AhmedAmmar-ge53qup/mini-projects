import { Box, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function FinalStep({ onRestart }) {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <CheckCircleIcon sx={{ fontSize: 100, color: 'green', marginBottom: 2 }} />
      <Typography variant="h4" color="green" sx={{ marginBottom: 2 }}>
        Success!
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 3 }}>
        Your appointment has been successfully booked. We will contact you shortly.
      </Typography>
      <Button variant="contained" color="primary" onClick={onRestart}>
        Start New Appointment
      </Button>
    </Box>
  );
}
