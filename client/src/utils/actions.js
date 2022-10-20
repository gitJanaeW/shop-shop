// defining how different aspects of state will me maintained/updated so that we can eventually store states globally
// used by the ProductList
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
// used by CategoryMenu
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
// would combine the functionality of UPDATE_PRODUCTS and UPDATE_CATEGORIES on Home
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";
// cart actions
export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_MULTIPLE_TO_CART = "ADD_MULTIPLE_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY";
export const CLEAR_CART = 'CLEAR_CART';
export const TOGGLE_CART = 'TOGGLE_CART'