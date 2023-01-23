import React from "react";
import { Button } from "../button/button";

export interface NavbarProps {
    className?: string;
    children?: React.ReactNode
}

export const Navbar = ({ className, children }: NavbarProps) => {
    return <nav className="navbar">
        <Button />
        <Button/>
        <img className="logo" />
        <Button />
        <Button />
    </nav>;
};