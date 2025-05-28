import { useFetch } from "../useFetch";
import type { PetSearchResponse}  from '../../types/pets';


export const useDetailedSearch = (url : string) =>{
    const { data, loading, error } = useFetch<PetSearchResponse>("search/pet_details?pet_id="+ url +"&key=hg4nsv85lppeoqqixy3tnlt3k8lj6o0c&v=3&output=json");

    return {pet: data?.pet , loading, error};
}

//https://api-staging.adoptapet.com/


// search/pet_details?pet_id=27885310&key=hg4nsv85lppeoqqixy3tnlt3k8lj6o0c&v=3&output=json