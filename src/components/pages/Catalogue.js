import React from 'react'
import '../../App.css'

import CatalogueCard from '../CatalogueCard'
import '../Catalogue.css'



function Catalogue() {
    return (
        <div className="cards">
            <h2>look at them!</h2>
            <div className = "cards__containter">
                <ul className="cards_items">
                    <CatalogueCard />
                </ul>
            </div>
        </div>
    )
}

export default Catalogue;
