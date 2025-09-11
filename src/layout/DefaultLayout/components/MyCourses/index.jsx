import { useState } from 'react';
import style from './MyCourses.module.scss'
import MyCoursesDropDown from './MyCoursesDropDown';

function MyCourses() {
    const [isOpen, setisOpen] = useState(false);
    return (
        <div className={style.container}>
            <p onClick={() => {setisOpen(true)}} className={style.courses}>Khóa học của tôi</p>
            <MyCoursesDropDown isOpen={isOpen} onClose={() => setisOpen(false)}/>
        </div>
    )
}

export default MyCourses; 