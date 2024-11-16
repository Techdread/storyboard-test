import React, { useState } from 'react';
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormLabel,
  FormHelperText,
  Stack,
  Switch,
  Button,
} from '@mui/material';
import PropTypes from 'prop-types';

const CustomForm = ({ onSubmit, spacing = 3 }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    occupation: '',
    subscribe: false,
    notifications: true,
    gender: 'prefer-not-to-say',
    interests: [],
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: event.target.type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { width: '100%' },
        maxWidth: 600,
        mx: 'auto',
        p: 3,
      }}
    >
      <Stack spacing={spacing}>
        {/* Text Fields */}
        <TextField
          required
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          helperText="Please enter your full name"
        />

        <TextField
          required
          type="email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          helperText="We'll never share your email"
        />

        <TextField
          type="number"
          label="Age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          InputProps={{ inputProps: { min: 0, max: 120 } }}
        />

        {/* Select Field */}
        <FormControl fullWidth>
          <InputLabel>Occupation</InputLabel>
          <Select
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            label="Occupation"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="student">Student</MenuItem>
            <MenuItem value="employed">Employed</MenuItem>
            <MenuItem value="self-employed">Self Employed</MenuItem>
            <MenuItem value="retired">Retired</MenuItem>
          </Select>
          <FormHelperText>Select your current occupation</FormHelperText>
        </FormControl>

        {/* Radio Group */}
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            row
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Male"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Other"
            />
            <FormControlLabel
              value="prefer-not-to-say"
              control={<Radio />}
              label="Prefer not to say"
            />
          </RadioGroup>
        </FormControl>

        {/* Checkboxes */}
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.subscribe}
              onChange={handleChange}
              name="subscribe"
            />
          }
          label="Subscribe to newsletter"
        />

        {/* Switch */}
        <FormControlLabel
          control={
            <Switch
              checked={formData.notifications}
              onChange={handleChange}
              name="notifications"
            />
          }
          label="Enable notifications"
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

CustomForm.propTypes = {
  onSubmit: PropTypes.func,
  spacing: PropTypes.number,
};

export default CustomForm;
