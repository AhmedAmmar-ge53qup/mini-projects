"use client"
import { createClient } from '@/utils/supabase/client';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {

  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    const fetchUser = async () => {
        
        const {data: {user}} = await supabase.auth.getUser();
        return user;
    }
    fetchUser().then(user => setUser(user)).catch(err => console.log(err));
  }, [])  

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MyApp
        </Typography>
        
        {user ? (
          <Box display="flex" alignItems="center">
            <Typography variant="body1" sx={{ marginRight: 2 }}>
              {user.email}
            </Typography>
            <Button color="inherit" onClick={handleSignOut}>Sign Out</Button>
          </Box>
        ) : (
          <Box>
            <Button color="inherit">Sign In</Button>
            <Button color="inherit">Sign Up</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
