import { useEffect } from 'react';
import style from './UserMenuDropDown.module.scss'
import { NavLink } from 'react-router-dom';

function UserMenuDropDown({isOpen, onClose}) {
    useEffect(() => {
        if(!isOpen) return;
        function handleClose(e) {
            const target = e.target.closest(`.${style.wrap}`);
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
                <img className={style.img} src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png" alt="" />
                <div className={style.item}>
                    <p>Trường Vũ Đình</p>
                    <p>@vudinhtruong1</p>
                </div>
            </div>
            <ul className={style.list}>
                <li><NavLink to="/profile">Trang cá nhân</NavLink></li>
            </ul>
            <ul className={style.list}>
                <li><NavLink to="/modal-demo">Viết Blog</NavLink></li>
                <li><NavLink to="/scroll-demo">Bài viết của tôi</NavLink></li>
                <li><NavLink to="/FocusDemo">Bài viết đã lưu</NavLink></li>
            </ul>
            <ul className={style.list}>
                <li><NavLink to="/HOCDemopage">Cài đặt</NavLink></li>
                <li><NavLink to="/RenderPropsDemo">Đăng xuất</NavLink></li>
            </ul>
        </div>
    )
}

export default UserMenuDropDown;