import {useParams} from 'react-router-dom';
import { useDetailedSearch } from '../../hooks/Animals/useDetailedAnimal.tsx';
import {useState, useContext} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { openShelterModal, closeShelterModal } from '../../ui/uiSlice';
import { ThemeContext } from '../../context/themes.jsx';

import Box from '../../elements/Box.tsx';
import Text from '../../elements/Text.tsx';
import Image from '../../elements/image.tsx';
import ShelterModal from '../../elements/shelterModal.tsx';
import '../../css/detailedPet.css';






const AnimalDetailed = () => {
    const { theme } = useContext(ThemeContext);
    const { id } = useParams();
    const { pet } = useDetailedSearch(id);

    const isOpen = useSelector((state) => state.ui.isShelterModalOpen);
    const dispatch = useDispatch();

    // if(pet){
    //     console.log(pet.images[0].original_url)
    // }

    return (
        <Box Name="detailedPetPage">
            {pet ? (
                <Box Name="detailedPetInfo" backGroundColor={theme.secBackground}>
                    <Text textColor={theme.text}>Last Updated: {pet.last_modified}</Text>
                    <Box Name="detailTop">
                        <Image  imageUrl={pet.images[0].original_url} Name="petImage"/>
                        <Box >
                            <Text Name="petNameText" textColor={theme.text}>Pet Name: {pet.pet_name}</Text>
                            <Box Name="petSexAgeHolder">
                                <Text textColor={theme.text}>Pet's Sex: {pet.sex}</Text>
                                <Text textColor={theme.text}>Pet's Age: {pet.age}</Text>
                            </Box>
                            <Text textColor={theme.text}>
                                {pet.primary_breed ? `Primary Breed: ${pet.primary_breed}` : "Primary Breed: Null"}
                            </Text>
                            <Text textColor={theme.text}>
                                {pet.secondary_breed ? `Secondary breed: ${pet.secondary_breed}` : "Secondary breed: Null"}
                            </Text>
                        </Box>
                    </Box>
                    <Box Name="detailbottom">
                        <button onClick={(e)=>{dispatch(openShelterModal())}} style={{backgroundColor:theme.buttonBackground, color: theme.text}}>See shelter information</button>
                        {isOpen && 
                        (<ShelterModal onClose={()=>dispatch(closeShelterModal())}>
                            <Box backGroundColor={theme.secBackground} Name="modal">
                                <Text textColor={theme.text}>Shelter Name: {pet.shelter_name}</Text>
                                {pet.addr_line_1 ?
                                    <Text textColor={theme.text}>Address: {pet.addr_line_1}</Text> : <Text textColor={theme.text}>Address: {pet.addr_line_2}</Text>}
                                <Text textColor={theme.text}>Email: {pet.email}</Text>
                                <Text textColor={theme.text}>Phone Number: ({pet.phone_area_code})-{pet.phone_number}</Text>
                                <button style={{backgroundColor:theme.buttonBackground, color: theme.text}}>Close</button>
                            </Box>
                        </ShelterModal>)}
                    </Box>
                </Box>
            ) : (
                <Text textColor={theme.text}>The page is loading</Text>
            )}
        </Box>
    );
}



export default AnimalDetailed;