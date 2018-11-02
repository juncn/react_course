import actionTypes from '../actions/actionTypes';
import { updateObj } from '../utility';

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.payload.value,
        id: action.payload.id
      };
      return {
        ...state,
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
      };
    case actionTypes.PURCHASE_BURGER_FAIL:
      return updateObj(state, { loading: false });
    case actionTypes.PURCHASE_BURGER_START:
      return updateObj(state, { loading: true });
    case actionTypes.PURCHASE_INIT:
      return updateObj(state, { purchased: false });
    case actionTypes.FETCH_ORDERS_START:
      return updateObj(state, { loading: true });
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return updateObj(state, { orders: action.payload, loading: false });
    case actionTypes.FETCH_ORDERS_FAIL:
      return updateObj(state, { loading: false });
    default:
      return state;
  }
};

export default reducer;
