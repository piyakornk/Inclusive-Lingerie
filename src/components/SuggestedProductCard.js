import React from 'react'
import {Link} from 'react-router-dom'
import DataJson from '../products-data.json'

function SuggestedProductCard({id}) {

    var elements = DataJson.map(product =>{ if(product.id==id){ return(product);}})
    var suggestedProduct = elements.filter(function (el) {return el != null;});
    console.log(elements)
    console.log(suggestedProduct)

   return (
    <>
        <li className="card__item">
            <Link className="cards__item__link" to={'/Product/'+ id} >
                <figure className="cards__item__pic-wrap">
                    <img src={process.env.PUBLIC_URL + suggestedProduct[0].coverImage.path} alt={process.env.PUBLIC_URL + suggestedProduct[0].coverImage.alternateText} className="cards__item__img"/>
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text">
                        {suggestedProduct[0].title}
                    </h5>
                </div>
            </Link>
        </li> 
       
    </>

)
}

/*

*/
export default SuggestedProductCard
