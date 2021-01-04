import React from "react";
import "./ProductCardComponents.css";
import { useMenuState, Menu, MenuItem, MenuButton } from "reakit/Menu";
import { useRadioState, Radio, RadioGroup } from "reakit/Radio";
import ColorsButtons from "./ColorsButtons";


function ProductCard({ product }) {

    const menu = useMenuState();
   

    const sizes = product.sizes.map(size => (<MenuItem
        {...menu}
        onClick={() => {
            menu.hide();
            console.log("clicked on button");
        }}
    >{size}
    </MenuItem>))

    return (
        <>
            <div className="product__container">
                <div className="product__section">
                    it will be the whole gallery of images
                    <img className="product__section__content" src={process.env.PUBLIC_URL + product.otherImages[0].path} alt={process.env.PUBLIC_URL + product.otherImages[0].alternateText}/>
                </div>
                <div className="product__section">
                    <div className="product__information">
                        <h1 className="bottom__margin">{product.title}</h1>
                        <ColorsButtons product={product}/>
                        <h2 className="bottom__margin">${product.price}</h2>
                        
                        <MenuButton {...menu} className="size_button">Size</MenuButton>
                        <Menu {...menu} aria-label="Size">
                            {sizes}
                        </Menu>
                        <p>Guide to Size</p>
                        <p className="bottom__margin">Available</p>
                        <h3>Description</h3>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default ProductCard;