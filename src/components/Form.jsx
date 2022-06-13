import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAnimal, getAnimals } from "../actions";
import { useNavigate } from "react-router-dom";
import "./form.css";

// //Validate errors function:
// function validate(input) {
//   const errors = {};
//   if (!input.id_senasa)
//     errors.id_senasa =
//       "Por favor complete el ID_SENASA único, alfanumérico de 16 caracteres";
//   if (input.id_senasa.length !== 16)
//     errors.id_senasa =
//       "Por favor complete el ID_SENASA único, alfanumérico de 16 caracteres";
//   if (
//     allAnimals?.map(
//       (animal) =>
//         animal.id_senasa.toLowerCase() === input.id_senasa.toLowerCase()
//     )
//   )
//     errors.id_senasa =
//       "Por favor complete el ID_SENASA único, alfanumérico de 16 caracteres";
//   if (
//     input.type !== "Novillo" &&
//     input.type !== "Vaquillona" &&
//     input.type !== "Toro"
//   )
//     errors.type = "Por favor elija una opción";
//   if (!input.weight || isNaN(input.weight))
//     errors.weight =
//       "Por favor complete con el peso en cantidad kilos (números)";
//   if (!input.cattle_ranch)
//     errors.cattle_ranch =
//       "Por favor complete este campo con el nombre del potrero";
//   if (!input.device) errors.device = "Por favor elija un tipo de dispositivo";
//   if (input.device_number.length !== 8)
//     errors.device_number =
//       "Por favor complete el número de dispositivo con un alfanumérico de 8 caracteres";

//   return errors;
// }

export default function Form() {
  const dispatch = useDispatch();
  const animalTypes = useSelector((state) => state.animalTypes);
  const devices = useSelector((state) => state.devices);
  const allAnimals = useSelector((state) => state.animals);
  const navigate = useNavigate();

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

  //Create a local state for input entries:
  const [input, setInput] = useState({
    id_senasa: "",
    type: "",
    weight: "",
    cattle_ranch: "",
    device: "",
    device_number: "",
  });

  //Completing inputs:
  function handleCheckBox(e) {
    setInput({
      ...input,
      device: e.target.value,
    });

    const validations = validate({
      ...input,
      device: e.target.value,
    });
    setErrors(validations);
  }

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

  //Completing inputs:
  function handleSelect(e) {
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

  //Dispatching the function to create a new animal in db and to add it to global state:
  function handleSubmit(e) {
    e.preventDefault();

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
      dispatch(addAnimal(input));
      alert("Alta confirmada");
      setInput({
        id_senasa: "",
        type: "",
        weight: "",
        cattle_ranch: "",
        device: "",
        device_number: "",
      });
    }
  }

  //Go back to Home:
  function handleOnClick(e) {
    navigate("/");
  }

  return (
    <div className="form-container">
      <form
        className="form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="input-container">
          <label>ID SENASA</label>
          <input
            type="text"
            name="id_senasa"
            value={input.id_senasa}
            onChange={(e) => handleChange(e)}
          />
          {errors.id_senasa && (
            <span className="errors">{errors.id_senasa}</span>
          )}
        </div>
        <div className="input-container">
          <label htmlFor="type">Tipo de Animal</label>
          <select
            name="type"
            defaultValue="seleccionar"
            onChange={(e) => handleSelect(e)}
          >
            <option value="seleccionar">--Seleccionar--</option>
            {animalTypes?.map((type) => {
              return (
                <option key={type} name="type" value={type}>
                  {type}
                </option>
              );
            })}
          </select>
          {errors.type && <span className="errors">{errors.type}</span>}
        </div>
        <div className="input-container">
          <label>Peso (Kg)</label>
          <input
            type="text"
            name="weight"
            value={input.weight}
            onChange={(e) => handleChange(e)}
          />
          {errors.weight && <span className="errors">{errors.weight}</span>}
        </div>
        <div className="input-container">
          <label>Nombre de Potrero</label>
          <input
            type="text"
            name="cattle_ranch"
            value={input.cattle_ranch}
            onChange={(e) => handleChange(e)}
          />
          {errors.cattle_ranch && (
            <span className="errors">{errors.cattle_ranch}</span>
          )}
        </div>
        <div className="input-container">
          <label>Tipo de Dispositivo</label>
          {devices?.map((d) => {
            return (
              <div key={d} className="checks">
                <label className="devices">{d}</label>
                <input
                  className="checks"
                  type="radio"
                  name="device"
                  value={d}
                  selected={input.device.includes(d)}
                  onChange={(e) => handleCheckBox(e)}
                />
              </div>
            );
          })}
          {errors.device && <span className="errors">{errors.device}</span>}
        </div>
        <div className="input-container">
          <label>Número de Dispositivo</label>
          <input
            type="text"
            name="device_number"
            value={input.device_number}
            onChange={(e) => handleChange(e)}
          />
          {errors.device_number && (
            <span className="errors">{errors.device_number}</span>
          )}
        </div>
        <div className="submit-goback-container">
          <button className="submit-button" type="submit">
            Agregar Animal
          </button>
          <button
            type="button"
            className="goback-button"
            onClick={(e) => {
              handleOnClick(e);
            }}
          >
            Volver
          </button>
        </div>
      </form>
    </div>
  );
}
