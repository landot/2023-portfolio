import React, { useState } from "react";
import Button from './button';

export default function ClickCounter(props: { name: string; }) {
    const [count, setCount] = useState(0);
    
    function handleClick() {
        setCount(count + 1);
    }

    return (
        <Button onClick={handleClick} count={count} dataTestId={props.name}/>
    )
}