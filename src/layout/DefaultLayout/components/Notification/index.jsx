import { useState } from 'react';
import style from './Notification.module.scss'
import NotificationDropDown from './NotificationDropDown';


function Notification() {
    const [isOpen, setisOpen] = useState(false);
    return (
        <div className={style.notification}>
            <i onClick={() => setisOpen(true)} className={`fa-solid fa-bell ${style.icon}`}></i>
            <NotificationDropDown isOpen={isOpen} onClose= {() => setisOpen(false)}/>
        </div>
    )
}

export default Notification;