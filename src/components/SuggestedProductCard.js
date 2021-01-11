import React from 'react'
import {Link} from 'react-router-dom'
import DataJson from '../products-data.json'
import './ProductCardComponents.css'

function SuggestedProductCard({id}) {

    var elements = DataJson.map(product =>{ if(product.id===id){ return(product);} return null;})
    var suggestedProduct = elements.filter(function (el) {return el != null;});
    //console.log(elements)
    //console.log(suggestedProduct)

   return (
    <>
        <li className="suggested__card__item" key={"li"+id}>
            <Link className="suggested__cards__item__link" to={'/Product/'+ id} key={"link"+id}
                //accessibility (link)
                role="link"
                tabIndex="0"
                >
                <figure className="suggested__cards__item__pic-wrap">
                    <img src={process.env.PUBLIC_URL + suggestedProduct[0].coverImage.path} alt={process.env.PUBLIC_URL + suggestedProduct[0].coverImage.alternateText} className="suggested__cards__item__img"/>
                </figure>
                <div className="suggested__cards__item__info">
                    <h3 className="suggested__cards__item__text">
                        {suggestedProduct[0].title}
                    </h3>
                </div>
            </Link>
        </li> 
       
    </>

)
}

/*

*/
export default SuggestedProductCard
