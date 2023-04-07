import React, { useState } from "react";
import Button from './button';

export default function CombinedClickCounter() {
    const [count, setCount] = useState(0);
    
    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div data-testid="combined-counters">
            <Button onClick={handleClick} count={count} dataTestId='combined-button-1'/>
            <Button onClick={handleClick} count={count} dataTestId='combined-button-2'/>
            <Button onClick={handleClick} count={count} dataTestId='combined-button-3'/>
        </div>
    )
}