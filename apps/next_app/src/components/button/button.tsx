import React from "react";

export interface ButtonProps {
    className?: string;
}

export const Button = ({ className }: ButtonProps) => {
    return <div className={className}>Button</div>;
};