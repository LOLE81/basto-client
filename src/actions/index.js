import axios from 'axios';
import { GET_ANIMAL, GET_ANIMALS, ADD_ANIMAL, ALPHABETICAL_SORT, SEARCH_ANIMAL, DELETE_ANIMAL, UPDATE_ANIMAL, LOCAL_HOST } from './types';


export function getAnimals() {
    return async function(dispatch) {
        try {
            const response = await axios.get(`${LOCAL_HOST}/api/animals`);
            return dispatch({type: GET_ANIMALS, payload: response.data})
        } catch (error) {
            console.log(error)
        }
    }
};

export function addAnimal(payload) {
    return async function() {
        try {
            const response = await axios.post(`${LOCAL_HOST}/api/animal`, payload);
        } catch (error) {
            console.log(error)
        }
    }
};

export function updateAnimal(id, payload) {
    return async function(dispatch) {
        try {
            const response = await axios.put(`${LOCAL_HOST}/api/animal/${id}`, payload)
            return dispatch({type: UPDATE_ANIMAL, payload: response.data})
        } catch (error) {
            console.log(error)
        }
    }
};

export function getAnimal(id) {
    return async function(dispatch) {
        try {
            const response = await axios.get(`${LOCAL_HOST}/api/animals/${id}`);
            return dispatch({type: GET_ANIMAL, payload: response.data})
        } catch (error) {
            console.log(error)
        }
    }
};

export function deleteAnimal(id) {
    return async function(dispatch) {
        try {
            const response = await axios.delete(`${LOCAL_HOST}/api/animal/${id}`);
            
            setTimeout(() => {                
                return dispatch({type: DELETE_ANIMAL, payload: response.data})
            }, 1600)

        } catch(error) {
            console.log(error)
        }
    }
}


