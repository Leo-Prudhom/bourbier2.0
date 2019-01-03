import React, { Component } from 'react';
import ItemCard from './ItemCard';
import axios from 'axios';
import { Row } from 'reactstrap';


class ItemList extends Component {
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
            <div>
            
                <div>Here a sort by (cat/price/gender/size) option</div>
                Items will display 
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
            </div>
        );
    }
}

export default ItemList;