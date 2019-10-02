import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <div className = "pos-f-t">
                <nav className = "navbar navbar-dark bg-dark">
                    <div className = "container text-white">
                        <h1>
                            TIenda de Ropa con Node, Express, PostgreSql y React
                        </h1>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;