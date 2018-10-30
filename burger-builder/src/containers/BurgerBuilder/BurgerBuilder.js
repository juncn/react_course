import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-orders';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import actionTypes from '../../store/actions/actionTypes';

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    loading: false,
    error: false
  };

  // componentDidMount() {
  //   axios
  //     .get('https://react-my-burger-builder-61c02.firebaseio.com/ingredients.json')
  //     .then(response => {
  //       this.setState({ingredients: response.data});
  //     })
  //     .catch(error => {
  //       this.setState({ error: true });
  //     });
  // }

  updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };

  // addIngredientHandler = type => {
  //   const oldCount = this.props.ingredients[type];
  //   const updatedCount = oldCount + 1;
  //   const updatedIngredients = {
  //     ...this.props.ingredients
  //   };
  //   updatedIngredients[type] = updatedCount;
  //   const priceAddition = INGREDIENTS_PRICES[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice + priceAddition;
  //   this.setState({
  //     totalPrice: newPrice,
  //     ingredients: updatedIngredients
  //   });
  //   this.updatePurchaseState(updatedIngredients);
  // };

  // removeIngredientHandler = type => {
  //   const oldCount = this.props.ingredients[type];
  //   if (oldCount <= 0) {
  //     return;
  //   }
  //   const updatedCount = oldCount - 1;
  //   const updatedIngredients = {
  //     ...this.props.ingredients
  //   };
  //   updatedIngredients[type] = updatedCount;
  //   const priceDeduction = INGREDIENTS_PRICES[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice - priceDeduction;
  //   this.setState({
  //     totalPrice: newPrice,
  //     ingredients: updatedIngredients
  //   });
  //   this.updatePurchaseState(updatedIngredients);
  // };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCanceledHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinuedHandler = () => {
    // const queryParams = [];
    // for (let i in this.props.ingredients) {
    //   queryParams.push(
    //     encodeURIComponent(i) +
    //       '=' +
    //       encodeURIComponent(this.props.ingredients[i])
    //   );
    // }
    // queryParams.push('price=' + this.props.totalPrice);
    // const queryString = queryParams.join('&');

    // Navigate to '/checkout' page
    this.props.history.push('/checkout');
  };

  render() {
    const disabledInfo = {
      ...this.props.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary =
      this.state.loading || !this.props.ingredients ? (
        <Spinner />
      ) : (
        <OrderSummary
          ingredients={this.props.ingredients}
          totalPrice={this.props.totalPrice}
          purchaseCanceled={this.purchaseCanceledHandler}
          purchaseContinued={this.purchaseContinuedHandler}
        />
      );

    let burger = this.state.error ? (
      <p>Ingredients can't be loaded</p>
    ) : (
      <Spinner />
    );

    if (this.props.ingredients) {
      burger = (
        <Fragment>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            addIngredient={this.props.onIngredientAdded}
            removeIngredient={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            totalPrice={this.props.totalPrice}
            purchasable={this.updatePurchaseState(this.props.ingredients)} 
            ordered={this.purchaseHandler}
          />
        </Fragment>
      );
    }

    return (
      <Fragment>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCanceledHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: ingredientName =>
      dispatch({ type: actionTypes.ADD_INGREDIENT, payload: ingredientName }),
    onIngredientRemoved: ingredientName =>
      dispatch({ type: actionTypes.REMOVE_INGREDIENT, payload: ingredientName })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));