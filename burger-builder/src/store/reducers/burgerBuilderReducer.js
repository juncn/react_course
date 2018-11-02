import actionTypes from '../actions/actionTypes';
import { updateObj } from '../utility';

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const initialState = {
  ingredients: null,
  totalPrice: 0,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      const updatedIngredient = {
        [action.payload]: state.ingredients[action.payload] + 1
      };
      const updatedIngredients = updateObj(
        state.ingredients,
        updatedIngredient
      );
      const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.payload]
      };
      return updateObj(state, updatedState);
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload]: state.ingredients[action.payload] - 1
        },
        totalPrice: state.totalPrice - INGREDIENTS_PRICES[action.payload]
      };
    case actionTypes.SET_INGREDIENTS:
      return updateObj(state, {
        ingredients: {
          salad: action.payload.salad,
          bacon: action.payload.bacon,
          cheese: action.payload.cheese,
          meat: action.payload.meat
        },
        totalPrice: 0,
        error: false
      });
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return updateObj(state, { error: true });
    default:
      return state;
  }
};

export default reducer;
