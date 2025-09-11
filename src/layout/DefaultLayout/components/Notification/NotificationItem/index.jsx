import PropTypes from "prop-types";
import clsx from "clsx";

import style from './NotificationItem.module.scss'

function NotificationItem({
    message,
    src,
    alt,
    customImg,
    title,
    children,
}) {
    return (
        <div className={style.container}>
            <img className={clsx(customImg, style.normal)} src={src} alt={alt} />
            <div className={style.text}>
                <p>Bài học <b className={style.bold}>{message}</b> mới đã được thêm vào.</p>
                <p className={style['text-small']}>{children}</p>
            </div>
        </div>
    )
}

NotificationItem.propTypes = {
    children: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    message: PropTypes.string,
}

export default NotificationItem;