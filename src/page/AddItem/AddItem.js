import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddItem.css';
import car from '../../image/icon_carwarehouse.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
const AddItem = () => {
    const [user] = useAuthState(auth);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const priceRef = useRef('');
    const quantityRef = useRef('');
    const SupplierRef = useRef('');
    const descriptionRef = useRef('');
    const imageRef = useRef('');
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;
        const supplier = SupplierRef.current.value;
        const description = descriptionRef.current.value;
        const img = imageRef.current.value;
        const data = { name, email, price, quantity, supplier, description, img };
        console.log({ name, price, quantity, supplier, description, img });
        const url = `https://pacific-bastion-40823.herokuapp.com/product`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        navigate('/manageItems');
    }
    return (
        <div className='addItem-container'>
            <div className="addItem-items">
                <div>
                    <div className='addItem-icon'>
                        <img src={car} alt="" />
                    </div>
                    <div>
                        <h2 className='text-center'>Add Item</h2>
                    </div>
                    <div className="mx-auto  form-container">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Items Name</Form.Label>
                                <Form.Control ref={nameRef} type="text" name='name' placeholder="Enter name" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control ref={emailRef} type="email" name='email' value={user?.email} placeholder="Enter Email" required readOnly />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Price</Form.Label>
                                <Form.Control ref={priceRef} type="number" name='price' placeholder="Enter Price" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control ref={quantityRef} type="number" name='quantity' placeholder="Enter Quantity" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Supplier Name</Form.Label>
                                <Form.Control ref={SupplierRef} type="text" name='supplier name' placeholder="Enter Supplier name" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} ref={descriptionRef} type="text" name='description' placeholder="Enter Description" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control ref={imageRef} type="text" name='img' placeholder="Enter Image URL" required />
                            </Form.Group>

                            <Button className='addItem-btn mt-4 mx-auto' variant="primary" type="submit">
                                Add Item
                            </Button>
                        </Form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddItem;