import { useFetch } from "../useFetch";
import type { PetSearchResponse}  from '../../types/pets';



export const usePetSearch = (url : string) =>{
    const { data, loading, error } = useFetch<PetSearchResponse>("search/pet_search?key=hg4nsv85lppeoqqixy3tnlt3k8lj6o0c&" + url);
    return {pets: data?.pets , loading, error};
}

//search/pet_search?key=hg4nsv85lppeoqqixy3tnlt3k8lj6o0c&v=3& output=json&city_or_zip=47374&geo_range=50&species=dog&breed_id=real=801&sex=m&age=young&color_id=54&pet_size_range_id=2&hair=&bonded_pair=&special_needs=&include_mixes=&added_after=&start_number=1&end_number=50&meta_only=0

