import { useEffect, useState } from "react";


function DataFetcher({
    url,
    children
}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then(res => res.json())
        .then(setData)
        .catch(setError)
        .finally(() => setLoading(false))
    }, [url])    
    return children({ data, loading, error })
}

export default DataFetcher;