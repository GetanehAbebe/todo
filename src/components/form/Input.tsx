import React from 'react'
import InputProps from '../../interfaces/InputProps'

const Input: React.FC<InputProps> = ({ type="text", ...props }) => {
    return (
      <input {...props} />
    );
  };

export default Input