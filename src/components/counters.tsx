import React from "react";
import ClickCounter from './clickCounter';
import CombinedClickCounter from './combinedClickCounter';

export default function Counters() {
    return (
        <div>
            <ClickCounter name='counter-1'/>
            <ClickCounter name='counter-2'/>
            <CombinedClickCounter data-testid='combined-counter'/>
        </div>
    )
}
