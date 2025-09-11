import { useEffect, useState } from 'react';
import style from './GoToTop.module.scss'

function GoToTop() {
    const [scrollTop, setScrollTop] = useState(0)
    useEffect(() => {
        function handleScroll() {
            const current = window.scrollY || document.documentElement.scrollTop;
            setScrollTop(current);;
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])
    const gotop = (() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
    });
    })
    return (
        <div className={`${style.icon} `}>
            <i onClick={() => gotop()} className={`fa-solid fa-arrow-up ${scrollTop>300 ? style.show : ""}`}></i>
        </div>
    )
}

export default GoToTop;