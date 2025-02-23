import React from 'react'

interface ButtonProps {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    variant?: "outline" | "contain"
    borderRadius?: string | number;
    fontSize?: string;
    fontWeight?: string | number;
    onClick?: () => void
    type?: "button" | "reset" | "submit" | undefined
}

const Button = (props: ButtonProps) => {
    const { children, style, variant, borderRadius, fontSize, fontWeight, onClick, type } = props

    const variantStyles: React.CSSProperties = {
        ...(variant === "outline" && {
            border: "1px solid #000",
            padding: "10px 20px",
            background: "none",
            cursor: "pointer",
            color: "#000"
        }),
        ...(variant === "contain" && {
            border: "none",
            padding: "10px 20px",
            background: "blue",
            cursor: "pointer",
            color: "#fff"
        })
    };


    return (
        <>
            <div>
                <button style={{ ...variantStyles, ...style, borderRadius: borderRadius ?? "6px", fontSize: fontSize || "15px", fontWeight: fontWeight || 550 }} onClick={onClick} type={type} >
                    {children || "Button"}
                </button>
            </div >
        </>
    )
}

export default Button