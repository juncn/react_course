import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/auth" component={Auth} />
            <Route exact path="/" component={BurgerBuilder} />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
