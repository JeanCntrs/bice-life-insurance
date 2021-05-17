import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import ApiContext from '../context/ApiContext';
import '../assets/css/selector.css';

const Selector = () => {
    const apiContext = useContext(ApiContext);
    const { getInsurance } = apiContext;
    const [insuranceId, setInsuranceId] = useState('');


    const handleChange = (event) => {
        setInsuranceId(event.target.value);
    };

    const handleClick = () => {
        insuranceId ? getInsurance(insuranceId) : toast.info('❌ Debe seleccionar un seguro');
    }

    return (
        <div className="container mt-6">
            <div className="select-box col-12">
                <select
                    className="col-xs-12 col-sm-4 col-lg-3"
                    value={insuranceId}
                    onChange={handleChange}
                >
                    <option className="option-color" value="">Seleccione Seguro de Vida</option>
                    <option className="option-color" value="58">Seguro Vida Activa</option>
                    <option className="option-color" value="59">Seguro Viaje Protegido</option>
                </select>
                <button
                    className="search-button"
                    onClick={handleClick}
                    type="button"
                >
                    <span className="search-button-text">Buscar</span>
                </button>
            </div>
        </div>
    );
}

export default Selector;