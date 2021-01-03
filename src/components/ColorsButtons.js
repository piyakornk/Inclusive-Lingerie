import React from 'react'
import Button from "./Button"
import './ProductCardComponents.css'


function ColorsButtons({product}) {

    const colors = product.colors.map((color, index) =>{
        var partsOfStr = color.split('-')
        console.log(partsOfStr[0])
        return(<div className="color_with_text">
                    <div style={{background: "#" + partsOfStr[0]}} key={index} className="color"></div>
                    <p>{partsOfStr[1]}</p>
               </div>)
        
    })
    
    return (
        <div className='Product'>
            <h1>Here are the colors: {product.title}</h1>
            <div className="all_colors">
                {
                colors
                }
            </div>
        </div>
    )
}

export default ColorsButtons