import React from 'react';

const WishList = ({wishlist}) => {
    return (
        <div
            className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'
            key={wishlist._id}
        >
            <div className='h-52 w-52 mx-auto'>
                <img src={wishlist.image} alt={wishlist.model} />
            </div>
            <h1 className='font-bold text-center'>{wishlist.model}</h1>
            <p className='text-center font-semibold mb-3'>Rating: {wishlist.rating}</p>
            <div className=' flex-1'>
                <ul className='space-y-2'>
                    {wishlist.keyFeature.map((feature) => {
                        return <li className='text-sm'>{feature}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default WishList;