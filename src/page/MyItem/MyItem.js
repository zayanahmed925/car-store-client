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
            const url = `http://localhost:5000/product?email=${email}`
            const { data } = await axios.get(url)
            setItems(data);
        }
        getItems();

    }, [user])
    return (
        <div>
            <h2>My item: {items.length}</h2>
        </div>
    );
};

export default MyItem;