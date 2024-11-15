"use client"
import { Button, Grid2, Box, Stepper, Step, StepLabel } from '@mui/material';
import Step1 from '@/components/form/Step1';
import Step2 from '@/components/form/Step2';
import Step3 from '@/components/form/Step3';
import Step4 from '@/components/form/Step4';
import FinalStep from '@/components/form/FinalStep';  // Import FinalStep component
import { useState } from 'react';

export default function AppointmentForm() {
    const [activeStep, setActiveStep] = useState(0); // Track current step in Stepper
    const [status, setStatus] = useState('');
    const [service, setService] = useState('');
    const [appointmentDate, setAppointmentDate] = useState(null);

    // Form state to store user input
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        notes: ''
    });

    // Error state to store validation errors
    const [formErrors, setFormErrors] = useState({
        fullName: '',
        email: '',
        phone: '',
        appointmentDate: '',
        status: '',
        service: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);  // Track if form is successfully submitted

    // Step titles
    const steps = ['Personal Information', 'Contact Details', 'Appointment Details', 'Review & Submit'];

    // Handle form submission
    function handleSubmit(event) {
        event.preventDefault();
        // Check if there are any errors left
        if (Object.values(formErrors).some(error => error !== '')) {
            console.log('Please correct the errors before submitting.');
            return;
        }
        console.log({ ...formData, appointmentDate, status, service });
        // Simulate form submission (you could replace this with an actual API call)
        setIsSubmitted(true);
        setActiveStep(4); // Go to the FinalStep after successful submission
    }

    // Handle next step
    const handleNext = () => {
        // Validate the current step before proceeding
        if (!validateStep()) return;

        setActiveStep(prevStep => prevStep + 1);
    };

    // Handle back step
    const handleBack = () => {
        setActiveStep(prevStep => prevStep - 1);
    };

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Validate fields for the current step
    const validateStep = () => {
        const errors = { ...formErrors };

        switch (activeStep) {
            case 0:
                // Validate fullName and email
                errors.fullName = formData.fullName.trim() === '' ? 'Full name is required.' : '';
                errors.email = !/\S+@\S+\.\S+/.test(formData.email) ? 'A valid email is required.' : '';
                break;

            case 1:
                // Validate phone
                errors.phone = !/^\+\d{1,3} \d{1,14}$/.test(formData.phone) ? 'Format must match: +999 9999999' : '';
                break;

            case 2:
                // Validate appointment date, status, and service
                errors.appointmentDate = !appointmentDate ? 'Appointment date is required.' : '';
                errors.status = !status ? 'Status is required.' : '';
                errors.service = !service ? 'Service is required.' : '';
                break;

            case 3:
                // All fields in review step are already validated in previous steps
                break;

            default:
                break;
        }

        setFormErrors(errors);
        return !Object.values(errors).some(error => error !== ''); // Return true if no errors
    };

    // Handle Enter key press (skip next step if validation fails)
    function handlePressEnter(e) {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default Enter key behavior (form submission)

            // If it's the final step, submit the form
            if (activeStep === steps.length - 1) {
                handleSubmit(e); // Submit the form on the last step
            } else {
                // Validate the current step before going to the next one
                if (validateStep()) {
                    handleNext(); // Proceed to the next step if validation passes
                }
            }
        }
    }

    // Handle Restart (to start a new appointment)
    const handleRestart = () => {
        setIsSubmitted(false);
        setActiveStep(0);
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            notes: ''
        });
        setStatus('');
        setService('');
        setAppointmentDate(null);
    };

    return (
        <Box sx={{ maxWidth: 600, margin: 'auto', padding: 3 }}>
            {/* Stepper */}
            <Stepper activeStep={activeStep} alternativeLabel sx={{ marginBottom: 5 }}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <form onSubmit={handleSubmit} onKeyDown={handlePressEnter}>
                <Grid2 container flexDirection="column" spacing={3}>
                    {/* Step 1: Personal Information */}
                    {activeStep === 0 && <Step1 formData={formData} formErrors={formErrors} handleChange={handleChange} />}
                    {/* Step 2: Contact Details */}
                    {activeStep === 1 && <Step2 formData={formData} formErrors={formErrors} handleChange={handleChange} />}
                    {/* Step 3: Appointment Details */}
                    {activeStep === 2 && (
                        <Step3
                            formErrors={formErrors}
                            status={status}
                            setStatus={setStatus}
                            service={service}
                            setService={setService}
                            appointmentDate={appointmentDate}
                            setAppointmentDate={setAppointmentDate}
                        />
                    )}
                    {/* Step 4: Review & Submit */}
                    {activeStep === 3 && <Step4 formData={formData} handleChange={handleChange} status={status} service={service} appointmentDate={appointmentDate} />}
                    {/* Final Step (Success message) */}
                    {activeStep === 4 && <FinalStep onRestart={handleRestart} />}

                    {/* Navigation Buttons */}
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
