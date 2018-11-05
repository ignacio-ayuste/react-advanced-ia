import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Producto extends Component {

    render() {
        const { id, nombre, precio, detalle } = this.props.producto;
        return (
            <tr>
                <th scope="row">{id}</th>
                <td>{nombre}</td>
                <td>{precio}</td>
                <td>{detalle}</td>
                <td>
                    <Link to={`/formProducto/${id}`} className="btn btn-primary"> Editar</Link>
                    <Link to='#' className="btn btn-danger" onClick={() => this.props.removeProduct(id)} value={id}> Eliminar</Link>
                </td>
            </tr>
        )
    }
}

export default Producto;