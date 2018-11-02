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

const addIngredient = (state, action) => {
  const updatedIngredient = {
    [action.payload]: state.ingredients[action.payload] + 1
  };
  const updatedIngredients = updateObj(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.payload]
  };
  return updateObj(state, updatedState);
};

const removeIngredient = (state, action) => {
  return {
    ...state,
    ingredients: {
      ...state.ingredients,
      [action.payload]: state.ingredients[action.payload] - 1
    },
    totalPrice: state.totalPrice - INGREDIENTS_PRICES[action.payload]
  };
};

const setIngredients = (state, action) => {
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
};

const fetchIngredientsFailed = state => {
  return updateObj(state, { error: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state);
    default:
      return state;
  }
};

export default reducer;
