import React, { useEffect, useState } from 'react';


const useProduct = (productsId) => {

    const [items, setItems] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/product/${productsId}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [productsId])
    return [items]
};

export default useProduct;