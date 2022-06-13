import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteAnimal, getAnimal } from '../actions';
import './animal.css';

export default function Animal({ id_senasa, type, weight, cattle, device, number, id }) {
    const dispatch = useDispatch();

    //Getting animal and saving details in global state:
    function handleClick(e) {
        dispatch(getAnimal(id))
    }

    //Dispatching the function to delete animal from db and global state:
    function handleDeleteClick(e) {
        dispatch(deleteAnimal(id));
        alert('¡Eliminado correctamente!')
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
                <Link className='update-link' to={"/update"}>
                    <button onClick={e => {handleClick(e)}} className="update-button">UPDATE</button>
                </Link>
                <button className="update-button" onClick={e => {handleDeleteClick(e)}}>ELIMINAR</button>
            </td>
        </>
    )
};