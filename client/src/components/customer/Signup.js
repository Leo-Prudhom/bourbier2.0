import React, { Component } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';

class Signup extends Component {
    state = {
        connected : false,
        email : '',
        password : ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
          };
          
        axios.post('/api/users/signup', user)
            .then(res => {
                if(res.status === 201){
                    this.setState({
                        connected: true
                    });
                };
            })
            .catch(err => {
                if(err.response.status === 404){
                    alert("Veuillez remplir les champs");
                }
                else if(err.response.status === 409){
                    alert("Adresse email déja existante");
                }
            });

        
    }

    render() {
        return (
            <div>
                {this.state.connected && 
                    <div>Votre compte a été créé bienvenue {this.state.email}</div>
                }

                {!this.state.connected &&
                <form onSubmit={this.handleSubmit}>
                    <input type='email' name='email' placeholder='e-mail' onChange={this.handleChange} />
                    <input type='password' name='password' placeholder='Password' onChange={this.handleChange} />
                    <br></br><Button type='submit'>Submit</Button>    
                </form>
                }



            </div>
        );
    }
}

export default Signup;