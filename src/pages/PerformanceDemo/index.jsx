import { useCallback, useRef, useState } from 'react';
import ActionButtons from './components/ActionButtons';
import CounterDisplay from './components/CounterDisplay';
import ExpensiveChild from './components/ExpensiveChild';
import style from './PerformanceDemo.module.scss'

function PerformanceDemo () {
    let arr = [
        {
            id: 1,
            name: "Nơi này có anh"
        },
        {
            id: 2,
            name: "Forget Me Now"
        },
        {
            id: 3,
            name: "Hạ còn vương nắng"
        },
        {
            id: 4,
            name: "Dịu dàng em đến"
        },
        {
            id: 5,
            name: "Đừng làm trái tim anh đau"
        }
    ]
    const [count, setCount] = useState(0);
    const [name, setName] = useState(null);
    const [items, setItem] = useState([]);
    const input = useRef();
    const randomIndex = useCallback(() => {
        const index = Math.floor(Math.random() * arr.length);
        const randomName = arr[index].name;
        setItem(prev => [
            ...prev,
            {id: prev.length+1, name: randomName}
        ])
    }, []) 
    
    const onIncrement = useCallback(() => {
    setCount(prev => prev + 1);
    }, []);
    const onReset  = useCallback(() => {
    setCount(prev => prev = 0);
    }, []);
    console.log("render");
    return (
        <div className={style.container}>
            <div>
                <h1>{name || "Vũ Đình Trường"}</h1>
                <input ref={input} type="text" placeholder="name"/>
                <button onClick={() => setName(input.current.value)}>Change Name</button>
            </div>
            <CounterDisplay count={count}/>
            <div className={style.wrap}>
                <ActionButtons onIncrement={onIncrement} onReset={onReset} />
                    <button onClick={() => randomIndex()}>Add Item</button>
            </div>
            <ExpensiveChild items={items}/>
        </div>
    )
}

export default PerformanceDemo ;