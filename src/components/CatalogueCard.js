import React from 'react'
import { Link } from 'react-router-dom'
import ColorsButtons from './ColorsButtons'

function CatalogueCard({ product }) {
    return (
        <>
            <li className="card__item" key={product.id}
                //accessibility
                role="link"
                tabIndex="0"

            >
                <Link className="cards__item__link" to={'/Product/' + product.id} >
                    <figure className="cards__item__pic-wrap">
                        <img src={process.env.PUBLIC_URL + product.coverImage.path} alt={process.env.PUBLIC_URL + product.coverImage.alternateText} className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <div className="card_left">
                            <h2 className="cards__item__title">
                                {product.title}
                            </h2>
                            <p className="cards__item__text">XXS - 4XL</p>
                            <p className="cards__item__text">€ {product.price}.00</p>
                        </div>
                        <div className="card_right">
                            <ColorsButtons key={product.id} className='card__item__colour' product={product} />
                        </div>
                    </div>

                </Link>
            </li>

        </>

    )
}

export default CatalogueCard
