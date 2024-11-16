import React from 'react';
import { Button as MuiButton } from '@mui/material';
import PropTypes from 'prop-types';

const CustomButton = ({ variant, size, color, label, ...props }) => {
  return (
    <MuiButton
      variant={variant}
      size={size}
      color={color}
      {...props}
    >
      {label}
    </MuiButton>
  );
};

CustomButton.propTypes = {
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'warning', 'info', 'success']),
  label: PropTypes.string.isRequired,
};

CustomButton.defaultProps = {
  variant: 'contained',
  size: 'medium',
  color: 'primary',
};

export default CustomButton;
