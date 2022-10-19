import {
    UPDATE_PRODUCTS, UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY
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
            // leave state as is if the action is invalid
        default:
            return state;
    }
};

// this function uses React's useReducer to automatically run through our reducer(). Works similarly to useState!
export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}