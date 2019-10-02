import React from 'react';

class Footer extends React.Component {
    render () {
        return (
            <div>
                <div className = "shadow-sm p-3 mb-5 bg-white rounded">
                    <div className = "jumbotron jumbotron-fluid">
                        <div className = "container">
                            <h1 className = "display-4">Luis Alberto García Rodríguez</h1>
                            <p className = "lead">Tienda de Ropa en Node JS, Express, PostgreSql y React JS</p>
                        </div>
                    </div>
                </div>
                
                <nav className = "navbar sticky-top navbar-dark bg-dark text-white">
                    <h1>Challenge EasyLex</h1>
                </nav>
            </div>
        );
    }
}

export default Footer;