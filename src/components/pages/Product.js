import React from 'react'
import '../../App.css'
import '../ProductCardComponents.css'
import ProductCard from '../ProductCard'
import SuggestedProductCard from '../SuggestedProductCard'
import DataJson from "../../products-data.json"

function Product(props) {

    const selectedId = parseInt(props.match.params.id, 10)
    const products = DataJson.map(product => { if (product.id == selectedId) { return (<ProductCard product={product} />) } })
    var suggestedIds = DataJson.map(product => { if (product.id == selectedId) { return (product.similarProducts) } }).filter(function (el) { return el != null; })
    var suggestedIdCards = suggestedIds[0].map(element => <SuggestedProductCard id={element} />)
    //console.log(suggestedIds);
    return (
        <div className='Product'>
            <div className='Content'>

                {products}
                <br/>
                <br/>
                <br/>
                <h2>Suggested items:</h2>
                <div className='suggested__cards__container'>
                    <ul className='suggested__cards__items'>
                        {
                            suggestedIdCards
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Product


