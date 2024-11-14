import { TextField, Button, Typography, Box, Container } from '@mui/material';
import Link from 'next/link';
import { signup } from './actions';

export default function SignUpPage() {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 8,
          padding: 2,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Sign Up
        </Typography>
        <form action={signup} style={{ width: '100%' }}>
          <TextField
            label="Email"
            type="email"
            name="email" 
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Confirm Password"
            type="password"
            name="confirmPassword"  // Ensures the form field is captured in formData
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Sign Up
          </Button>
        </form>

        <Box sx={{ marginTop: 2, textAlign: 'center' }}>
          <Link href="/auth/login" passHref>
            <Button>
              {"Already have an account? Log in"}
            </Button>
          </Link>
          <Link href="/auth/forgot-password" passHref>
            <Button>
              Forgot your password?
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
