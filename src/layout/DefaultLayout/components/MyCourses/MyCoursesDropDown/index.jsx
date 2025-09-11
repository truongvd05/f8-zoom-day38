import { useEffect } from 'react';
import style from './MyCoursesDropDown.module.scss'

function MyCoursesDropDown({isOpen, onClose}) {
    useEffect(() => {
    if(!isOpen) return;
        function handleClose(e) {
            const target = e.target.closest(`.${style['course-drop']}`)
            if(!target) {
                onClose()
            }
        }
        document.addEventListener("mousedown", handleClose);
        return () => {
            document.removeEventListener("mousedown", handleClose);
        }
    }, [isOpen, onClose])
    if(!isOpen) return null;
    return (
        <div className={style['course-drop']}>
            <div className={style.title}>
                <p>Khóa học của tôi</p>
                <button>Xem tất cả</button>
            </div>
            <div className={style.wrap}>
                <img className={style['course-img']} src="https://files.fullstack.edu.vn/f8-prod/courses/31/67f4c93c28d4b.png" alt="" />
                <div className={style.content}>
                    <p>Fullsatck Web</p>
                    <p>Học cách đây 17 giờ trước</p>
                    <div className={style['progress-bar']}>
                        <div className={style['progress-fill']}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCoursesDropDown;