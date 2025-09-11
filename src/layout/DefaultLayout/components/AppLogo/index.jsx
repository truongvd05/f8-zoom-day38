import { NavLink } from 'react-router-dom';
import logo from '../../../../assets/images/f8logo.webp'
import style from './AppLogo.module.scss'

function AppLogo() {
    return (
        <div className={style.wrap}>
            <NavLink to={'/'}><img className={style.logo} src={logo} alt="" /></NavLink>
            <h1>Học lập trình để đi làm</h1>
        </div>
    )
}

export default AppLogo;