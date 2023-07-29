import { createContext, useContext, useEffect, useReducer } from 'react';
import { initialState, productReducer } from '../state/ProductState/ProductReducer';
import { actionTypes } from '../state/ProductState/ActionTypes';

export const PRODUCT_CONTEXT = createContext();
const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState);
    console.log(state)
    useEffect(() => {
        dispatch({ type: actionTypes.FETCHING_START })
        fetch("products.json")
            .then(data => data.json())
            .then(data => dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data }))
            .catch(() => {
                dispatch({ type: actionTypes.FETCHING_ERROR })
            });
    }, [])
    const value = {
        state,
        dispatch
    };
    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};
export const useProduct = () => {
    const context = useContext(PRODUCT_CONTEXT);
    return context
}

export default ProductProvider;