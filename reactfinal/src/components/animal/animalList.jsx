import { usePetSearch } from '../../hooks/Animals/usePetSearch.tsx';
import Image from '../../elements/image.tsx';
import Button from '../../elements/Button.tsx';
import Text from '../../elements/Text.tsx';
import { useNavigate} from 'react-router-dom';
import '../../css/animalList.css';
import Box from '../../elements/Box.tsx';
import { useContext } from 'react';
import { ThemeContext } from '../../context/themes.jsx';


export const AnimalList = () => {

    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();
    // const { id } = useParams();

    const selectedPet = (e) =>{
        console.log(e)
        navigate(e.target.id)
    }

    // right now this is the search for pets, this is where i need to allow other changes
    const { pets } = usePetSearch("v=3&output=json&city_or_zip=47374&geo_range=50&species=dog&breed_id=real=801&sex=m&age=young&color_id=54&pet_size_range_id=2&hair=&bonded_pair=&special_needs=&include_mixes=&added_after=&start_number=1&end_number=50&meta_only=0");

    return (
        <div className="gridLayout">
            {Array.isArray(pets) ? (
                pets.map((pet) => (
                    <div key={pet.pet_id} className="animalList">
                        <Button theID={pet.pet_id} Clicked={(e)=>selectedPet(e)} ClassName="petRecored" backGroundColor={theme.secBackground} textColor={theme.text}>
                            <Box Name="imageHolder">
                                <Image imageUrl={pet.large_results_photo_url} noImage={pet.pet_name} Name="petPhoto"></Image>
                            </Box>
                            <Box Name="textHolder">
                                <Box Name="textLeftHolder">
                                    <Text textColor={theme.text}>Pet Name: {pet.pet_name}</Text>
                                    <Text textColor={theme.text}>Sex: {pet.sex}</Text>
                                    <Text textColor={theme.text}>Age: {pet.age}</Text>
                                </Box>
                                <Box Name="textRightHolder">
                                    <Text textColor={theme.text}>Size: {pet.size}</Text>
                                    <Text textColor={theme.text}>Primary breed: {pet.primary_breed}</Text>
                                    <Text textColor={theme.text}>Secondary Breed: {pet.secondary_breed}</Text>
                                </Box>
                            </Box>
                        </Button>
                    </div>
                ))
            ) : (
                <p style={{color:theme.text}}>The page is loading</p>
            )}
        </div>
    );
}