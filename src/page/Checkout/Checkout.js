import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useProduct from '../Hooks/useProduct';
import './Checkout.css';

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
            <div className='item-container row'>
                <div className='col-md-6 col-12'>
                    <img src={items.img} className="card-img-top" alt="..." />
                </div>
                <div className='item-details col-md-6 col-12'>
                    <h5 className="card-title">{items.name}</h5>
                    <p>Price: {items.price}</p>
                    <p>Quantity: {items.quantity}</p>
                    <p>Supplier: <small>{items.supplier}</small></p>
                    <p className="card-text">{items.description}</p>
                    <button onClick={handleDecrees} className='btn btn-danger me-2'>Delivered</button>
                    <form onSubmit={handleAdd} style={{ display: 'inline-block' }}>
                        <button className='btn btn-primary me-1' type="submit">Add Quantity</button>
                        <input type="number" className='quantity-form' name="quantity" id="" placeholder='Add Quantity' required />

                    </form>
                </div>
            </div>
            {/* <div className="card" style={{ width: '25rem' }}>
                <img src={items.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{items.name}</h5>
                    <p>Price: {items.price}</p>
                    <p>Quantity: {items.quantity}</p>
                    <p>Supplier: <small>{items.supplier}</small></p>
                    <p className="card-text">{items.description}</p>
                    <button onClick={handleDecrees} className='btn btn-primary'>Delivered</button>
                </div>
            </div> */}
            <br />
            {/* <form onSubmit={handleAdd}>
                <input type="number" name="quantity" id="" placeholder='Add Quantity' />
                <button type="submit">Add Quantity</button>
            </form> */}
            <br />
            <Link to='/manageItems'>
                <button className="btn btn-info mt-4 manage-btn mx-auto">Manage Item</button>
            </Link>

        </div>
    );
};

export default Checkout;