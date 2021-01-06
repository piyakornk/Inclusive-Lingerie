import React from 'react'

import './ProductCardComponents.css'


function ColorsButtons({product}) {

    const colors = product.colors.map(color =>{
        var partsOfStr = color.split('-')
        /*console.log(partsOfStr[0])*/
        return(<div className="color_container" key={partsOfStr[0]}>
                    <div style={{background: "#" + partsOfStr[0]}} className="color" alt={partsOfStr[1]}></div> 
               </div>)
        
    })
    /*<div className='Product'>*/
    return (
        
            <div className="all_colors, bottom__margin" key={product.id}>
                {
                colors
                }
            </div>
        
    )
}

export default ColorsButtons