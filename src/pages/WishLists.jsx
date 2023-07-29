import React from 'react';
import { useProduct } from '../context/ProductProvider';
import WishList from './WishList';

const WishLists = () => {
    const { state } = useProduct();
    const { wishlists, loading, error } = state;
    let content;
    if (loading) {
        content = <p>Loading...</p>
    }
    if (error) {
        content = <p>Error</p>
    }
    if (!loading && !error && wishlists.length === 0) {
        content = <p>Nothing to show. Product list is empty</p>
    }
    if (!loading && !error && wishlists.length) {
        content = wishlists.map(wishlist => <WishList key={wishlist._id} wishlist={wishlist}></WishList>)
    }
    return (
        <div>
            {content}
        </div>
    );
};

export default WishLists;