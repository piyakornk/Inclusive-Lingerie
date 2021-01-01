import React from 'react'
import {Link} from 'react-router-dom'

function CatalogueCard({product}) {
    /*
    return (
        <>
            <li className = "card__item">
                <figure className = "cards__item__link">
                    <img src={process.env.PUBLIC_URL + product.coverImage.path} alt={process.env.PUBLIC_URL + product.coverImage.alternateText} className="cards__item__img"/>
                </figure>
                <div className = "cards__item__info">
                    <h2 className = "cards__item__text"> 
                    </h2>
                    <Link to='/Product' >
                        {product.title}
    
                </Link>
                </div>
            </li> 
        </>

    )
    */
   return (
    <>
        <li className="card__item">
            <Link className="cards__item__link" to='/Product' >
                <figure className="cards__item__pic-wrap">
                    <img src={process.env.PUBLIC_URL + product.coverImage.path} alt={process.env.PUBLIC_URL + product.coverImage.alternateText} className="cards__item__img"/>
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text">
                        {product.title}
                    </h5>
                </div>
            </Link>
        </li> 
    </>

)
}

export default CatalogueCard
