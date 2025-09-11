import { useState } from "react";
import Modal from "../../Modal";

import style from './ModalCustom.module.scss'

function ModalCustom() {
    const [isOpen, setisOpen] = useState(false);
    function onRequestClose() {
        setisOpen(false);
    }
    return (
        <>
            <button onClick={() => setisOpen(true)}>ModalCustom</button>

            <Modal
            isOpen={isOpen}
            bodyOpenClassName="modal-open"
            htmlOpenClassName="modal-open"
            onRequestClose ={() => onRequestClose()}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            customOverlay={style['my-custom-class']}
            className={style.customcontainer}
            >
                <h1>Custom Modal</h1>
            </Modal>
        </>
       
    )
}

export default ModalCustom;