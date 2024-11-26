"use client"
import { Button, Grid2, Box, Stepper, Step, StepLabel } from '@mui/material';
import Step1 from '@/components/form/Step1';
import Step2 from '@/components/form/Step2';
import Step3 from '@/components/form/Step3';
import Step4 from '@/components/form/Step4';
import FinalStep from '@/components/form/FinalStep';
import { useState } from 'react';
import axios from 'axios';

export default function AppointmentForm() {
    const [activeStep, setActiveStep] = useState(0);
    const [status, setStatus] = useState('');
    const [service, setService] = useState('');
    const [appointmentDate, setAppointmentDate] = useState(null); // This will directly bind with the date picker
    const [appointmentTime, setAppointmentTime] = useState(null); // This will directly bind with the time picker

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        notes: ''
    });

    const [formErrors, setFormErrors] = useState({
        fullName: '',
        email: '',
        phone: '',
        appointmentDate: '',
        status: '',
        service: '',
    });

    const steps = ['Personal Information', 'Contact Details', 'Appointment Details', 'Review & Submit'];

    // Handle form submission
    function handleSubmit(event) {
        event.preventDefault();

        if (Object.values(formErrors).some(error => error !== '')) {
            console.log('Please correct the errors before submitting.');
            return;
        }

        if (!appointmentDate || !appointmentTime) {
            console.log("Invalid appointment date or time.");
            return;
        }

        // Create a full DateTime object by combining appointmentDate and appointmentTime
        const fullAppointmentDate = new Date(appointmentDate);
        fullAppointmentDate.setHours(appointmentTime, 0, 0, 0); // Set time based on appointmentTime (hour only)

        axios.post('/api/appointments', { ...formData, appointmentDate: fullAppointmentDate, status, service })
            .then(res => {
                console.log("Appointment Added: ", res.data);
                setActiveStep(4); // Go to the FinalStep after successful submission
            })
            .catch(err => {
                alert(`${err.response.data.error.match(/\(`(.*?)`\)/)[1]} Already Exists`);
            });


    }

    // Handle next step
    const handleNext = () => {
        if (!validateStep()) return;
        setActiveStep(prevStep => prevStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevStep => prevStep - 1);
    };

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const validateStep = () => {
        const errors = { ...formErrors };

        switch (activeStep) {
            case 0:
                errors.fullName = formData.fullName.trim() === '' ? 'Full name is required.' : '';
                errors.email = !/\S+@\S+\.\S+/.test(formData.email) ? 'A valid email is required.' : '';
                break;
            case 1:
                errors.phone = !/^\+\d{1,3} \d{1,14}$/.test(formData.phone) ? 'Phone format must match: +999 9999999' : '';
                break;
            case 2:
                errors.appointmentDate = !appointmentDate ? 'Appointment date is required.' : '';
                errors.status = !status ? 'Status is required.' : '';
                errors.service = !service ? 'Service is required.' : '';
                break;
            default:
                break;
        }

        setFormErrors(errors);
        return !Object.values(errors).some(error => error !== '');
    };

    function handlePressEnter(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (activeStep === steps.length - 1) {
                handleSubmit(e);
            } else {
                if (validateStep()) {
                    handleNext();
                }
            }
        }
    }

    const handleRestart = () => {
        setActiveStep(0);
        setFormData({ fullName: '', email: '', phone: '', notes: '' });
        setStatus('');
        setService('');
        setAppointmentDate(null);
    };

    return (
        <Box sx={{ maxWidth: 600, margin: 'auto', padding: 3 }}>
            <Stepper activeStep={activeStep} alternativeLabel sx={{ marginBottom: 5 }}>
                {steps.map((label) => (
                    <Step key={label}><StepLabel>{label}</StepLabel></Step>
                ))}
            </Stepper>

            <form onSubmit={handleSubmit} onKeyDown={handlePressEnter}>
                <Grid2 container flexDirection="column" spacing={3}>
                    {activeStep === 0 && <Step1 formData={formData} formErrors={formErrors} handleChange={handleChange} />}
                    {activeStep === 1 && <Step2 formData={formData} formErrors={formErrors} handleChange={handleChange} />}
                    {activeStep === 2 && (
                        <Step3
                            formErrors={formErrors}
                            status={status}
                            setStatus={setStatus}
                            service={service}
                            setService={setService}
                            appointmentDate={appointmentDate}
                            setAppointmentDate={setAppointmentDate}
                            appointmentTime={appointmentTime}
                            setAppointmentTime={setAppointmentTime}
                        />
                    )}
                    {activeStep === 3 && <Step4 formData={formData} handleChange={handleChange} status={status} service={service} appointmentDate={appointmentDate} appointmentTime={appointmentTime} />}
                    {activeStep === 4 && <FinalStep onRestart={handleRestart} />}

                    {activeStep < 4 && (
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            {activeStep > 0 && <Button onClick={handleBack} variant="outlined">Back</Button>}
                            <Button onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext} variant="contained" color="primary">
                                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                            </Button>
                        </Box>
                    )}
                </Grid2>
            </form>
        </Box>
    );
}
