import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import ItemList from './components/ItemList';
import Error from './components/Error';

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div>
          <AppNavbar />

          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/items" component={ItemList} />

            <Route component={Error} />
          </Switch>
         

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
