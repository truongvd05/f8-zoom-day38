import useApi from '../../../../Hooks/useApi';
import useToggle from '../../../../Hooks/useToggle';
import style from './PostSection.module.scss'

function PostSection() {
    const [isVisible, toggleVisible, setVisible] = useToggle(false);
    const { data, loading, error, refetch } = useApi('https://jsonplaceholder.typicode.com/posts?_limit=5');
    if (loading) return <div>Loading posts...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <div>
            <button onClick={toggleVisible}>toggle post</button>
            <div className={isVisible ? style.hidden : style.show}>
                <div>
                    <h3>Posts</h3>
                    {data?.map(post => <div key={post.id}>{post.title}</div>)}
                </div>
            </div>
        </div>
    );    
}

export default PostSection;