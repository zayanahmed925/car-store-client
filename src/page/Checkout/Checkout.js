import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../Hooks/useProduct';

const Checkout = () => {
    const { productsId } = useParams()

    const [items, setItems] = useProduct(productsId);

    const handleAdd = (event) => {
        event.preventDefault();
        const quantity1 = parseInt(event.target.quantity.value);

        const quantity = items.quantity + quantity1;
        console.log(quantity)
        const updatedQuantity = { quantity };

        const url = `http://localhost:5000/product/${productsId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('users update successfully!!!');
                event.target.reset();
            })
    }

    const handleDecrees = event => {

        const quantity = items.quantity - 1;
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
            <br />
            <form onSubmit={handleAdd}>
                <input type="number" name="quantity" id="" placeholder='Add Quantity' />
                <button type="submit">Add Quantity</button>
            </form>
        </div>
    );
};

export default Checkout;