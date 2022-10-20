import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    CLEAR_CART,
    TOGGLE_CART
} from './actions';
import {useReducer} from 'react';

export const reducer = (state, action) => {
    switch (action.type) {
        // if type is UPDATE_PRODUCES, return a new state object with an updated array
        case UPDATE_PRODUCTS:
            return {
                ...state,
                // products = a new array with action.products spread through it
                products: [...action.products]
            };
        case UPDATE_CATEGORIES:
            return {
                ...state,
                // categories = a new array with action.categories spread through it
                categories: [...action.categories]
            };
        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            }
            case ADD_TO_CART:
                return {
                  ...state,
                  cartOpen: true,
                  cart: [...state.cart, action.product]
                };
            case ADD_MULTIPLE_TO_CART:
                return {
                    ...state,
                    cart: [...state.cart, ...action.products]
                }
            case REMOVE_FROM_CART:
                // create a newState where we've filtered out the product we're reomving by id
                let newState = state.cart.filter(product => {
                    return product._id !== action._id;
                });
                return {
                    ...state,
                    // if cart length is greater than 0, cart should be open
                    cartOpen: newState.length > 0,
                    // just return the newState
                    cart: newState
                };
            case UPDATE_CART_QUANTITY:
                return {
                    ...state,
                    cartOpen: true,
                    // map creates a new array and changes the value of purchaseQuantity for one item in the arr
                    cart: state.cart.map(product => {
                        if(action._id === product._id) {
                            product.purchaseQuantity = action.purchaseQuantity;
                        }
                        return product;
                    })
                }
            case CLEAR_CART:
                return {
                    ...state,
                    cartOpen: false,
                    cart: []
                };
            case TOGGLE_CART:
                return {
                    ...state,
                    cartOpen: !state.cartOpen
                }
        // leave state as is if the action is invalid
        default:
            return state;
    }
};

// this function uses React's useReducer to automatically run through our reducer(). Works similarly to useState!
export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}