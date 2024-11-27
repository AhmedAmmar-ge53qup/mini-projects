"use client"
import { Button } from '@nextui-org/react';
import { useFormStatus } from 'react-dom';

export default function AddEmpFormSubmit({ employee }) {
    const status = useFormStatus();

    return (
        <Button type="submit" fullWidth isLoading={status.pending}>
            {employee ? "Update Employee" : "Add Employee"}
        </Button>
    )
}
