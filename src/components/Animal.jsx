import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteAnimal, getAnimal } from '../actions';
import './animal.css';
import Loader from './Loader';

export default function Animal({ id_senasa, type, weight, cattle, device, number, id }) {
    const dispatch = useDispatch();
    const [isAnimal, setIsAnimal]  = useState(true)
    const animals = useSelector(state => state.animals)

    function checkAnimal(id) {
        if (!animals.find(animal => animal.id === id)) return setIsAnimal(false)
    }

    //Getting animal and saving details in global state:
    function handleClick(e) {
        dispatch(getAnimal(id))
    }

    //Dispatching the function to delete animal from db and global state:
    function handleDeleteClick(e) {
        dispatch(deleteAnimal(id));
        checkAnimal(id)
        setTimeout(() => {
            alert('¡Eliminado correctamente!')
        }, 1700)
    }

    return (
        <>
            <td>{id_senasa}</td>
            <td>{type}</td>
            <td>{weight}</td>
            <td>{cattle}</td>
            <td>{device}</td>
            <td>{number}</td>
            <td className='edit-delete'>
                <Link className='update-link' to={`/update/${id}`}>
                    <button onClick={e => {handleClick(e)}} className="update-button">UPDATE</button>
                </Link>
                {
                    isAnimal ? <button className="update-button" onClick={e => {handleDeleteClick(e)}}>ELIMINAR</button> : <Loader />
                }
            </td>
        </>
    )
};