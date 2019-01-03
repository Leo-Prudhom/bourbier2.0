import React, { Component } from 'react';
import ItemCard from './ItemCard';
import axios from 'axios';
import { Row } from 'reactstrap';

/**
 * This Class is used to display the top sellers products
 */

class HomePageItems extends Component {

    state = {
        items: []
    }

    componentDidMount = () => {
        axios.get('/api/items')
            .then(res => {
                const items = res.data;
                this.setState({ items });
            });
    }

    render() {
        return (
                <Row>
                        {this.state.items.map( item =>
                            <ItemCard   
                                    key={item._id}
                                    id={item._id}
                                    title={item.title} 
                                    price={item.price}        
                            />
                        )}
                </Row>
        );
    }
}

export default HomePageItems;