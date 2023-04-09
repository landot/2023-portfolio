import React, { ButtonHTMLAttributes } from "react";
import { Button } from "@mui/material";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    count: number;
    dataTestId: string;
}

export default function CounterButton({count, onClick, dataTestId}: ButtonProps) {
    return (
        <Button style={{display: "block", margin: "auto"}}variant="contained" onClick={onClick} data-testid={dataTestId}>
            Button clicks: {count} times
        </Button>
    )
}