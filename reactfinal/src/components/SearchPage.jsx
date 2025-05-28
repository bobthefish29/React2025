import { AnimalList } from './animal/animalList.jsx';
import {useState} from 'react';
import {useParams, Outlet } from 'react-router-dom';
import Box from '../elements/Box.tsx';
import { useContext } from 'react';
import { ThemeContext } from '../context/themes.jsx';


import '../css/searchPage.css';

//https://api-staging.adoptapet.com/search/pet_search?key=hg4nsv85lppeoqqixy3tnlt3k8lj6o0c&v=3&output=json&city_or_zip=47374&geo_range=50&species=dog&breed_id=real=801&sex=m&age=young&color_id=54&pet_size_range_id=2&hair=&bonded_pair=&special_needs=&include_mixes=&added_after=&start_number=1&end_number=50&meta_only=0

const SearchPage = () => {
    const [listDisplay, setListDisplay] = useState(false);
    const { id } = useParams();
    const { theme } = useContext(ThemeContext);

    function newSerch(){
        setListDisplay(prev => !prev)
    }

    return (
        <Box backGroundColor={theme.mainBackground} Name="searchPage">
            {id ? (
                <Outlet />
            ):(
                // this might be where i can have the new search/fine friend button
                <Box>
                    <button className="searchButton" onClick={()=>{newSerch(listDisplay)}} style={{backgroundColor:theme.buttonBackground, color: theme.text}}>Find a Friend</button>
                    { listDisplay && <AnimalList />}
                </Box>
            )}
        </Box>
    )
}

export default SearchPage;