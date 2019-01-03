import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import { FaShoppingCart } from 'react-icons/fa';

class ProductVue extends Component {

    state = {
        infos : []
    }

    componentDidMount = () => {
        axios.get(`/api/items/${this.props.match.url}`)
            .then(res => {
                const infos = res.data;
                this.setState({ infos });
            });
    }

    render() {
        return (
            <div>
                <h1>{this.state.infos.title}</h1>
                <p>{this.state.infos.descr}</p>
                <p>{this.state.infos.price} €</p>
                <Button color="primary">Ajouter au panier <FaShoppingCart /></Button>
            </div>
        );
    }
}

export default ProductVue;