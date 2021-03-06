import React, { Fragment } from 'react';

const PlanetView = (props) => {
    const { planet: { id, name, population, rotationPeriod, diameter } } = props;

    return (
        <Fragment>
            <div className="col-4 p-0">
                <img
                    onError={(error) => {
                        error.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
                    }}
                    alt={name}
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                    className="card-img-top" />
            </div>
            <div className="card-body col">
                <h3 className="card-title h5">
                    {name}
                </h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <strong>Population:</strong> {population}
                    </li>
                    <li className="list-group-item">
                        <strong>Rotation period:</strong> {rotationPeriod}
                    </li>
                    <li className="list-group-item">
                        <strong>Diameter:</strong> {diameter}
                    </li>
                </ul>
            </div>
        </Fragment>
    );
};

export default PlanetView;