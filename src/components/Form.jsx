import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addAnimal } from "../actions";

export default function Form() {
  const dispatch = useDispatch();
  //const history = useHistory();
  const animalTypes = useSelector((state) => state.animalTypes);
  const devices = useSelector((state) => state.devices);

  const [input, setInput] = useState({
    id_senasa: "",
    type: "",
    weight: "",
    cattle_ranch: "",
    device: "",
    device_number: "",
  });

  function handleCheckBox(e) {
    setInput({
      ...input,
      device: e.target.value,
    });
  }

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSelect(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addAnimal(input));
    setInput({
        id_senasa: "",
        type: "",
        weight: "",
        cattle_ranch: "",
        device: "",
        device_number: "",
      });
  };

  return (
    <div>
      <form onSubmit={e =>{handleSubmit(e)}}>
        <div>
          <label>ID SENASA</label>
          <input
            type="text"
            name="id_senasa"
            value={input.id_senasa}
            onChange={e => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="type">Tipo de Animal</label>
          <select
            name="type"
            defaultValue=""
            onChange={e => handleSelect(e)}
            required
          >
            {animalTypes?.map((type) => {
              return (
                <option key={type} name="type" value={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label>Peso (Kg)</label>
          <input
            type="text"
            name="weight"
            value={input.weight}
            onChange={e => handleChange(e)}
          />
        </div>
        <div>
          <label>Nombre de potrero</label>
          <input
            type="text"
            name="cattle_ranch"
            value={input.cattle_ranch}
            onChange={e => handleChange(e)}
          />
        </div>
        <div className="checkSelect">
          <label className="msgs">Tipo de Dispositivo</label>
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
                  onChange={e => handleCheckBox(e)}
                />
              </div>
            );
          })}
          {/* {errors.dietTypes && (
                            <span className="errors">{errors.dietTypes}</span>
                        )} */}
        </div>
        <div>
          <label>Número de Dispositivo</label>
          <input
            type="text"
            name="device_number"
            value={input.device_number}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="submitButton" type="submit">Agregar animal</button>
      </form>
    </div>
  );
}
