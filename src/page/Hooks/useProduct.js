import React, { useEffect, useState } from 'react';


const useProduct = (productsId) => {

    const [items, setItems] = useState({});
    useEffect(() => {
        fetch(`https://pacific-bastion-40823.herokuapp.com/product/${productsId}`)
            .then(res => res.json())
            .then(data => setItems(data))
    })
    return [items, setItems];
};

export default useProduct;