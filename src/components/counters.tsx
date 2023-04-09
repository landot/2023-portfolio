import React from "react";
import ClickCounter from './clickCounter';
import CombinedClickCounter from './combinedClickCounter';

export default function Counters() {
    return (
        <div>
            <p>buttons with individual click count:</p>
            <ClickCounter name='counter-1'/>
            <ClickCounter name='counter-2'/>
            <p>buttons with shared click count:</p>
            <CombinedClickCounter data-testid='combined-counter'/>
        </div>
    )
}
