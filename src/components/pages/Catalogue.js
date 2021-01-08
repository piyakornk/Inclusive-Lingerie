import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
import CatalogueCard from '../CatalogueCard'
import '../Catalogue.css'

import DataJson from '../../products-data.json'




function Catalogue(props) {

    //this is a static example of the instruction. 
    //It still has to be understood how to carry data from a page to the other 
    //(fill depending on whether you click on bra/set/panties)

    //const limit = this.props.params.type

    const limit = parseInt(props.match.params.type, 10)

    const products = DataJson.map(product => { if ((product.id < (limit + 100)) && (product.id > (limit - 1))) { return (<CatalogueCard product={product} key={product.id} />) } })

    //this wouuld be the instruction to show all elements (no if)
    //const products = DataJson.map(product => <CatalogueCard product={product} />)
    var category = ""
    if (limit === 100) {
        category = "Bras"
    } else if (limit === 200) {
        category = "Panties"
    } else if (limit === 300) {
        category = "Sets"
    } else {
        category = "Error"
    }

    return (
        <main id="content" role="main" className='Catalogue'>
            <script>
                {document.title = "All " + category}
            </script>
            <div className='Content'>
                <nav aria-label="Breadcrumb">
                    <ul className="breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to={'/Catalogue/' + category} aria-current="page">{category}</Link></li>
                    </ul>
                </nav>
                <h1>{category}</h1>
            </div>

            <div className='cards__container'>
                <ul className='cards__items'>
                    {
                        products
                    }
                </ul>
            </div>
        </main>
    )
}

export default Catalogue;
