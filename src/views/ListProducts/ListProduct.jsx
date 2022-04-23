import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Product from '../../componets/Product/Product';

import data from '../../data/instrumentos.json'
const loadData = () => JSON.parse(JSON.stringify(data));

const ListProduct = () => {
    const [mounted, setMounted] = useState(false)
    const [products, setProducts] = useState([])


    useEffect(()=>{
        setMounted(true)
        setProducts(loadData)
    }, [mounted])

    return mounted &&(
        <Container className="mt-3">
        {
            products.instrumentos.map((e, i)=>(
                <Product key={i} product={e}/>
            ))
        }
        </Container>
    );
};

export default ListProduct;