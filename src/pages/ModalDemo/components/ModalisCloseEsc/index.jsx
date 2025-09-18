import { useState } from 'react'
import style from './ModalisCloseEsc.module.scss'
import Modal from "../../../../components/Modal";



function ModalisCloseEsc() {
    const [isOpen, setisOpen] = useState(false);

    function onRequestClose() {
        setisOpen(false);
    }
    return (
        <>
            <button onClick={() => setisOpen(true)}>ModalisCloseEsc</button>
            <Modal
            isOpen={isOpen}
            onRequestClose ={() => onRequestClose()}
            bodyOpenClassName="modal-open"
            htmlOpenClassName="modal-open"
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={false}
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

export default ModalisCloseEsc;