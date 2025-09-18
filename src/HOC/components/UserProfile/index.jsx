import withLoading from '../../withLoading';
import style from './UserProfile.module.scss'

function UserProfile() {
    return (
        <div>
            <h3>User Profile</h3>
            <p>Name: John Doe</p>
            <p>Email: john@example.com</p>
        </div>
    )
}


export default withLoading(UserProfile);