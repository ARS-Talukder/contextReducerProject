import React from 'react';
import { actionTypes } from '../state/ProductState/ActionTypes';
import { useProduct } from '../context/ProductProvider';

const Cart = ({ cart }) => {
    const { dispatch } = useProduct();
    return (
        <div
            className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'
            key={cart._id}
        >
            <div className='h-52 w-52 mx-auto'>
                <img src={cart.image} alt={cart.model} />
            </div>
            <h1 className='font-bold text-center'>{cart.model}</h1>
            <p className='text-center font-semibold mb-3'>Rating: {cart.rating}</p>
            <div className=' flex-1'>
                <ul className='space-y-2'>
                    {cart.keyFeature.map((feature) => {
                        return <li className='text-sm'>{feature}</li>;
                    })}
                </ul>
            </div>
            <div className='flex gap-2 mt-5'>
                <button
                    className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
                    onClick={() =>
                        dispatch({ type: actionTypes.ADD_TO_WISHLIST, payload: cart })
                    }
                >
                    Add to wishlist
                </button>
            </div>
        </div>
    );
};

export default Cart;