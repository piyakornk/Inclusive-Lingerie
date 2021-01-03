import React from 'react'

import './ProductCardComponents.css'


function ColorsButtons({product}) {

    const colors = product.colors.map((color, index) =>{
        var partsOfStr = color.split('-')
        console.log(partsOfStr[0])
        return(<div className="color_container">
                    <div style={{background: "#" + partsOfStr[0]}} key={index} className="color" alt={partsOfStr[1]}></div> 
               </div>)
        
    })
    /*<div className='Product'>*/
    return (
        
            <div className="all_colors">
                {
                colors
                }
            </div>
        
    )
}

export default ColorsButtons