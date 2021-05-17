import React, { useContext } from 'react';
import ApiContext from '../context/ApiContext';
import Spinner from './Spinner';
import '../assets/css/card.css';

const Card = () => {
    const apiContext = useContext(ApiContext);
    const { loading, data } = apiContext;

    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    {
                        loading
                            ? <Spinner />
                            : data &&
                            <div className="card">
                                <div className="overflow">
                                    <img className="insurance-image" src={data.image} alt="insurance" />
                                    <div className="card-label">
                                        <h4 className="card-label-text">{data.price}</h4>
                                    </div>
                                </div>
                                <div className="card-body text-dark">
                                    <h4 className="card-title">{data.name}</h4>
                                    <p className="card-paragraph">
                                        {data.description}
                                    </p>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Card;