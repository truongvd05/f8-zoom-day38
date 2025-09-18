import { forwardRef, useImperativeHandle, useRef } from "react";

const CustomInput = forwardRef((
    {
        label,
        placeholder,
        value,
        onChange
    },
    ref) => {
        const inputRef = useRef();
        useImperativeHandle(ref , () => ({
            focus() {
                inputRef.current.focus()
            },
            blur() {
                inputRef.current.blur()
            },
            getValue() {
                return inputRef.current.value;
            },
            clear() {
                inputRef.current.value = "";
            }
        }))
    return (
        <div>
            <label htmlFor="">
                {label}
                <input ref={inputRef} placeholder={placeholder} value={value} onChange={onChange}  type="text" />
            </label>
        </div>
    )
})

export default CustomInput;