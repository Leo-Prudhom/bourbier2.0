import React, { Component } from 'react';
import { Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class ItemCard extends Component {
  render() {
    return (
        <Col sm="4" style={{marginBottom:'2%'}}>
            
            <Card>

            <CardImg top width="90%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />


            <CardBody>
                <CardTitle>{this.props.title}</CardTitle>
                <CardSubtitle>{this.props.price} €</CardSubtitle>
                <Link to={`/${this.props.id}`}><Button color='primary'>See</Button></Link>
            </CardBody>

            </Card>
        </Col>

    )
  }
}
