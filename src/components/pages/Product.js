import React from 'react'
import '../../App.css'
import '../Catalogue.css'
import ProductCard from '../ProductCard'
import SuggestedProductCard from '../SuggestedProductCard'
import DataJson from "../../products-data.json"

function Product(props) {

    const selectedId = parseInt(props.match.params.id, 10)
    const products = DataJson.map(product => { if (product.id == selectedId) { return (<ProductCard product={product} />) } })
    var suggestedIds = DataJson.map(product => { if (product.id == selectedId) { return (product.similarProducts) } }).filter(function (el) { return el != null; })
    var suggestedIdCards = suggestedIds[0].map(element => <SuggestedProductCard id={element} />)
    console.log(suggestedIds);
    return (
        <div className='Product'>
            <h1 className="align_center">Here is your product</h1>
            { products}
            <div className='cards__container'>
                <ul className='cards__items'>
                    {
                        suggestedIdCards
                    }
                </ul>
            </div>
        </div>
    )
}

export default Product
