import React from 'react';

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
            precio: '',
            codigo: '',
            total: 0
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
        
        // guarda el valor del item creado con newItem 
        // y además es aquí donde se calcula el total acumulado
        // de los productos agregados a la lista 
        this.setState(state => ({
            items: state.items.concat(newItem),
            total: state.total + parseFloat(this.state.precio)
        })); 
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
            <div className = "container">
                <div className = "row align-items-center">
                    <div className = "col">

                        <form onSubmit = { this.handleSubmit } >
                            <label>
                            Elige un codigo de producto
                                <select onChange ={ this.handleChange }>
                                {
                                    this.state.data.map((prod, i) => 
                                        <option key ={ i } value = { prod.precio }> { prod.codigo } </option>
                                    )
                                }
                                </select>
                            </label>
                            <input type = "submit" />
                        </form>
                    
                    </div>

                    <div className = "col">

                    </div>

                    <div className = "col">
                        {/* componente carrito */}
                        <Carrito 
                            items = { this.state.items } 
                            total = { this.state.total }
                        />
                    </div>
                </div>
            </div>
        )
    }
}

// definicion del componente carrito 
class Carrito extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.items.map((item, i) => (
                        <li key = { i }>CODIGO: { item.codigo } - PRECIO $ { item.precio } </li>
                    ))
                }
                <h2>TOTAL { this.props.total } </h2>
            </ul>
        );
    }
}

export default Home;