// import { useEffect, useState } from 'react';
// import axios from 'axios';
import useFetch from "../hooks/useFetch";


// Display a list of posts
// const FetchingData = () => {
//     const {data: posts, error, loading} = useFetch('posts');
//     // useEffect(()=>{
//     //     const getData = async () =>{
//     //         // trying to get the data
//     //         try{
//     //             // this is getting the data
//     //             const response = await axios.get('http://localhost:3000/posts');
//     //             setPosts(response.data);
//     //         } catch (error){
//     //             console.log('an error occurred:', error);
//     //         }
//     //     }
//     //     getData();
//     // }, []);

//     return(
//         <>
//         {
//             posts.length ? (
//                 posts.map((post) => {
//                     return (
//                         <div key={post.id}>
//                             <p>Id: {post.id}</p>
//                             <p>Title: {post.title}</p>
//                             <p>{post.body}</p>
//                         </div>
//                     );
//             })
//             ) : (<Loading />)}

//         </>
//     );
// };

const FetchingData = () => {
    // posts are what we are trying to access
    const { data, error, loading } = useFetch('posts');

    // if loading is true than this will display
    if (loading) {
        return <div>The page is loading</div>;
    }

    if (error) {
        return <p>An error occurred</p>;
    }
    // this is how you can build out a list, i wonder if you can 
    return (
        <>
            {data?.map((product) => {
                return (
                    <div key={product.id}>
                        <p>{product.id}</p>
                        <p>{product.title}</p>
                        <p>{product.body}</p>
                    </div>
                );
            })}
        </>
    );
};

export default FetchingData;