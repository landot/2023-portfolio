import React, { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    count: number;
    dataTestId: string;
}

export default function Button({count, onClick, dataTestId}: ButtonProps) {
    return (
        <button onClick={onClick} data-testid={dataTestId}>
            These button has been clicked {count} times
        </button>
    )
}