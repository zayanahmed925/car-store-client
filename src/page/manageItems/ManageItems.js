import React from 'react';
import useItems from '../Hooks/useItems';
import ManageItem from './ManageItem';

const ManageItems = () => {
    const [items, setItems] = useItems()
    console.log(items);
    return (
        <div>
            <div className='row'>
                {
                    items.map(item => <ManageItem key={items._id}
                        item={item}
                    ></ManageItem>)
                }

            </div>
            <button className='btn btn-primary mx-auto d-flex justify-content-center'>Add new item</button>
        </div>
    );
};

export default ManageItems;