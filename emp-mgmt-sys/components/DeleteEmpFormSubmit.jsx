"use client"
import { Button } from '@nextui-org/react';
import { useFormStatus } from 'react-dom';

export default function DeleteEmpFormSubmit() {
    const status = useFormStatus();
    return (
        <Button type="submit" auto flat color="danger" variant='ghost' isLoading={status.pending}>
            🗑️ {/* Delete Icon */}
        </Button>
    )
}
