import React from 'react'
import '../../App.css'

import CatalogueCard from '../CatalogueCard'
import '../Catalogue.css'

import DataJson from '../../products-data.json'



function Catalogue() {

    //this is a static example of the instruction. 
    //It still has to be understood how to carry data from a page to the other 
    //(fill depending on whether you click on bra/set/panties)

    const products = DataJson.map(product =>{ if(product.id < 200){ return(<CatalogueCard product={product}/>)}})

    //this wouuld be the instruction to show all elements (no if)
    //const products = DataJson.map(product => <CatalogueCard product={product} )

    return (
        <div className="cards">
            <h2>look at them!</h2>
            <div className = "cards__containter">
                <div className = "cards__wrapper">
                    <ul className="cards__items">
                    {
                        products
                    }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Catalogue;
