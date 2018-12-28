import axios from '../../axios-orders';
import actionTypes from './actionTypes';

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};

export const purchaseBurger = (orderData, token) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios
      .post(`/orders.json?auth=${token}`, orderData)
      .then(response => {
        console.log('[orderAction]', response.data.name);
        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
      })
      .catch(error => {
        dispatch(purchaseBurgerFail(error));
      });
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  };
};

export const purchaseBurgerSuccess = (id, orderData) => {
  console.log('[orderAction]', orderData);
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    payload: {
      id: id,
      value: orderData
    }
  };
};

export const purchaseBurgerFail = error => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    payload: error
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

export const fetchOrdersSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    payload: orders
  };
};

export const fetchOrdersFail = error => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    payload: error
  };
};

export const fetchOrders = token => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    axios
      .get(`/orders.json?auth=${token}`)
      .then(response => {
        const fetchedOrders = [];
        for (let key in response.data) {
          fetchedOrders.push({ ...response.data[key], id: key });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch(error => {
        dispatch(fetchOrdersFail(error));
      });
  };
};
