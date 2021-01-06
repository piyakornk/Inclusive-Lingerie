import React from "react";
import "./ProductCardComponents.css";
//import { useMenuState, Menu, MenuItem, MenuButton } from "reakit/Menu";
import ColorsButtons from "./ColorsButtons";
import ImageGalleryProduct from './ImageGalleryProduct'
//import { useDisclosureState, Disclosure, DisclosureContent, } from "reakit/Disclosure";
import { Link } from "react-router-dom";

function ProductCard({ product }) {

   /* const menu = useMenuState({ loop: true });

    const sizes = product.sizes.map(size => (<MenuItem
        {...menu}
        className="dropdown"
        onClick={() => {
            menu.hide();
            console.log("clicked on button");
            {/* instead of {disclosure.visible && <DisclosureContent {...disclosure}>Content</DisclosureContent>} */ 
     /*   }}
    >{size}
    </MenuItem>))

    const disclosure = useDisclosureState();*/


    return (
        <>
            <div className="product__container">
                <div className="product__gallery">
                    <div className='bottom__margin'>
                        <ImageGalleryProduct product={product} />
                    </div>

                </div>
                <div className="product__content">
                    <div className="product__information">
                        <h1 className="bottom__margin">{product.title}</h1>
                        <ColorsButtons product={product} />
                        <h2 className="bottom__margin">€ {product.price}.00</h2>
                        <h3>Avaliable sizes in shops</h3>
                        <p>XXS / XS / S / M / L / XL / XXL / 3XL / 4XL</p>

                        {/*<p>{product.availabilityOnSize}</p>

                        <div className="sizes_button">
                            <p> click on size buttons to check availability</p>
                            <br/>
                            <Disclosure {...disclosure} className='btn_size'>XXS</Disclosure>
                            <Disclosure {...disclosure} className='btn_size'>XS</Disclosure>
                            <Disclosure {...disclosure} className='btn_size'>S</Disclosure>
                            <Disclosure {...disclosure} className='btn_size'>M</Disclosure>
                            <Disclosure {...disclosure} className='btn_size'>L</Disclosure>
                            <Disclosure {...disclosure} className='btn_size'>XL</Disclosure>
                            <Disclosure {...disclosure} className='btn_size'>XXL</Disclosure>
                            <Disclosure {...disclosure} className='btn_size'>3XL</Disclosure>
                            <Disclosure {...disclosure} className='btn_size'>4XL</Disclosure>
                            <DisclosureContent {...disclosure}>
                                {(props) => disclosure.visible && <div {...props}>Available in shops</div>}
                            </DisclosureContent>
                        </div>*/}
                        <br />
                        <Link to={"/SizeTable"} className='link'>
                            Guide to size
                        </Link>

                        <br />
                        <br />
                        <h3>Description</h3>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default ProductCard;