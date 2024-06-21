import React, { useState, useEffect } from 'react';
import { Stepper, Step, StepLabel, Button, Container, Paper, Typography } from '@mui/material';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const steps = ['Personal Information', 'Address Information', 'Confirmation'];

const MultiStepForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('formData'));
        if (savedData) {
            setFormData(savedData);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    const handleNext = () => {
        if (validateForm()) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        let tempErrors = {};
        if (activeStep === 0) {
            if (!formData.name) tempErrors.name = "Name is required";
            if (!formData.email) {
                tempErrors.email = "Email is required";
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                tempErrors.email = "Email address is invalid";
            }
            if (!formData.phone) tempErrors.phone = "Phone number is required";
        } else if (activeStep === 1) {
            if (!formData.address1) tempErrors.address1 = "Address Line 1 is required";
            if (!formData.city) tempErrors.city = "City is required";
            if (!formData.state) tempErrors.state = "State is required";
            if (!formData.zip) tempErrors.zip = "Zip Code is required";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            alert("Form submitted successfully!");
            localStorage.removeItem('formData');
        }
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <Step1 formData={formData} handleChange={handleChange} errors={errors} />;
            case 1:
                return <Step2 formData={formData} handleChange={handleChange} errors={errors} />;
            case 2:
                return <Step3 formData={formData} />;
            default:
                return 'Unknown step';
        }
    };

    return (
        <Container component={Paper} sx={{ padding: 4, marginTop: 4 }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <Typography variant="h5" gutterBottom>
                        All steps completed
                    </Typography>
                ) : (
                    <div>
                        {getStepContent(activeStep)}
                        <div>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ marginRight: 1 }}
                            >
                                Back
                            </Button>
                            {activeStep === steps.length - 1 ? (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </Button>
                            ) : (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                >
                                    Next
                                </Button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </Container>
    );
};

export default MultiStepForm;
