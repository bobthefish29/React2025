import Box from "./../components/Box";
import Button from "./../components/Button";
import Text from "./../components/Text";
import FormField from "./../components/FormField";
import ErrorField from "./../components/ErrorField";

import usePost from '../hooks/usePost';


import { useState } from 'react';
// this is the whole conponent
export const Form = () =>{


    const [movieName, setMovieName] = useState("");
    const [scoreValue, setScoreValue] = useState(3);
    const [movieYear, setMovieYear] = useState();
    const [movieError, setMovieError] = useState(false);


    const { postData, userPost } = usePost();

    function submitData() {
        const data = {
            movieName,
            movieYear,
            movieScore: scoreValue,
        };

        postData("posts", data);

    }



    // check the data of the input to make sure its valed
    const checkValedDate = (value) => {
        // converts the value into a date object
        const date = new Date(value);
        // this is than checking to see if the inputed date is grater than or is now
        if(date >= Date.now()){
            setMovieYear(value);
        }else{
            setMovieYear(value);
        }
    }





    // this check the movie name, if its valed it set it to moviename,
    function valedMovieName(mn) {
        // Use RegExp constructor to avoid escape issues with '/'
        const forbiddenChars = /[<>{}[\]()/"';=+\-*&^%$#@!~`|?\\]/g;
        if (!forbiddenChars.test(mn)) {
            setMovieError(false)
            setMovieName(mn);
        } else {
            setMovieError(true)
        }
    }

    if(userPost){
        return(
            <>
                <div>This movie was posted</div>
            </>
        )
    }



    return(
        // this is my form, its a box
        <Box size="boxLarge">
            <Text size="smallText" color="red">Please enter the movie</Text>
            <FormField name="Movie" class="nun" type="text" function={(event)=>valedMovieName(event.target.value)} />
            {movieError && <ErrorField children="There is an error in the movie name" errorColor="red"/>}
            <FormField name="Release Year" class="nun" type="date" function={(event)=>[checkValedDate(event.target.value)]} />
            <FormField name="Score" class="nun" type="range" function={(e)=>[setScoreValue(e.target.value)]} min="1" max="5" />
            <Button color="lightgreen" function={() => [submitData()]} >Submit</Button>
        </Box>
    );
}
