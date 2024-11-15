"use client"
import { useState } from 'react';
import { TextField, Button, Grid2, FormControl, InputLabel, Select, MenuItem, Typography, Box, Stepper, Step, StepLabel } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function Home() {
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
    // Proceed to final submission (API call, etc.)
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

      <form onSubmit={handleSubmit}  onKeyDown={handlePressEnter}>
        <Grid2 container flexDirection="column" spacing={3}>

          {/* Step 1: Personal Information */}
          {activeStep === 0 && (
            <>
              <TextField
                name="fullName"
                label="Full Name"
                variant="outlined"
                fullWidth
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                error={!!formErrors.fullName}
                helperText={formErrors.fullName}
                required
              />
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                error={!!formErrors.email}
                helperText={formErrors.email}
                required
              />
            </>
          )}

          {/* Step 2: Contact Details */}
          {activeStep === 1 && (
            <>
              <TextField
                name="phone"
                label="Phone"
                variant="outlined"
                type="tel"
                fullWidth
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                error={!!formErrors.phone}
                helperText={formErrors.phone}
                required
              />
            </>
          )}

          {/* Step 3: Appointment Details */}
          {activeStep === 2 && (
            <>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  name="appointmentDate"
                  renderInput={(props) => <TextField {...props} />}
                  label="Appointment Date"
                  value={appointmentDate}
                  onChange={setAppointmentDate} // Update state on change
                  error={!!formErrors.appointmentDate}
                  helperText={formErrors.appointmentDate}
                  required
                  inputProps={{
                    min: new Date().toISOString().split("T")[0], // Prevent selecting past dates
                  }}
                  fullWidth
                />
              </LocalizationProvider>

              <FormControl fullWidth variant="outlined" required error={!!formErrors.status}>
                <InputLabel>Status</InputLabel>
                <Select
                  name="status"
                  label="Status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <MenuItem value="pending">Pending</MenuItem>
                  <MenuItem value="confirmed">Confirmed</MenuItem>
                  <MenuItem value="completed">Completed</MenuItem>
                </Select>
                {formErrors.status && <Typography variant="body2" color="error">{formErrors.status}</Typography>}
              </FormControl>

              <FormControl fullWidth variant="outlined" required error={!!formErrors.service}>
                <InputLabel>Service</InputLabel>
                <Select
                  name="service"
                  label="Service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <MenuItem value="consultation">Consultation</MenuItem>
                  <MenuItem value="meeting">Meeting</MenuItem>
                  <MenuItem value="check-up">Check-up</MenuItem>
                </Select>
                {formErrors.service && <Typography variant="body2" color="error">{formErrors.service}</Typography>}
              </FormControl>
            </>
          )}

          {/* Step 4: Review & Submit */}
          {activeStep === 3 && (
            <>
              <TextField
                name="notes"
                label="Notes"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                placeholder="Enter any special requests or notes"
                value={formData.notes}
                onChange={handleChange}
                inputProps={{
                  maxLength: 500, // Limit notes to 500 characters
                }}
              />
            </>
          )}

          {/* Navigation Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {activeStep > 0 && (
              <Button onClick={handleBack} variant="outlined">
                Back
              </Button>
            )}

            <Button
              onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
              variant="contained"
              color="primary"
            >
              {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </Box>
        </Grid2>
      </form>
    </Box>
  );
}
