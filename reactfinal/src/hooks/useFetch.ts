import { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = 'https://api-staging.adoptapet.com/';

export const useFetch = <T = unknown>(url: string) => {
    const [data, setData] = useState<T | undefined | unknown>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseURL}${url}`);
                setData(response.data);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { data, loading, error };
};
