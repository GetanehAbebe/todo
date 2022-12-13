import React from "react";
import {ButtonProps} from "../../interfaces/ButtonProps";

const Button: React.FC<ButtonProps> = ({ type="",name, ...props }) => {
  return (
    <button {...props}>{name}</button>
  );
};
export default Button