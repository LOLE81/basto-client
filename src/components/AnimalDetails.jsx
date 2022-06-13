import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAnimal, getAnimals } from "../actions";
import { useNavigate } from "react-router-dom";
import "./animalDetails.css";

export default function AnimalDetails(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allAnimals = useSelector((state) => state.animals);  

  useEffect(() => {
    dispatch(getAnimals());
  }, [dispatch]);

  //Validate errors function:
  function validate(input) {
    const errors = {};
    if (!input.id_senasa)
      errors.id_senasa =
        "Por favor complete el ID_SENASA único, alfanumérico de 16 caracteres";
    if (input.id_senasa.length !== 16)
      errors.id_senasa =
        "Por favor complete el ID_SENASA único, alfanumérico de 16 caracteres";
    if (
      allAnimals?.find(
        (animal) =>
          animal.id_senasa.toLowerCase() === input.id_senasa.toLowerCase()
      )
    )
      errors.id_senasa = "Por favor ingresa un ID no repetido";
    if (
      input.type !== "Novillo" &&
      input.type !== "Vaquillona" &&
      input.type !== "Toro"
    )
      errors.type = "Por favor elija una opción";
    if (!input.weight || isNaN(input.weight))
      errors.weight =
        "Por favor complete con el peso en cantidad kilos (números)";
    if (!input.cattle_ranch)
      errors.cattle_ranch =
        "Por favor complete este campo con el nombre del potrero";
    if (!input.device) errors.device = "Por favor elija un tipo de dispositivo";
    if (input.device_number.length !== 8)
      errors.device_number =
        "Por favor complete el número de dispositivo con un alfanumérico de 8 caracteres";
    if (
      allAnimals?.find(
        (animal) =>
          animal.device_number.toLowerCase() ===
          input.device_number.toLowerCase()
      )
    )
      errors.device_number =
        "Por favor ingresa un número de dispositivo no repetido";

    return errors;
  }

  //Initialize an empty errors object (local state)
  const [errors, setErrors] = useState({});

  //Select animal details from global state:
  const animalDetails = useSelector((state) => state.animalDetails);
    
  //Create a local state for input entries:
  const [input, setInput] = useState({
    id_senasa: '',
    type: '',
    weight: '',
    cattle_ranch: '',
    device: '',
    device_number: '',
  });

  //Completing inputs:
  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    const validations = validate({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(validations);
  }

  //Dispatching the function to update animal details from db and global state:
  function handleClick(e) {
    if (Object.values(errors).length > 0) {
      alert("Por favor completa la información requerida");
    } else if (
      input.id_senasa === "" &&
      input.type === "" &&
      input.weight === "" &&
      input.cattle_ranch === "" &&
      input.device === "" &&
      input.device_number === ""
    ) {
      alert("Por favor complete el formulario");
    } else {
      dispatch(updateAnimal(animalDetails._id, input));
      alert("¡Modificaciones aceptadas!");
      navigate("/");

    }
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
            {errors.id_senasa && (
            <span className="errors">{errors.id_senasa}</span>
          )}
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
            {errors.type && <span className="errors">{errors.type}</span>}
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
            {errors.weight && <span className="errors">{errors.weight}</span>}
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
            {errors.cattle_ranch && (
            <span className="errors">{errors.cattle_ranch}</span>
          )}
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
            {errors.device && <span className="errors">{errors.device}</span>}
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
            {errors.device_number && (
            <span className="errors">{errors.device_number}</span>
          )}
          </div>
          <div className="update-goback-container">
            <button
              className="update-button-confirm"
              type="submit"
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
