import { useEffect } from 'react';
import SearchItem from '../SearchItem';
import style from './DropDownSearchForm.module.scss'
import PropTypes from 'prop-types';

function DropDownSearchForm({isOpen, value, onClose}) {
    useEffect(() => {
        function handleClose(e) {
            const target = e.target.closest(`.${style.container}`);
            console.log(target);
            if(!target) {   
                onClose();
                console.log(123);
                
            }
        }
        if(isOpen) {
            document.addEventListener("mousedown", handleClose)
        }
        return () => {
            document.removeEventListener("mousedown", handleClose)
        }
    }, [isOpen, onClose])

    if(!isOpen) return null;

    return (
        <div className={style.container}>
            <div className={style.wrap}>
                <p>Kết quả cho '{value}'</p>
            </div>
            <div className={style.item}>
                <div className={style.title}>
                    <h2>Khóa học</h2>
                    <a href="">Xem thêm</a>
                </div>
                <ul>
                    <li className={style.result}>
                        <SearchItem normal src='https://www.vhv.rs/dpng/d/524-5245981_react-js-logo-png-transparent-png-download.png' >Xây dựng Website với ReactJs</SearchItem>
                    </li>
                    <li className={style.result}>
                        <SearchItem normal src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/459px-ISO_C%2B%2B_Logo.svg.png' >Lập trình c++, cơ bản, năng cao</SearchItem>
                    </li>
                    <li className={style.result}>
                        <SearchItem normal src='https://www.w3.org/html/logo/img/html5-topper.png' >HTML CSS pro</SearchItem>
                    </li>
                </ul>
            </div>
            <div className={style.item}>
                <div className={style.title}>
                    <h2>Bài viết</h2>
                    <a href="">Xem thêm</a>
                </div>
                <ul>
                    <li className={style.result}>
                        <SearchItem normal src='https://www.vhv.rs/dpng/d/524-5245981_react-js-logo-png-transparent-png-download.png' >TyperScrip là gì, vì sao nên dùng TyperScrip</SearchItem>
                    </li>
                    <li className={style.result}>
                        <SearchItem normal src='https://khoahochatde.com/wp-content/uploads/2025/01/62f13d2424a47.png' >Học viên Funix lạc đường tới F8</SearchItem>
                    </li>
                    <li className={style.result}>
                        <SearchItem normal src='https://www.vhv.rs/dpng/d/524-5245981_react-js-logo-png-transparent-png-download.png' >Bạn đã biết cách đưa trang wed của mình lên github</SearchItem>
                    </li>
                </ul>
            </div>
            <div className={style.item}>
                <div className={style.title}>
                    <h2>Video</h2>
                    <a href="">Xem thêm</a>
                </div>
                <ul>
                    <li className={style.result}>
                        <SearchItem normal src='https://www.vhv.rs/dpng/d/524-5245981_react-js-logo-png-transparent-png-download.png' >Giới thiệu khóa học</SearchItem>
                    </li>
                    <li className={style.result}>
                        <SearchItem normal src='https://www.vhv.rs/dpng/d/524-5245981_react-js-logo-png-transparent-png-download.png' >Them/sửa/xóa với Fetch và REST API</SearchItem>
                    </li>
                </ul>
            </div>
        </div>
    )
}

DropDownSearchForm.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    value: PropTypes.string,
    onClose: PropTypes.func,
}

export default DropDownSearchForm;