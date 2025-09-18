import { useCallback, useEffect, useState } from "react";

function useApi(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const refetch = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            const json = await res.json();
            setData(json);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [url]);
    useEffect(() => {
        refetch();
    }, [refetch]);
    return { data, loading, error, refetch };
}

export default useApi;
