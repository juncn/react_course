import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    }
  }

  componentDidMount() {
    const tempIngredients = {};
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      tempIngredients[param[0]] = +param[1];
    }
    this.setState({ingredients: tempIngredients});
  }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    return(
      <div>
        <CheckoutSummary 
          ingredients={this.state.ingredients} 
          checkoutCancelled={this.checkoutCancelHandler}
          checkoutContinued={this.checkoutContinueHandler}
        />
        <Route path={this.props.match.path + '/contact-data'} component={ContactData} />
      </div>
    );
  }
}

export default Checkout;