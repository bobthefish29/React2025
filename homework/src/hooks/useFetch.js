import { useEffect, useState } from 'react';
import axios from 'axios';

// the url, will be custom depending on what i want,
const useFetch = (url) => {
    const baseURL = 'http://localhost:3000/';
    const [data, setData] = useState();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            // trys to get the data, if it can it sets the data to data, than unloads the program
            try {
                const response = await axios.get(`${baseURL}${url}`);
                setData(response.data);
            } catch (error) {
                console.log('An error occurred:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [url]);

    return { data, error, loading }
}

export default useFetch;