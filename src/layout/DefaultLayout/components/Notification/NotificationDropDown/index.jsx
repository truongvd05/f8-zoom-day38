import style from './NotificationDropDown.module.scss'

import NotificationItem from '../NotificationItem';
import { useEffect } from 'react';

function NotificationDropDown({isOpen, onClose}) {
    useEffect(() => {
        if(!isOpen) return;
        function handleClose(e) {
            const target = e.target.closest(`.${style.wrap}`)
            if(!target) {
                onClose();
            }
        }
        document.addEventListener("mousedown", handleClose)
        return () => {
            document.removeEventListener("mousedown", handleClose)
        }
    }, [isOpen, onClose])
        if(!isOpen) return null;
    return (
        <div className={style.wrap}>
            <div className={style.container}>
                <div className={style.title}>
                    <p>Thông báo</p>
                    <p>Đánh dấu đã đọc</p>
                </div>
                <div className={style.content}>
                    <NotificationItem
                    src="https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png"
                    message={`Tóm tắt chương`}
                    children={`một ngày trước`}
                    >
                    </NotificationItem>
                </div>
            </div>
        </div>
    )
}

export default NotificationDropDown;