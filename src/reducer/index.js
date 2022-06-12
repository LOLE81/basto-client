import { GET_ANIMAL, GET_ANIMALS, SEARCH_ANIMAL, ALPHABETICAL_SORT, DELETE_ANIMAL, UPDATE_ANIMAL} from '../actions/types'

const initialState = {
    animals: [],
    //allAnimals: [],    
    //animalDetails: [],
    animalTypes: ['Novillo', 'Toro', 'Vaquillona'],
    devices: ['COLLAR', 'CARAVANA']
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ANIMALS:
            return {
                ...state,
                animals: action.payload,
                allAnimals: action.payload
            };

        case UPDATE_ANIMAL:
            return {
                ...state,
                animals: action.payload
            }

        default:
            return state;
    }
}