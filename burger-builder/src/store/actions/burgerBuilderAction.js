import axios from '../../axios-orders';
import actionTypes from './actionTypes';
import { databaseURL } from '../../apiKey';

export const addIngredient = name => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    payload: name
  };
};

export const removeIngredient = name => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    payload: name
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    payload: ingredients
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  };
};

export const initIngredients = () => {
  return dispatch => {
    axios
      .get(`${databaseURL}/ingredients.json`)
      .then(response => {
        dispatch(setIngredients(response.data));
      })
      .catch(error => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
