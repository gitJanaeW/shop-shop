// createContext: used to instantiate a new Context object to hold our global state data & functionality
// useContext: allows us to use the instantiated state
import React, {createContext, useContext} from "react";
import { useProductReducer } from "./reducers";

// create a new instance of Context which always has two components (Provider and Consumer)
// Provider wraps the App so that state data passed anywhere in the app is accessible to all other components
// Consumer grabs and uses the data provided by the Provider
const StoreContext = createContext();
const {Provider} = StoreContext;

const StoreProvider = ({value = [], props}) => {
    // instantiating our global state
    // state: the most up-to-date state of our global object & dispatch: the method executed to update the state
    const [state, dispatch] = useProductReducer({
        // our initial state before updates
        products: [],
        categories: [],
        currentCategory: ''
    });
    console.log(state);
    // as we can see, all of this has essentially created a Provider component for our App.js file
    return <Provider value={[state, dispatch]} {...props}/>
};

// a hook that will ensure any component with access to StoreProvider can 'dispatch' (update) any data in our global state 
const useStoreContext = () => {
    return useContext(StoreContext);
};

export {StoreProvider, useStoreContext};