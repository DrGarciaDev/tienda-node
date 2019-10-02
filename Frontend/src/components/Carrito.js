import React from 'react';

// definicion del componente carrito 
class Carrito extends React.Component {
    render() {
        return (
            <div className = "shadow p-3 mb-5 bg-white rounded">
                <div className = "card border-danger mb-3">
                    <div className = "card-header border-danger bg-warning">
                        <h2>Lista de Carrito</h2>
                    </div>
                    
                    <div className = "card-body text-danger">
                        <div className = "table-responsive center">
                            <table className = "table table-hover table-striped table-bordered">
                                <thead className = "thead-dark">
                                    <tr>
                                        <th>CODIGO</th>
                                        <th>PRECIO SIN DESCUENTO</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.items.map((item, i) => (
                                            <React.Fragment key = { i } >
                                                <tr>
                                                    <th> { item.codigo } </th> 
                                                    <td> { item.precio } </td>
                                                </tr>
                                            </React.Fragment>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className = "card-footer border-danger text-right">
                        <h2>TOTAL $ { this.props.total } </h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Carrito;