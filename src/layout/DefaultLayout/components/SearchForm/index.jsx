import { useState } from 'react';
import DropDownSearchForm from './DropDownSearchForm';
import style from './SearchForm.module.scss'
function SearchForm() {
    const [isOpen, setisOpen] = useState(false);
    const [value, setValue] = useState("");
    return (
        <div className={style.wrap}>
            <input
            className={style.input}
            type="text"
            placeholder='Tìm kiếm khóa học, bài viết, video'
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setisOpen(true)}
            />
            <i className={`fa-solid fa-magnifying-glass ${style.icon}`}></i>
            <DropDownSearchForm isOpen={isOpen} value={value} onClose={() => setisOpen(false)}/>
        </div>
    )
}

export default SearchForm;