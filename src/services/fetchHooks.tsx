import { useEffect, useState } from "react";

const useFetch = <T, >(request: () => Promise<T[]>) => {
    const [loading, setLoading,] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [data, setData] = useState<T[]>([]);

    useEffect(() => {
        request().then(data => setData(data))
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }, [request]);
    return {loading, error, data};
};

export default useFetch;