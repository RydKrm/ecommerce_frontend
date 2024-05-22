import React from "react";

const ButtonSize = {
  default: "h-10 px-4 py-2",
  cart: "px-5 pt-2",
  sm: "h-7 rounded-md px-3",
  lg: "h-11 rounded-md px-8 ",
  icon: "h-10 w-10",
};

const ButtonVariant = {
  default:
    "bg-primary text-primary-foreground hover:bg-hover transition duration-700 hover:pl-2 rounded-md",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  outline:
    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline",
  cart: "text-bold bg-green-100 rounded-sm text-green-500 hover:bg-primary hover:text-white transition-all duration-700 hover:translate-y-2",
};

const Button = ({
  children,
  size = "default",
  variant = "default",
  className = "",
}) => {
  return (
    <button
      className={`${ButtonSize[size]} ${ButtonVariant[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
