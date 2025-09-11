import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import style from './SearchItem.module.scss'

function SearchItem({
    children,
    src,
    alt,
    href,
    normal= false,
    className,
    ...props
}) {
    return (
        <>
            <NavLink className={style.link} to={href || "#"}>
                <img {...props} src={src} alt={alt} className={clsx(className, {
                    [style.normal]: normal,
                })} />
            <p className={style.text}>{children}</p>
            </NavLink>
        </>
    )
}

SearchItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    href: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    normal: PropTypes.bool,
}

export default SearchItem;