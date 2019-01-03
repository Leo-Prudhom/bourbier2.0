import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import ItemList from './components/ItemList';
import ProductVue from './components/ProductVue';
import Error from './components/Error';

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div>
            <AppNavbar />
          

          <Switch location={this.props.location}>
            <Route path="/" component={Home} exact/>
            <Route path="/products" component={ItemList} />
            <Route path="/:productId" render={(props) => <ProductVue {...props} />} />

            <Route component={Error} />
          </Switch>
         

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
