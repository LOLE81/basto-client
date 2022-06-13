import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import Animal from './Animal';
import { getAnimals } from '../actions';
import './home.css'

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
        <div className='app-container'>
            <div className='pagination-container'>
                <Pagination animalsPerPage={animalsPerPage} allAnimals={allAnimals.length} paged={paged} />
            </div>
            <div className='table-container'>
                <table className='table'>
                <tbody>
                <tr>
                    <th className='table-titles'>ID SENASA</th>
                    <th className='table-titles'>Tipo de Animal</th>
                    <th className='table-titles'>Peso (kg)</th>
                    <th className='table-titles'>Nombre del potrero</th>
                    <th className='table-titles'>Tipo de Dispositivo</th>
                    <th className='table-titles'>Número de dispositivo</th>
                    <th className='table-titles'>Editar/Eliminar</th>
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
            <div className='form-container-button'>
                <Link className='form-link' to="/form">
                    <button className="form-button">FORMULARIO PARA ALTAS</button>
                </Link>
            </div>
        </div>
    )
};