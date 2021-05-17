import React from 'react';
import '../assets/css/selector.css';

const Selector = () => {
    return (
        <div className="container mt-6">
            <div className="select-box col-12">
                <select
                    className="col-3"
                >
                    <option className="option-color" value="">Seleccione Seguro de Vida</option>
                    <option className="option-color" value="58">Seguro Vida Activa</option>
                    <option className="option-color" value="59">Seguro Viaje Protegido</option>
                </select>
                <button type="button"><span>Buscar</span></button>
            </div>
        </div>
    );
}

export default Selector;