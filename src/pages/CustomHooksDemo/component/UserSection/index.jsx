import useApi from '../../../../Hooks/useApi';
import useToggle from '../../../../Hooks/useToggle';
import style from './UserSection.module.scss'

function UserSection() {
    const [isVisible, toggleVisible, setVisible] = useToggle(false);
    const { data, loading, error, refetch } = useApi('https://jsonplaceholder.typicode.com/users?_limit=5');
    if (loading) return <div>Loading users...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <div>
            <button onClick={toggleVisible}>toggle user</button>
            <div className={isVisible ? style.hidden : style.show}>
                <h3>Users</h3>
                {data?.map(user => <div key={user.id}>{user.name} - {user.email}</div>)}
            </div>
        </div>
    );
}

export default UserSection;