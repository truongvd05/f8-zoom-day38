import { useRef, useState } from "react";
import Modal from "../../../../components/Modal";

function ModalCurrent() {
    const ref = useRef();
    return(
        <>
            <button onClick={() => ref.current.open()}>open</button>
            <button onClick={() => ref.current.close()}>Close</button>
            <button onClick={() => ref.current.toggle()}>Toggle</button>
            <Modal ref={ref}
            bodyOpenClassName="modal-open"
            htmlOpenClassName="modal-open"
            >
                <p>Modal Current</p>
            </Modal>
        </>
    )
}

export default ModalCurrent;