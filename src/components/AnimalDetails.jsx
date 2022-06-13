import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAnimal } from "../actions";
import { useNavigate } from "react-router-dom";

export default function AnimalDetails() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //Select animal details from global state:
    const animalDetails = useSelector(state => state.animalDetails);
    
    //Create a local state for input entries:
    const [input, setInput] = useState({
        id_senasa: '',
        type: '',
        weight: '',
        cattle_ranch: '',
        device: '',
        device_number: ''
    });

    //Completing inputs:    
    function handleChange(e) {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    //Calling the function to update animal details from db and global state:
    function handleClick(e) {        
        dispatch(updateAnimal(animalDetails._id, input));
        alert('¡Modificaciones aceptadas!');
        navigate('/');
    };

    return (
        <div>
            <form>
                <label>ID SENASA</label>
                <input type="text" placeholder={animalDetails.id_senasa} name="id_senasa" value={input.id_senasa} onChange={e => {handleChange(e)}}/>
                <label>Tipo de Animal</label>
                <input type="text" placeholder={animalDetails.type} name="type" value={input.type} onChange={e => {handleChange(e)}}/>
                <label>Peso (Kg)</label>
                <input type="text" placeholder={animalDetails.weight} name="weight" value={input.weight} onChange={e => {handleChange(e)}}/>
                <label>Nombre de potrero</label>
                <input type="text" placeholder={animalDetails.cattle_ranch} name="cattle_ranch" value={input.cattle_ranch} onChange={e => {handleChange(e)}}/>
                <label>Tipo de Dispositivo</label>
                <input type="text" placeholder={animalDetails.device} name="device" value={input.device} onChange={e => {handleChange(e)}}/>
                <label>Número de Dispositivo</label>
                <input type="text" placeholder={animalDetails.device_number} name="device_number" value={input.device_number} onChange={e => {handleChange(e)}}/>
                <button onClick={e => {handleClick(e)}}>CONFIRMAR CAMBIOS</button>
            </form>
        </div>
    )
}