import React from 'react';
import { TextField } from '@mui/material';

const Step1 = ({ formData, handleChange, errors }) => {
    return (
        <div>
            <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
                fullWidth
                margin="normal"
            />
        </div>
    );
};

export default Step1;
