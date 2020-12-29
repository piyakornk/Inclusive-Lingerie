import React from 'react'
import {Link} from 'react-router-dom'

function CatalogueCard() {
    return (
        <>
            <li className = "card__item">
                <figure className = "cards__item__link">
                    <img src="/" alt="Product image" className="cards__item__img"/>
                </figure>
                <div className = "cards__item__info">
                    <h2 className = "cards__item__text"> 
                    </h2>
                </div>
                </li> 
        </>

    )
}

export default CatalogueCard
