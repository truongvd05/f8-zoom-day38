import { useEffect, useState } from 'react';
import style from './Profile.module.scss'

import defaultAvatar from '../../assets/images/defaultAvatar.jpg'

function Profile() {
    const [previewUrl, serpreviewUrl] = useState(null)

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(previewUrl)
        }
    }, [previewUrl])

    const handleImage = (e) => {
        const image = e.target.files[0];
        const previewUrl = URL.createObjectURL(image)
        console.log(previewUrl);
        
        serpreviewUrl(previewUrl);
    } 
    return (
        <div className={style.container}>
        <h1>Profile</h1>
        <label>
            <input type="file" accept="image/*" onChange={handleImage} hidden />
            <img className={style.picture} src={previewUrl || defaultAvatar} alt="" />
        </label>
        </div>
    )
}

export default Profile;