import { useState } from 'react';
import Modal from '../../Modal';
import style from './ModalCallback.module.scss'

function ModalCallback() {
    const [isOpen, setisOpen] = useState(false);
    function onRequestClose() {
        setisOpen(false);
    }
    function onAfterOpen() {
        console.log('Modal đã mở');
    }
    function onAfterClose() {
        console.log('Modal đã đóng');
    }
    return (
        <>
            <button onClick={() => setisOpen(true)}>ModalCallback</button>
            <Modal
            isOpen={isOpen}
            onRequestClose ={() => onRequestClose()}
            bodyOpenClassName="modal-open"
            htmlOpenClassName="modal-open"
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            onAfterOpen={() => onAfterOpen()}
            onAfterClose={() => onAfterClose()}
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

export default ModalCallback;