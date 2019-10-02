import React from 'react';
import imgNotFound from '../images/404.png'

const NotFound = () => {
    return (
        <div className = "container center">
            <div className = "row">
                <div className = "col">
                    <h1>
                        <img src = { imgNotFound } alt = "Not Found"/>
                    </h1> 
                </div>
            </div>
        </div> 
    );
};

export default NotFound;