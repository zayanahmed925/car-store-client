import React from 'react';

const Item = ({ item }) => {
    const { name, price, img, description, quantity } = item;
    return (
        <div class="gy-3 col-sm-12 col-md-6 col-lg-4">
            <div class="card h-100">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p>{price}</p>
                    <p>Quantity: <small>{quantity}</small></p>
                    <p class="card-text">{description}</p>
                    <button className='btn btn-primary'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default Item;