import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Producto from "./Producto";

export default class Productos extends Component {

    removeProduct = (id) => {
        console.log('removing product id: ', id);

        this.props.removeProduct(id);
    }

    render() {
        return (
            <div style={{ marginTop: 40 + 'px' }}>
                <h4>Productos</h4>

                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Detalle</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(this.props.productos).map(key => (
                            <Producto
                                key={key}
                                producto={this.props.productos[key]}
                                removeProduct={this.removeProduct}
                            />

                        ))}
                    </tbody>
                </Table>

            </div>
        );
    }
}