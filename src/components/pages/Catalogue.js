import React from 'react'
import '../../App.css'

import CatalogueCard from '../CatalogueCard'
import '../Catalogue.css'

import DataJson from '../../products-data.json'




function Catalogue(props) {

    //this is a static example of the instruction. 
    //It still has to be understood how to carry data from a page to the other 
    //(fill depending on whether you click on bra/set/panties)

    //const limit = this.props.params.type

    const limit = parseInt(props.match.params.type, 10)

    const products = DataJson.map(product =>{ if((product.id < (limit + 100)) && (product.id > (limit -1))){ return(<CatalogueCard product={product}/>)}})

    //this wouuld be the instruction to show all elements (no if)
    //const products = DataJson.map(product => <CatalogueCard product={product} />)
    
    

    return (
        <div className='Catalogue'>
            <h1>look at them! :</h1>
            <h1>{limit}</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
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
