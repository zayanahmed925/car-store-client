import React from 'react';

const Item = ({ item }) => {
    const { name, price, img, description, quantity } = item;
    return (
        <div className="gy-3 col-sm-12 col-md-6 col-lg-4">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{price}</p>
                    <p>Quantity: <small>{quantity}</small></p>
                    <p className="card-text">{description}</p>
                    <button className='btn btn-primary'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default Item;