// import { useEffect, useState } from 'react';
// import axios from 'axios';
import useFetch from "../hooks/useFetch";


const FetchingData = () => {
    // posts are what we are trying to access
    const { data, error, loading } = useFetch('posts');

    // if loading is true than this will display
    if (loading) {
        return <div>The page is loading</div>;
    }

    if (error) {
        return <p>An error occurred: {error} </p>;
    }
    // this is how you can build out a list, i wonder if you can 
    return (
        <>
            {data?.map((movie) => {
                return (
                    <div key={movie.id}>
                        <p>{movie.movieName}</p>
                        <p>{movie.movieYear}</p>
                        <p>{movie.movieScore}</p>
                    </div>
                );
            })}
        </>
    );
};

export default FetchingData;