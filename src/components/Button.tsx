import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gold-400 text-white hover:bg-gold-500 shadow-lg hover:shadow-xl",
    secondary: "bg-white text-stone-900 border border-stone-200 hover:bg-stone-50",
    outline: "bg-transparent border border-white/30 text-white hover:bg-white/10",
    dark: "bg-stone-900 text-gold-100 border border-stone-800 hover:bg-black"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;