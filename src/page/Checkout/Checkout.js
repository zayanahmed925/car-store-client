import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../Hooks/useProduct';

const Checkout = () => {
    const { productsId } = useParams()

    const [items, setItems] = useProduct(productsId);

    const handleDecrees = event => {

        // event.preventDefault();
        // const name = event.target.name.value;
        // const email = event.target.email.value;
        // const updatedUser = {name, email};
        // send data to the server
        const quantity = items.quantity - 1;
        // setItems(quantity);
        const updateQuantity = { quantity };



        const url = `http://localhost:5000/product/${productsId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('users update successfully!!!');

            })
    }

    return (
        <div className='container'>
            <div className="card" style={{ width: '25rem' }}>
                <img src={items.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{items.name}</h5>
                    <p>Price: {items.price}</p>
                    <p>Quantity: {items.quantity}</p>
                    <p>Supplier: <small>{items.supplier}</small></p>
                    <p className="card-text">{items.description}</p>
                    <button onClick={handleDecrees} className='btn btn-primary'>Delivered</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;