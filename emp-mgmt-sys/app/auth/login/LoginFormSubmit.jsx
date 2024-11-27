"use client"
import { Button } from '@nextui-org/react';
import { useFormStatus } from 'react-dom';

export default function LoginFormSubmit() {
  const status = useFormStatus();

  return (
    <Button type="submit" fullWidth color="primary" isLoading={status.pending} className="mt-4">
      Log in
    </Button>
  )
}
