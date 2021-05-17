import React from 'react';
import '../assets/css/card.css';

const Card = () => {
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="overflow">
                            <img className="insurance-image" alt="insurance" />
                            <div className="card-label">
                                <h4 className="card-label-text">Card Price</h4>
                            </div>
                        </div>
                        <div className="card-body text-dark">
                            <h4 className="card-title ms-4">Card title</h4>
                            <p className="card-text card-paragraph">
                                Card description
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;