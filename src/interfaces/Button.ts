import React from "react";

export interface ButtonProps {
    children: React.ReactNode;
    clickHandler: () => void;
    disabled?: boolean;
    width?: string;
    height?: string;
    color?: string;
    backgroundColor?: string;
    hoverBackgroundColor?: string;
    borderColor?: string;
}