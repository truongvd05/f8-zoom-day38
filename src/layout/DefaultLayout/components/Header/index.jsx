import AppLogo from "../AppLogo";
import MyCourses from "../MyCourses";
import Notification from "../Notification";
import SearchForm from "../SearchForm";
import UserMenu from "../UserMenu";

import style from './Header.module.scss'

function Header() {
    return (
        <header className={style.header}>
            <div className={style.container}>
            <AppLogo/>
            <SearchForm/>
            <div className={style.user}>
                <MyCourses/>
                <Notification/>
                <UserMenu/>
            </div>
            </div>
        </header>
    )
}

export default Header;