import { NavLink } from 'react-router-dom';
import style from './Navigation.module.scss'

const nav = [
    {
        link: "/Performance-Demo",
        title: "PerformanceDemo"
    },
    {
        link: "/profile",
        title: "profile"
    },
    {
        link: "/modal-demo",
        title: "modal demo"
    },
    {
        link: "/scroll-demo",
        title: "scroll demo"
    },
    {
        link: "/HOC-Demo-page",
        title: "HOCDemopage"
    },
    {
        link: "/Render-Props-Demo",
        title: "RenderPropsDemo"
    },
    {
        link: "/custom-hooks-demo",
        title: "Custom Hooks Demo"
    },
]
    
function Navigation() {
    return (
        <div className={style.wrap}>
            <ul className={style.container}>
                {nav.map((item, index) => {
                    return <li key={index} className={style.item}><NavLink className={({isActive}) => isActive ? style.active : ""} to={item.link}>{item.title}</NavLink></li>
                })}
            </ul>
        </div>
    )
}

export default Navigation;