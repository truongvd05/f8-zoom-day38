import { useState } from 'react';
import Modal from "../../../../components/Modal";

import style from './ModalBasic.module.scss'

function ModalBasic() {
    const [isOpen, setisOpen] = useState(false);
    function onRequestClose() {
        setisOpen(false);
    }
    return (
        <>
            <button onClick={() => setisOpen(true)}>ModalBasic</button>
            <Modal
            isOpen={isOpen}
            onRequestClose={() => onRequestClose()}
            bodyOpenClassName="modal-open"
            htmlOpenClassName="modal-open"
            >
                <form action="">
                    <div className={style['wrap-input']}>
                        <p>Tài khoản</p>
                        <input className={style.input} type="text" placeholder="Email" />
                    </div>
                    <div className={style['wrap-input']}>
                        <p>Mật khẩu</p>
                        <input className={style.input} type="text" placeholder="Password" />
                    </div>
                    <button className={style.btn}>Đăng nhập</button>
                </form>
            </Modal>
        </>
        )
}

export default ModalBasic;