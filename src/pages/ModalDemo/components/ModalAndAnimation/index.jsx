import { useState } from 'react';
import Modal from '../../Modal';
import style from './ModalAndAnimation.module.scss'

function ModalAndAnimation() {
    const [isOpen, setisOpen] = useState(false);
    function onRequestClose() {
        setisOpen(false);
    }
    return (
        <>
            <button onClick={() => setisOpen(true)}>ModalAndAnimation</button>
            <Modal
            isOpen={isOpen}
            closeTimeoutMS={300}
            onRequestClose ={() => onRequestClose()}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
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

export default ModalAndAnimation;