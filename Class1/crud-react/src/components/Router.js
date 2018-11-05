import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './About';
import Menu from "./Menu";
import Productos from "./Productos";
import {Container} from 'reactstrap';
import FormProducto from "./FormProducto";

class Router extends Component {

state = {
    productos: []
};

addProduct = (product) => {

    //Valido si existe el producto
    const producto = this.state.productos.find(p => p.id === product.id);
    let productos = [...this.state.productos];

    console.log('Existe Producto: ', producto);
    if(producto){
        console.log('EXISTE - LO EDITO');
        productos[productos.indexOf(producto)] = product;
    }else{
        console.log('NUEVO - LO CREO');
        productos.push(product);
    }

    localStorage.setItem('productos', JSON.stringify(productos));
    console.log(productos);
}

removeProduct = (id) => {
    console.log('Router -- removing product id: ', id);
    const productos = this.state.productos.filter(p => p.id !== id);
    this.setState({
        productos
    });
    localStorage.setItem('productos', JSON.stringify(productos));
}

componentDidMount() {
    console.log("creando componente.");
    console.log("Mount, Productos: ", this.state.productos);
    //this.state.productos = "NUNCA MODIFICAR EL STATE DE ESTA FORMA";
    // const productos = [
    //     {id: "1", nombre: 'Libro', precio: 200, detalle: 'Harry Potter book'},
    //     {id: "2", nombre: 'Remera', precio: 300, detalle: 'Remera a la moda'},
    //     {id: "3", nombre: 'Gorra', precio: 100, detalle: 'Buena Gorra'},
    // ];
    const productos = JSON.parse(localStorage.getItem('productos'));
    if (!productos) {
        localStorage.setItem('productos', JSON.stringify(productos));
    }
    this.setState({
        productos
    })
}

render() {
    return (
        <BrowserRouter>
            <Container>
                <Menu/>
                <Switch>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/productos" render={() => (
                        <Productos
                            productos={this.state.productos}
                            removeProduct={this.removeProduct}
                        />
                    )}
                    />
                    <Route exact path="/formProducto/:productId" render={(props) => {
                        const productId = props.location.pathname.replace('/formProducto/', '');

                        const productos = this.state.productos;

                        let productToEdit;
                        productToEdit = productos.filter(p => (
                            p.id === productId
                        ))
                        //console.log('Edit product: ', productId);
                        //console.log('Edit product found: ', productToEdit);

                        return (
                            <FormProducto
                                addProduct={this.addProduct}
                                productToEdit={productToEdit[0]}
                            />)
                    }}
                    />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}
}

export default Router;