// import our actions
import {
    UPDATE_CURRENT_CATEGORY, UPDATE_CATEGORIES, UPDATE_PRODUCTS
} from '../utils/actions';
import { reducer } from '../utils/reducers';

// create a sample of what out global state will look like
const initialState = {
    products: [],
    categories: [{name: 'Food'}],
    currentCategory: '1'
};

// update product list
test('UPDATE PRODUCTS', () => {
    // reducer accepts 1) the current state object 2) the type of action we're performing & the value that's updating
    let newState = reducer(initialState, {
        type: UPDATE_PRODUCTS,
        products: [{}, {}]
    });
    // confirm that the state has updated
    expect(newState.products.length).toBe(2);
    expect(initialState.products.length).toBe(0);
});

// update category list
test('UPDATE_CATEGORIES', () => {
    let newState = reducer(initialState, {
        type: UPDATE_CATEGORIES,
        categories: [{}, {}]
    });
    expect(newState.categories.length).toBe(2);
    expect(initialState.categories.length).toBe(1);
});

// update current category
test('UPDATE_CURRENT_CATEGORY', () => {
    let newState = reducer(initialState, {
        type: UPDATE_CURRENT_CATEGORY,
        currentCategory: '2'
    });
    expect(newState.currentCategory).toBe('2');
    expect(initialState.currentCategory).toBe('1');
})