import React, { Component } from 'react';
import { Alert, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import uuid from 'uuid';

export default class FormProducto extends Component {

    // crear los refs
    nameRef = React.createRef();
    priceRef = React.createRef();
    detailRef = React.createRef();

    state = {
        mensaje: '',
        color: 'success'
    }

    addProduct = (e) => {
        e.preventDefault();

        let mensaje = 'El producto se creo exitosamente';
        let color = 'success';
        let { id } = this.props.productToEdit || '';
        
        if (id) {
            console.log('Guardando Edicion Producto con ID:', id);
            mensaje = 'El producto se edito correctamente';
            color = 'primary';
        }
        
        const product = {
            id: id || uuid(),
            nombre: this.nameRef.current.value,
            precio: this.priceRef.current.value,
            detalle: this.detailRef.current.value,
        }

        console.log(product);

        this.setState({
            mensaje,
            color
        })

        this.props.addProduct(product);
        //e.currentTarget.reset();
    }

    render() {
        console.log('Render Producto to Edit: ', this.props.productToEdit);
        let { id, nombre, precio, detalle } = this.props.productToEdit || '';
        console.log(nombre, precio, detalle);
        //workaround fix reactstrap.
        detalle = new String(detalle || '');
        return (
            <Form onSubmit={this.addProduct}>
                <FormGroup>
                    <Label for="name">Nombre</Label>
                    <Input type="text" name="name" id="name" placeholder="Nombre" innerRef={this.nameRef}
                        defaultValue={nombre} />
                </FormGroup>
                <FormGroup>
                    <Label for="price">Precio</Label>
                    <Input type="text" name="password" id="price" placeholder="Precio" innerRef={this.priceRef}
                        defaultValue={precio} />
                </FormGroup>
                <FormGroup>
                    <Label for="detail">Detalle</Label>
                    <Input type="textarea" id="detail" innerRef={this.detailRef} defaultValue={detalle} />
                </FormGroup>
                <Button>Submit</Button>
                { this.state.mensaje ? <Alert color={this.state.color} >{this.state.mensaje}</Alert> : null }                
            </Form>
        );
    }
}