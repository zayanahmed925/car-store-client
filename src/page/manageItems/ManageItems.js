import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../Hooks/useItems';

const ManageItems = () => {
    const [items, setItems] = useItems()
    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm('Are you sure want to Delete?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`
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
            <div className='row'>
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
                                <button className='btn btn-danger' onClick={() => handleDelete(item._id)} >Delete</button>

                            </div>
                        </div>

                    </div>
                    )
                }

            </div>
            <Link to='/addItem'><button className='btn btn-primary mx-auto d-flex justify-content-center'>Add new item</button></Link>
        </div>
    );
};

export default ManageItems;