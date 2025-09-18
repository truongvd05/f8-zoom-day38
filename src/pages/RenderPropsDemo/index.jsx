import DataFetcher from "../../components/DataFetcher";

import style from './RenderPropsDemo.module.scss'

function RenderPropsDemo() {
    return (
        <>
            <h1 className={style.title}>Render Props Demo</h1>
            <div className={style.container}>
                <DataFetcher url="https://jsonplaceholder.typicode.com/posts?_limit=5">
                    {({ data, loading, error, refetch }) => {
                        if (loading) return <div>Loading posts...</div>;
                        if (error) return <div>Error: {error}</div>;
                        return (
                            <div>
                                <div>
                                    <h3>Posts</h3>
                                    {data?.map(post => <div key={post.id}>{post.title}</div>)}
                                </div>
                            </div>
                        );
                    }}
                </DataFetcher>
                <DataFetcher url="https://jsonplaceholder.typicode.com/users?_limit=5">
                    {({ data, loading, error, refetch }) => {
                        if (loading) return <div>Loading users...</div>;
                        if (error) return <div>Error: {error}</div>;
                        return (
                        <div>
                            <h3>Users</h3>
                            {data?.map(user => <div key={user.id}>{user.name} - {user.email}</div>)}
                        </div>
                        );
                    }}
                </DataFetcher>
            </div>
        </>
    )
}

export default RenderPropsDemo;