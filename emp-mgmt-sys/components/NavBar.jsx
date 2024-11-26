"use client";
import { createClient } from '@/utils/supabase/client';
import { Button, Navbar, NavbarContent } from '@nextui-org/react'; // Import NextUI components
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      return user;
    };
    fetchUser().then(user => setUser(user)).catch(err => console.log(err));
  }, []);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <Navbar isBordered>
      <NavbarContent>
        <h3 className="mr-auto">Employee Management System</h3>
      </NavbarContent>

      {user ? (
        <NavbarContent>
          <p className="mr-4">{user.email}</p>
          <Button auto flat color="danger" onClick={handleSignOut}>
            Sign Out
          </Button>
        </NavbarContent>
      ) : (
        <NavbarContent>
          <Button auto flat color="primary" className="mr-2">
            Sign In
          </Button>
          <Button auto flat color="primary">
            Sign Up
          </Button>
        </NavbarContent>
      )}
    </Navbar>
  );
}
