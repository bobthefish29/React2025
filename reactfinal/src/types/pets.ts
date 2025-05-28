export type Pet = {
    id: number;
    name: string;
    // add other fields as needed
};

export type PetSearchResponse = {
    pets: Pet[];
};