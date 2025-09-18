import { useRef } from "react";
import CustomInput from "../../components/CustomInput";

function FocusDemo() {
    const conter = useRef(0)
    conter.current += 1;
    const inputRef1 = useRef();
    const inputRef2 = useRef();
    const handleClearBoth = () => {
        inputRef1.current.clear();
        inputRef2.current.clear();
    }
    const handleGetValue = () => {
        alert(`Input1: ${inputRef1.current.getValue()}; Input2: ${inputRef2.current.getValue()}`);
    }
    return (
        <>
            <h1>Số lần render: {conter.current}</h1>
            <CustomInput ref={inputRef1}/>
            <CustomInput ref={inputRef2}/>
            <button onClick={() => inputRef1.current.focus()}>Focus Input 1</button>
            <button onClick={() => inputRef2.current.focus()}>Focus Input 2</button>
            <button onClick={() => handleClearBoth()}>Clear Both</button>
            <button onClick={() => handleGetValue()}>Get Values</button>
        </>
    )
}

export default FocusDemo;