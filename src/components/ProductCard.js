import React from "react";
import "./ProductCardComponents.css";
import { useMenuState, Menu, MenuItem, MenuButton } from "reakit/Menu";
import ColorsButtons from "./ColorsButtons";
import ImageGalleryProduct from "./ImageGalleryProduct";
import {useDisclosureState,Disclosure,DisclosureContent,} from "reakit/Disclosure";
import {Link} from "react-router-dom";

function ProductCard({ product }) {

    const menu = useMenuState();
    const disclosure = useDisclosureState();

    const sizes = product.sizes.map((size, index) => (<MenuItem
        {...menu}
        className = "dropdown"
        key={index}
        onClick={() => {
            menu.hide();
            console.log("clicked on button");
        }}
    >{size}
    </MenuItem>))

        //<img className="product__section__content" src={process.env.PUBLIC_URL + product.otherImages[0].path} alt={process.env.PUBLIC_URL + product.otherImages[0].alternateText}/>

    return (
        <>
            <div className="product__container">
                <div className="product__section">
                    <ImageGalleryProduct product={product}/>
                </div>
                <div className="product__section">
                    <div className="product__information">
                        <h1 className="bottom__margin">{product.title}</h1>
                        <ColorsButtons product={product}/>
                        <h2 className="bottom__margin">€ {product.price}.00</h2>
                        
                        <MenuButton {...menu} className="size_button">Sizes</MenuButton>
                        <Menu {...menu} aria-label="Size">
                            {sizes}
                        </Menu>
                        
                        <br/>
                        <Link to={"/SizeTable"} className='link'>
                            Guide to size
                        </Link>
                        <br/>
                        <br/>
                        <h3>Description</h3>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default ProductCard;