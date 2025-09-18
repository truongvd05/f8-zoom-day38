import { memo } from 'react';
import style from './CounterDisplay.module.scss'

const CounterDisplay = memo(({count}) => {
    console.log("render CounterDisplay");
    return (
        <h1>count hiện tại {count}</h1>
    )
})
CounterDisplay.displayName = "CounterDisplay"

export default CounterDisplay;