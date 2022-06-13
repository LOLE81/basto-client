import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import Animal from './Animal';
import { getAnimals } from '../actions';


export default function Home() {

    const dispatch = useDispatch();
    const allAnimals = useSelector((state) =>state.animals);

    //Pagination:
    const [order, setOrder] = useState('')
    const [page, setPage] = useState(1);
    const [animalsPerPage, setAnimalsPage] = useState(3);

    const animalsPage = page * animalsPerPage;
    const firstAnimalPage = animalsPage - animalsPerPage;
    const showAnimalsPage = allAnimals.slice(firstAnimalPage, animalsPage);

    const paged = function(pageNumber) {
        setPage(pageNumber)
    };

    //Get all animals from db when mounting component
    useEffect(() => {
        dispatch(getAnimals())
    }, [dispatch]);

    
    return (
        <div>
            <div>
                <Pagination animalsPerPage={animalsPerPage} allAnimals={allAnimals.length} paged={paged} />
            </div>
            <div>
                <table>
                <tbody>
                <tr>
                    <th>ID SENASA</th>
                    <th>Tipo de Animal</th>
                    <th>Peso (kg)</th>
                    <th>Nombre del potrero</th>
                    <th>Tipo de Dispositivo</th>
                    <th>Número de dispositivo</th>
                    <th>Editar/Eliminar</th>
                </tr>
                {
                    showAnimalsPage?.map(animal => {
                        return (
                            <tr key={animal.id_senasa}>
                                <Animal
                                    id_senasa={animal.id_senasa} type={animal.type} weight={animal.weight} cattle={animal.cattle_ranch} device={animal.device} number={animal.device_number} id={animal._id}
                                />
                            </tr>
                        )
                    })
                }
                </tbody>
                </table>
            </div>
            <div>
                <Link to="/form">
                    <button className="form_button">FORMULARIO PARA ALTAS</button>
                </Link>
            </div>
        </div>
    )
};