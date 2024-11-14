import { TextField, Button, Typography, Box, Container } from '@mui/material';
import Link from 'next/link';
import { login } from './actions';

export default function LoginPage() {

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
          Log in
        </Typography>
        <form action={login} style={{ width: '100%' }}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            type="password"
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
            Log in
          </Button>
        </form>

        <Box sx={{ marginTop: 2, textAlign: 'center' }}>
          <Link href={"/auth/signup"}>
            <Button>
              {"Don't have an account? Sign up"}
            </Button>
          </Link>
          <Link href="/auth/forgot-password">
           <Button>
              Forgot your password?
           </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
