import PropTypes from "prop-types";
import clsx from "clsx";

import style from './Modal.module.scss'
import { useEffect } from "react";


function Modal({
    children,
    isOpen = false,
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
})
{
    function handleonRequestClose() {
        setTimeout(onRequestClose, closeTimeoutMS)
    }
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
    }, [isOpen, onAfterOpen, handleonRequestClose, closeTimeoutMS, bodyOpenClassName])

    return (
        <>
            <div className={clsx(style.modal, customOverlay, isOpen && style.show)}             
            onClick={(e) => {
                handleClickOverlay(e)
            }}
            style={{ "--transition-duration": `${closeTimeoutMS}ms` }}
            >
                <div className={clsx(style.container, className)}>
                    <div className={style.title}>
                        <h2>Modal</h2>
                        <i onClick={() => handleonRequestClose()} className={`fa-solid fa-xmark ${style.icon}`}></i>
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool,
    onAfterOpen: PropTypes.func,
    onAfterClose: PropTypes.func,
    onRequestClose: PropTypes.func,
    closeTimeoutMS: PropTypes.number,
    overlayClassName: PropTypes.string,
    className: PropTypes.string,
    bodyOpenClassName: PropTypes.string,
    htmlOpenClassName: PropTypes.string,
    shouldCloseOnOverlayClick: PropTypes.bool,
    shouldCloseOnEsc: PropTypes.bool,
    customOverlay: PropTypes.string,
    bodyOpenClassName: PropTypes.string,
}

export default Modal;