import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../Hooks/useItems';
import './ManageItems.css';
const ManageItems = () => {
    const [items, setItems] = useItems()
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
                        <div className="card h-100 " >
                            <img src={item.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p>{item.price}</p>
                                <p>Quantity: <small>{item.quantity}</small></p>
                                <p>Supplier: {item.supplier}</p>
                                <p className="card-text">{item.description.slice(0, 150)}<span className='fw-bold'>..Read more</span></p>
                                <button className='delete-btn w-100 py-2 mx-auto' onClick={() => handleDelete(item._id)} >Delete</button>

                            </div>
                        </div>

                    </div>
                    )
                }

            </div>
            <Link to='/addItem'><button className='addItem-btn mx-auto d-flex justify-content-center'>Add new item</button></Link>
        </div>
    );
};

export default ManageItems;