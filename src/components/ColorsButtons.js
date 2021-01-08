import React from 'react'

import './ProductCardComponents.css'

//partsOfStr[1]
function ColorsButtons({ product }) {

    const colors = product.colors.map(color => {
        var partsOfStr = color.split('-')
        /*console.log(partsOfStr[0])*/
        return (<li className="color_container" key={partsOfStr[0]} >
            <div style={{ background: "#" + partsOfStr[0] }} className="color" alt={partsOfStr[1]} title={partsOfStr[1]}>
            </div>
            <text className="color__name">{partsOfStr[1]}</text>
            <span class="sr-only">{partsOfStr[1]}</span>
        </li>)

    })
    /*<div className='Product'>*/
    return (
        <div className="bottom__margin">
            <ul className="all__colors" key={product.id}>
                {
                    colors
                }
            </ul>
        </div>
    )
}

export default ColorsButtons