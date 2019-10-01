import React from 'react';

// definicion del componente carrito 
class Carrito extends React.Component {
    render() {
        return (
            <div className="card border-danger mb-3">
                <div className ="card-header border-danger">
                    <h2>Lista de Carrito</h2>
                </div>
                <div className = "card-body text-danger">
                    <ul>
                        {
                            this.props.items.map((item, i) => (
                                <li key = { i }>CODIGO: { item.codigo } - PRECIO $ { item.precio } </li>
                            ))
                        }
                    </ul>

                </div>

                <div className = "card-footer border-danger text-right">
                    <h2>TOTAL $ { this.props.total } </h2>
                </div>
            </div>
        );
    }
}

export default Carrito;