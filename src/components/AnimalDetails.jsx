import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAnimal } from "../actions";
import { useNavigate } from "react-router-dom";
import "./animalDetails.css";

export default function AnimalDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Select animal details from global state:
  const animalDetails = useSelector((state) => state.animalDetails);
    
  //Create a local state for input entries:
  const [input, setInput] = useState({
    id_senasa: animalDetails.id_senasa,
    type: animalDetails.type,
    weight: animalDetails.weight,
    cattle_ranch: animalDetails.cattle_ranch,
    device: animalDetails.device,
    device_number: animalDetails.device_number,
  });

  //Completing inputs:
  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  //Dispatching the function to update animal details from db and global state:
  function handleClick(e) {
    dispatch(updateAnimal(animalDetails._id, input));
    alert("¡Modificaciones aceptadas!");
    navigate("/");
  }

  //Go back to Home:
  function handleOnClick(e) {
    navigate("/");
  }

  return (
    <div>
      <form className="form-container">
        <div className="form">
          <div className="input-container">
            <label>ID SENASA</label>
            <input
              type="text"
              placeholder={animalDetails.id_senasa}
              name="id_senasa"
              value={input.id_senasa}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="input-container">
            <label>Tipo de Animal</label>
            <input
              type="text"
              placeholder={animalDetails.type}
              name="type"
              value={input.type}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="input-container">
            <label>Peso (Kg)</label>
            <input
              type="text"
              placeholder={animalDetails.weight}
              name="weight"
              value={input.weight}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="input-container">
            <label>Nombre de potrero</label>
            <input
              type="text"
              placeholder={animalDetails.cattle_ranch}
              name="cattle_ranch"
              value={input.cattle_ranch}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="input-container">
            <label>Tipo de Dispositivo</label>
            <input
              type="text"
              placeholder={animalDetails.device}
              name="device"
              value={input.device}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="input-container">
            <label>Número de Dispositivo</label>
            <input
              type="text"
              placeholder={animalDetails.device_number}
              name="device_number"
              value={input.device_number}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="update-goback-container">
            <button
              className="update-button-confirm"
              type="button"
              onClick={(e) => {
                handleClick(e);
              }}
            >
              CONFIRMAR CAMBIOS
            </button>
            <button
              className="goback-button"
              type="button"
              onClick={(e) => {
                handleOnClick(e);
              }}
            >
              VOLVER
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
