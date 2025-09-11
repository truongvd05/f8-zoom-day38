import { useState } from 'react';
import style from './UserMenu.module.scss'
import UserMenuDropDown from './UserMenuDropDown';

function UserMenu() {
    const [isOpen, setisOpen] = useState(false);
    return (
        <div className={style.user}>
            <i onClick={() => setisOpen(true)} className="fa-solid fa-user"></i>
            <UserMenuDropDown isOpen={isOpen} onClose={() => setisOpen(false)}/>
        </div>
    )
}

export default UserMenu;