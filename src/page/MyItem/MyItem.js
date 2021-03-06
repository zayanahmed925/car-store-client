import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [items, setItems] = useState([]);
    console.log(items);
    const [user] = useAuthState(auth);
    useEffect(() => {
        const getItems = async () => {
            const email = user?.email;
            console.log(email)
            const url = `https://pacific-bastion-40823.herokuapp.com/myItem?email=${email}`
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setItems(data);
        }
        getItems();

    }, [user])
    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm('Are you sure want to Delete?');
        if (proceed) {
            const url = `https://pacific-bastion-40823.herokuapp.com/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);

                })
        }
    }
    return (
        <div>
            <div className='row' style={{ margin: '30px' }}>
                {
                    items?.map(item => <div className="gy-3 col-sm-12 col-md-6 col-lg-4">
                        <div className="card h-100">
                            <img src={item.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p>{item.price}</p>
                                <p>Quantity: <small>{item.quantity}</small></p>
                                <p>Supplier: {item.supplier}</p>
                                <p className="card-text">{item.description}</p>
                                <button className='delete-btn w-100 py-2 mx-auto' onClick={() => handleDelete(item._id)} >Delete</button>

                            </div>
                        </div>

                    </div>
                    )
                }

            </div>
        </div>
    );
};

export default MyItem;