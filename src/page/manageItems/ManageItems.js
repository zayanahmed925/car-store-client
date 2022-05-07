import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../Hooks/useItems';
import ManageItem from './ManageItem';

const ManageItems = () => {
    const [items, setItems] = useItems()
    // console.log(items);
    return (
        <div>
            <div className='row'>
                {
                    items?.map(item => <ManageItem key={items._id}
                        item={item}
                    ></ManageItem>)
                }

            </div>
            <Link to='/addItem'><button className='btn btn-primary mx-auto d-flex justify-content-center'>Add new item</button></Link>
        </div>
    );
};

export default ManageItems;