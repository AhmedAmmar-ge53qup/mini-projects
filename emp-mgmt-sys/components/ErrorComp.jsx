import { Alert, AlertTitle, Box, Typography } from '@mui/material';
import Link from 'next/link';

export default function ErrorComp({ error, goBackPath }) {
  if (!error) return null; // If no error is passed, render nothing

  return (
    <Box sx={{ padding: 2 }}>
      <Alert severity="error">
        <AlertTitle>{error.name || 'Error'}</AlertTitle>
        <Typography variant="body2">
          <strong>Status:</strong> {error.status || 'N/A'}
        </Typography>
        <Typography variant="body2">
          <strong>Code:</strong> {error.code || 'N/A'}
        </Typography>
        <Typography variant="body2">
          <strong>Message:</strong> {error.message || 'An unknown error occurred.'}
        </Typography>

        {error.reasons && error.reasons.length > 0 && (
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="body2">
              <strong>Reasons:</strong>
            </Typography>
            <ul>
              {error.reasons.map((reason, index) => (
                <li key={index}>
                  <Typography variant="body2">{reason}</Typography>
                </li>
              ))}
            </ul>
          </Box>
        )}

        {/* Link to homepage */}
        <Box sx={{ marginTop: 2 }}>
          <Link href={goBackPath ?? "/"}>
            <Typography variant="body2" sx={{ color: 'primary.main', textDecoration: 'underline' }}>
              Go back to homepage
            </Typography>
          </Link>
        </Box>
      </Alert>
    </Box>
  );
}