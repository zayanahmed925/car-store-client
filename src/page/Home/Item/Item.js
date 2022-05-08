import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useProduct from '../../Hooks/useProduct';
import './item.css';
const Item = ({ item }) => {
    // const { productId } = useParams();
    // const [items] = useProduct(productId);
    const navigate = useNavigate();
    const { name, price, img, description, quantity, supplier, _id } = item;


    return (
        <div className="gy-3 col-sm-12 col-md-6 col-lg-4">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{price}</p>
                    <p>Quantity: <small>{quantity}</small></p>
                    <p>Supplier: {supplier}</p>
                    <p className="card-text">{description.slice(0, 150)}<span className='fw-bold'>..Read more</span></p>
                    <Link to={`/product/${_id}`}>
                        <button className=' book-btn w-100 py-2 mx-auto'>Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Item;