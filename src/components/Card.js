import React, { useContext } from 'react';
import ApiContext from '../context/ApiContext';
import '../assets/css/card.css';

const Card = () => {
    const apiContext = useContext(ApiContext);
    const { loading, data } = apiContext;
    console.log('data', data)
    console.log('loading', loading)
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    {
                        loading
                            ? <p>loading</p>
                            : data &&
                            <div className="card">
                                <div className="overflow">
                                    <img className="insurance-image" src={data.image} alt="insurance" />
                                    <div className="card-label">
                                        <h4 className="card-label-text">{data.price}</h4>
                                    </div>
                                </div>
                                <div className="card-body text-dark">
                                    <h4 className="card-title ms-4">{data.name}</h4>
                                    <p className="card-text card-paragraph">
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