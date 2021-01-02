import React from 'react'
import '../../App.css'
import ProductCard from '../ProductCard'
import DataJson from "../../products-data.json"

function Product(props) {

    const selectedId = parseInt(props.match.params.id, 10)
    const products = DataJson.map(product =>{ if(product.id==selectedId){ return(<ProductCard product={product}/>)}})
    return (
        <div>
            <h1>Here is your product</h1>
            { products }
        </div>
    )
}

export default Product
