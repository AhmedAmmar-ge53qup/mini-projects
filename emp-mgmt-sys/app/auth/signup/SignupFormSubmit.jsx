"use client"
import { Button } from '@nextui-org/react';
import { useFormStatus } from 'react-dom';

export default function SignupFormSubmit() {

    const status = useFormStatus();

    return (
        <Button type="submit" fullWidth color="primary" isLoading={status.pending} className="mt-4">
            Sign Up
        </Button>
    )
}
