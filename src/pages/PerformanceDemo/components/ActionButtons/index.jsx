import { memo, useCallback } from 'react';
import style from './ActionButtons.module.scss'

const ActionButtons = memo(({onIncrement, onReset}) => {

    console.log("render ActionButtons");
    return (
        <>
            <button onClick={() => onIncrement()}>Increment Count</button>
            <button onClick={() => onReset()} >Reset</button>
        </>
    )
})

export default ActionButtons;