import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css';
const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://pacific-bastion-40823.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className='container'>
            <h2 className='item-title '>Available Items</h2>
            <div className="items-container row ">
                {
                    items.slice(0, 6).map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;