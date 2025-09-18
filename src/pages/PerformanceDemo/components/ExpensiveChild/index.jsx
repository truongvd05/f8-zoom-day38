import style from './ExpensiveChild.module.scss'

import { memo, useMemo } from 'react';

const ExpensiveChild = memo(({items}) => {
    if(!items) return;
    const expensiveCalculation = useMemo(() => {
    console.log('Calculating longest name...');
    let longest = '';
    items.forEach(item => {
        for(let i = 0; i < 100000000; i++) {}
        if (item.name.length > longest.length) {
        longest = item.name;
        }
    });
    return longest;
    }, [items]);
    return(
        <>
            <h2>Tổng độ dài tên (sau khi tính toán nặng): {expensiveCalculation}</h2>
            <ul>
                {items.map((item, index) => {
                    return <li key={item.id}>{index} {item.name}</li>
                })}
            </ul>
        </>
    )
})

ExpensiveChild.displayName = "ExpensiveChild"

export default ExpensiveChild;