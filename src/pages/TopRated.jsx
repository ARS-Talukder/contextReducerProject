import React from 'react';
import { useProduct } from '../context/ProductProvider';
import ProductCard from './ProductsCard';

const TopRated = () => {
    const { state } = useProduct();
    const { products, loading, error } = state;
    let content;
    if (loading) {
        content = <p>Loading...</p>
    }
    if (error) {
        content = <p>Error</p>
    }
    if (!loading && !error && products.length === 0) {
        content = <p>Nothing to show. Product list is empty</p>
    }
    if (!loading && !error && products.length) {
        content = products.filter(product => product.rating >= 4).map(product => <ProductCard key={product._id} product={product}></ProductCard>)
    }
    return (
        <div>
            {content}
        </div>
    );
};

export default TopRated;