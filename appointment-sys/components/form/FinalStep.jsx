import { Box, Typography, Button, Link as MuiLink, Grid2 } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from 'next/link';

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
      <Grid2 container justifyContent={"space-between"}>
        <Button variant="contained" color="primary" onClick={onRestart}>
          Start New Appointment
        </Button>

        {/* Styled Link */}
        <Link href="/appointments" passHref>
          <MuiLink
            sx={{
              display: 'inline-block',
              marginTop: 2,  // Adds space between the button and the link
              fontSize: '1rem',
              fontWeight: 500,
              color: 'primary.main',  // Use the primary theme color for consistency
              textDecoration: 'none', // Remove the default underline
              '&:hover': {
                textDecoration: 'underline', // Add underline on hover for better user experience
                cursor: 'pointer',
              },
            }}
          >
            See all appointments →
          </MuiLink>
        </Link>
      </Grid2>
    </Box>
  );
}
