import clsx from "clsx";

import style from './Modal.module.scss'
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";


const Modal = forwardRef(({
    children,
    isOpen: _isOpen = false,
    onAfterOpen,
    onAfterClose,
    onRequestClose,
    closeTimeoutMS = 0,
    overlayClassName,
    className,
    bodyOpenClassName,
    htmlOpenClassName,
    shouldCloseOnOverlayClick = false,
    shouldCloseOnEsc = false,
    customOverlay,
    ...props
}, ref) =>
{
    const [isOpen, setIsOpen] = useState(_isOpen);
    const modalRef = useRef()
    useEffect(() => {
        setIsOpen(_isOpen)
    }, [_isOpen])
    function handleonRequestClose() {
        setTimeout(onRequestClose, closeTimeoutMS)
    }
    useImperativeHandle(ref,() => ({
        open() {
            setIsOpen(true);
        },
        close() {
            handleonRequestClose()
        },
        toggle() {
            setIsOpen(_isOpen => !_isOpen)
        },
    }))

    function handleKeyDown(e) {
        if(shouldCloseOnEsc) {
            if(e.key === "Escape") {
                handleonRequestClose();
            }
        }
    }
    function handleClickOverlay(e) {
        if(shouldCloseOnOverlayClick) {
            const target = e.target.closest(`.${style.container}`)
            if(!target) {
                handleonRequestClose();
            }
        }
    }
    // đóng mở modal
    useEffect(() => {
        let time;
        if(isOpen) {
            onAfterOpen?.()
            document.addEventListener("keydown", handleKeyDown);
            if(bodyOpenClassName) {
                document.body.classList.add(bodyOpenClassName)
            }            
            if(htmlOpenClassName) {
                document.documentElement.classList.add(htmlOpenClassName)
            }
        } else {
            onAfterClose?.();
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.classList.remove(bodyOpenClassName)
            document.documentElement.classList.remove(htmlOpenClassName)
            clearTimeout(time)
        };
    }, [isOpen, closeTimeoutMS, bodyOpenClassName, htmlOpenClassName])
    return (
        <>
            <div ref={modalRef} className={clsx(style.modal, customOverlay, isOpen && style.show)}             
            onClick={(e) => {
                handleClickOverlay(e)
            }}
            style={{ "--transition-duration": `${closeTimeoutMS}ms` }}
            >
                <div className={clsx(style.container, className)}>
                    <div className={style.title}>
                        <h2>Modal</h2>
                        <i onClick={() => handleonRequestClose() || setIsOpen(false)} className={`fa-solid fa-xmark ${style.icon}`}></i>
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
})

export default Modal;