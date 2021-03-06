import React from 'react'
import '../../App.css'
import '../ProductCardComponents.css'
import ProductCard from '../ProductCard'
import { Link } from 'react-router-dom'
import SuggestedProductCard from '../SuggestedProductCard'
import DataJson from "../../products-data.json"

function Product(props) {

    const selectedId = parseInt(props.match.params.id, 10)
    const products = DataJson.map(product => { if (product.id === selectedId) { return (<ProductCard product={product} key={product.id}/>) } return null;})
    var suggestedIds = DataJson.map(product => { if (product.id === selectedId) { return (product.similarProducts) } return null; }).filter(function (el) { return el != null; })
    var suggestedIdCards = suggestedIds[0].map(element => <SuggestedProductCard id={element} key={element} />)
    var titleTemp = DataJson.map(product => { if (product.id === selectedId) { return (product.title) } return null; }).filter(function (el) { return el != null; });
    var title = titleTemp[0]
    var idCategory = 0
    var category = ""
    if (selectedId > 99 && selectedId < 199) {
        category = "Bra"
        idCategory = 100;
    } else if (selectedId > 199 && selectedId < 299) {
        category = "Panties"
        idCategory = 200;
    } else if (selectedId > 299 && selectedId < 399) {
        category = "Sets"
        idCategory = 300;
    } else {
        category = "Error"
    }

    return (
        <>
            <script>
                {document.title = "Details of " + title}
            </script>

            <nav aria-label="Breadcrumb">
                <ul className="breadcrumb">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to={'/Catalogue/' + idCategory}>{category}</Link></li>
                    <li><Link to={'/Product/' + selectedId} aria-current="page">{title}</Link></li>
                </ul>
            </nav>

            <main id="content" role="main" className='Product' tabIndex="-1">

                <div className='Content'>

                    {products}

                    <h2>Suggested items:</h2>
                    <div className='suggested__cards__container'>
                        <ul className='suggested__cards__items'>
                            {
                                suggestedIdCards
                            }
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Product


