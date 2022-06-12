import React from 'react';

export default function Animal({ id, type, weight, cattle, device, number }) {
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
                    <td>{id}</td>
                    <td>{type}</td>
                    <td>{weight}</td>
                    <td>{cattle}</td>
                    <td>{device}</td>
                    <td>{number}</td>
                    <td>Update  Delete</td>
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