import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteAnimal, getAnimal } from '../actions';

export default function Animal({ id_senasa, type, weight, cattle, device, number, id }) {
    const dispatch = useDispatch();

    function handleClick(e) {
        dispatch(getAnimal(id))
    }

    function handleDeleteClick(e) {
        dispatch(deleteAnimal(id))
    }

    return (
        // <div>
        //     <table>
        //         <tr>
        //             <th>ID SENASA</th>
        //             <th>Tipo de Animal</th>
        //             <th>Peso (kg)</th>
        //             <th>Nombre del potrero</th>
        //             <th>Tipo de Dispositivo</th>
        //             <th>Número de dispositivo</th>
        //         </tr>
                <>
                    <td>{id_senasa}</td>
                    <td>{type}</td>
                    <td>{weight}</td>
                    <td>{cattle}</td>
                    <td>{device}</td>
                    <td>{number}</td>
                    <td>
                        <Link to={"/update"}>
                            <button onClick={e => {handleClick(e)}} className="updateButton">UPDATE</button>
                        </Link>
                        <button className="updateButton" onClick={e => {handleDeleteClick(e)}}>DELETE</button>
                    </td>
                </>
        //    
        //     {/* <ul>
        //     <li>
        //         <h1>{id}</h1>
        //     </li>
        //     <li>
        //         <h1>{type}</h1>
        //     </li>
        //     <li>
        //         <h1>{weight}</h1>
        //     </li>
        //     <li>
        //         <h1>{cattle}</h1>
        //     </li>
        //     <li>
        //         <h1>{device}</h1>
        //     </li>
        //     <li>
        //         <h1>{number}</h1>
        //     </li>
        //     </ul> */}
        //
    )
};

// {
//     "id_senasa": "12345678asdfghjk",
//     "type": "Novillo",
//     "weight": 520,
//     "cattle_ranch": "Potrero del Oeste",
//     "device": "COLLAR",
//     "device_number": "1234asdf"
// }