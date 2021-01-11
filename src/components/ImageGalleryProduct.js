import React, { useState } from "react";
import './ImageGalleryProduct.css'

function ImageGalleryProduct({ product }) {

    const [selectedImg, setSelectedImg] = useState(product.otherImages[0].path)

    return (
        <>
            <section
                className="gallery__container"
                //accessibility (carousel)
                id="productCarousel"
                aria-roledescription="carousel"
                aria-label="Product's gallery" //For components that don't have h1-h6
            >
                <img
                    className="gallery__selected__image"
                    src={process.env.PUBLIC_URL + selectedImg}
                    //accessibility (customized)
                    alt={process.env.PUBLIC_URL + product.otherImages[0].alternateText}
                    id="productCarousel-selected-item" //marking for aria-labelledby
                />

                <div className="gallery__imgContainer"
                    //accessbility (carousel)
                    id="productCarousel-items"
                    aria-live="polite" //informing users when the image is changed
                >
                    {product.otherImages.map((element, index) => {

                        const _handleKeyDown = (e) => {
                            if (e.key === 'Enter') {
                                setSelectedImg(element.path);
                            }
                        }

                        return (<img
                            style={{ border: selectedImg === element.path ? "1.8px solid #550000" : "" }}
                            key={index}
                            className=""
                            src={process.env.PUBLIC_URL + element.path}
                            alt={process.env.PUBLIC_URL + element.alternateText}
                            onClick={() => setSelectedImg(element.path)}
                            onKeyPress={_handleKeyDown}

                            //accessibility (carousel)
                            aria-roledescription="slide"

                            //accessilbity (customized)
                            type="button" //acting like a checkbox
                            role="switch"
                            aria-checked={(selectedImg===element.path)?'true':'false'}
                            tabIndex="0"
                            id={"productCarousel-item"+index} //marking for aria-labelledby
                            aria-labelledby={"productCarousel-selected-item productCarousel-item"+index} //showing aria-labelledby in interactive elements
                        />
                        )
                    }
                    )}
                </div>
            </section>
        </>
    );
}

export default ImageGalleryProduct;