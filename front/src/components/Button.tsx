import classNames from 'classnames';
import React from 'react';
import { Link } from "react-router-dom";

interface ButtonProps {
  conf: {
    path: string,
    text: string
  };
  mainButton?: boolean;
}

const Button: React.FC<ButtonProps> = ({ conf, mainButton = false }) => {
  return (
    <div className={
      classNames(
        'border border-white border-1 rounded-full p-1 px-4 cursor-pointer', 
        { 'bg-[#FAFDEA] text-[#504c3d] font-bold': mainButton }
        )}>
      <Link to={conf.path}>{conf.text}</Link>
    </div>
  );
};

export default Button;
