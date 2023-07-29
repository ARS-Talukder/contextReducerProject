import React from 'react';
import { useProduct } from '../context/ProductProvider';
import Cart from './Cart';

const Carts = () => {
    const { state } = useProduct();
    const { carts, loading, error } = state;
    // console.log(carts);
    // console.log(data);
    let content;
    if (loading) {
        content = <p>Loading...</p>
    }
    if (error) {
        content = <p>Error</p>
    }
    if (!loading && !error && carts.length === 0) {
        content = <p>Nothing to show. Product list is empty</p>
    }
    if (!loading && !error && carts.length) {
        content = carts.map(cart => <Cart cart={cart}></Cart>)
    }
    return (
        <div>
            {content}
        </div>
    );
};

export default Carts;