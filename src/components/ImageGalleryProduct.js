import React, { useState } from "react";
import './ImageGalleryProduct.css'

function ImageGalleryProduct({ product }) {

    const [selectedImg, setSelectedImg] = useState(product.otherImages[0].path);

    return (
        <>
            <div className="gallery__container">
                <img className="gallery__selected__image" src={process.env.PUBLIC_URL + selectedImg} alt={process.env.PUBLIC_URL + product.otherImages[0].alternateText} />
                <div className="gallery__imgContainer">
                    {product.otherImages.map((element, index) =>
                    (<img
                        style={{ border: selectedImg === element.path ? "2px solid black" : "" }}
                        key={index}
                        className=""
                        src={process.env.PUBLIC_URL + element.path} 
                        alt={process.env.PUBLIC_URL + element.alternateText}
                        onClick={() => setSelectedImg(element.path)}
                    />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ImageGalleryProduct;