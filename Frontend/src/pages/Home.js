import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Carrito from '../components/Carrito';

class Home extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            // data recibe datos desde el backend con node js, express y postgreSql mediante la url
            // definida en componentDidMount
            // data: 'http://localhost:3001/productos'
            data: [],
            // items es un array para almacenar objetos json con el codigo y precio de los productos seleccionado
            // items: [{codigo: 'CAMISETA', precio: 7.5 }]
            items: [],
            precio: '20',
            codigo: 'CAMISETA',
            total: 0,
            cantidadPants: 0,
            cantidadCamiseta: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // en este caso captura los cambios hechos en el option
    handleChange(e) {
        // obtiene el idice seleccionado en el option
        let index = e.target.selectedIndex;
        // console.log(e.target.options[index].text);
        // obtiene el texto del option seleccionado
        let product = e.target.options[index].text;
        
        // establece los valores de estado para precio y codigo seleccionados
        this.setState({
            precio: e.target.value, 
            codigo: product
        });
    }
    
    // captura el valor de los state, en el momento en el que se da clic al boton submit 
    handleSubmit(e) {
        e.preventDefault();
        // console.log(this.state.codigo);
        // verifica que el precio tenga valor para poder agregarlo a los items
        if (!this.state.precio.length) {
           return;
        }

        // crea un item para acumular la lista de productos seleccionados
        // utilizando el state de codigo y precio
        // previamente establecidos por handleChange 
        const newItem = {
            codigo: this.state.codigo,
            precio: this.state.precio
        };
        // después de guardar el valor del item creado con newItem 
        // el objeto se guardará en el item de los productos agregados a la lista 


        // Algoritmo para verificar que es lo que se está comprando
        // y qué hacer en cada caso 
        if (this.state.codigo === 'PANTALONES'){

            // console.log('PANTALON');
            if (this.state.cantidadPants < 1) {
                this.setState(state => ({
                    cantidadPants: state.cantidadPants + 1,
                    items: state.items.concat(newItem),
                    total: state.total + parseFloat(this.state.precio)        
                }))
            } 
            else if (this.state.cantidadPants >= 1) {
                this.setState(state => ({
                    cantidadPants: 0,
                    items: state.items.concat(newItem)
                }))
            }

        }
        else if (this.state.codigo === 'CAMISETA'){

            // console.log('CAMISETA');
            if (this.state.cantidadCamiseta < 2) {
                this.setState(state => ({
                    cantidadCamiseta: state.cantidadCamiseta + 1,
                    items: state.items.concat(newItem),
                    total: state.total + parseFloat(this.state.precio)        
                }))
            } 
            else if (this.state.cantidadCamiseta === 2) {
                this.setState(state => ({
                    cantidadCamiseta: state.cantidadCamiseta + 1,
                    items: state.items.concat(newItem),
                    total: state.total + parseFloat(this.state.precio) - 3        
                }))
            }
            else if (this.state.cantidadCamiseta >= 3) {
                this.setState(state => ({
                    cantidadCamiseta: state.cantidadCamiseta + 1,
                    items: state.items.concat(newItem),
                    total: state.total + 19        
                }))
            }

        }
        else {

            this.setState(state => ({
                items: state.items.concat(newItem),
                total: state.total + parseFloat(this.state.precio)
            }));

        }
        
    }

    componentDidMount() {
        let self = this;

        // conexion a la api mediante fecth a la url que devuelve datos json
        fetch('http://localhost:3001/productos', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Mala respuesta del server");
            }
            return response.json();
        }).then(function(datos_recibidos) {
            self.setState({data: datos_recibidos});
        }).catch(err => {
        console.log('Ha habido un error: ',err);
        })
    }

    render() {
        return (
            <div className = "container fluid">
                {/* Componente header  */}
                <Header />
                
                <br>
                </br>

                <div className = "row align-items-center">
                    <div className = "col">
                        <div className = "shadow-lg p-3 mb-5 bg-white rounded">
                            <div className="card border-info mb-3">
                                
                                <form onSubmit = { this.handleSubmit } >
                                    <div className ="card-header border-info bg-info">
                                        <h2>Productos</h2>
                                    </div>

                                    <div className = "card-body text-info">
                                        <h5 className = "card-title">Elige un producto</h5>

                                        <div className = "input-group mb-3">
                                            <div className = "input-group-prepend">
                                                <label className = "input-group-text" >Opciones</label>
                                            </div>
                                            <select className = "custom-select" onChange = { this.handleChange } >
                                                {
                                                    this.state.data.map((prod, i) => 
                                                        <option key ={ i } value = { prod.precio }> { prod.codigo } </option>
                                                    )
                                                }
                                            </select>
                                        </div>

                                        <p className = "card-text">
                                            Elige algún producto de la lista para que sea agregado al carrito y puedas ver el total de tu compra
                                        </p>
                                        <p>Descuentos</p>
                                        <ul>
                                            <li>Al 2 por 1 en PANTALONES</li>
                                            <li>En la compra de 3 o más CAMISETAS el costo por unidad es de $ 19.00</li>
                                        </ul>
                                    </div>

                                    <div className = "card-footer border-info text-right">
                                        <input type = "submit" className = "btn btn-primary btn-md" value = "AGREGAR AL CARRITO"/>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
                <div className = "row align-items-center">
                    <div className = "col">
                        {/* componente carrito */}
                        <Carrito 
                            items = { this.state.items } 
                            total = { this.state.total }
                        />
                    </div>
                </div>
                
                {/* Componente Footer */}
                <Footer />

            </div>
        )
    }
}

export default Home;