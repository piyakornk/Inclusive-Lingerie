import React from "react";
import "./ProductCardComponents.css";
import { useMenuState, Menu, MenuItem, MenuButton } from "reakit/Menu";
import ColorsButtons from "./ColorsButtons";
import ImageGalleryProduct from './ImageGalleryProduct'
import { useDisclosureState, Disclosure, DisclosureContent, } from "reakit/Disclosure";
import { Link } from "react-router-dom";



/*const size = React.forwardRef((props, ref))=>{
    const
    return (
        <>
        if product.size == product
        {product.Availability}
        </>
    )
}*/
function ProductCard({ product }) {

    const menu = useMenuState({ loop: true });

    const sizes = product.sizes.map(size => (<MenuItem
        {...menu}
        className="dropdown"
        onClick={() => {
            menu.hide();
            console.log("clicked on button");
            /*Availability (chosen.size)*/

            {/* instead of {disclosure.visible && <DisclosureContent {...disclosure}>Content</DisclosureContent>} */ }
            <DisclosureContent {...disclosure}>
                {(props) => disclosure.visible && <div {...props}>Available in shops</div>}
            </DisclosureContent>
        }}
    >{size}

    </MenuItem>))

    const disclosure = useDisclosureState();


    return (
        <>
            <div className="product__container">
                <div className="product__section">
                    <div className='bottom__margin'>
                        <ImageGalleryProduct product={product} />
                    </div>

                </div>
                <div className="product__section">
                    <div className="product__information">
                        <h1 className="bottom__margin">{product.title}</h1>
                        <ColorsButtons product={product} />
                        <h2 className="bottom__margin">€ {product.price}.00</h2>



                        <MenuButton {...menu} className="size_button">Sizes</MenuButton>
                        <Menu {...menu} aria-label="Size">
                            {sizes}
                        </Menu>

                        <br />
                        <Link to={"/SizeTable"} className='link'>
                            Guide to size
                        </Link>

                        <br />

                        <Disclosure {...disclosure}>{product.sizes}</Disclosure>
                        {/* instead of {disclosure.visible && <DisclosureContent {...disclosure}>Content</DisclosureContent>} */}
                        <DisclosureContent {...disclosure}>
                            {(props) => disclosure.visible && <div {...props}>Available in shops</div>}
                        </DisclosureContent>

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