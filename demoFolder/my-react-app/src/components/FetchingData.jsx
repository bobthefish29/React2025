import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from "./Loading";


// Display a list of posts
const FetchingData = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        const getData = async () =>{
            // trying to get the data
            try{
                // this is getting the data
                const response = await axios.get('http://localhost:3000/posts');
                setPosts(response.data);
            } catch (error){
                console.log('an error occurred:', error);
            }
        }
        getData();
    }, []);

    return(
        <>
        {
            posts.length ? (
                posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <p>Id: {post.id}</p>
                            <p>Title: {post.title}</p>
                            <p>{post.body}</p>
                        </div>
                    );
            })
            ) : (<Loading />)}
        </>
    );
};

export default FetchingData;