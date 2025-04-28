import { useState } from 'react';
import axios from 'axios';

const usePost = () => {
    const baseUrl = 'http://localhost:3000/';

    const [userPost, setUserPost] = useState(false);

    const postData = async (url, dataToPost) => {

        try {
            await axios.post(`${baseUrl}${url}`, dataToPost);
            setUserPost(true)
        } catch (err) {
            console.log('An error occurred:', err);
        }
    };

    return { postData, userPost };
};

export default usePost;

