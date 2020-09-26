import React from 'react';
import {Link } from 'react-router-dom'

function SmurfCard(props) {
    return (
        <div className = 'container'>
            <h1>{props.smurf.name}</h1>
            <h2>{props.smurf.age}</h2>
            <h2>{props.smurf.height}</h2>
        </div>
    );
};

export default SmurfCard;