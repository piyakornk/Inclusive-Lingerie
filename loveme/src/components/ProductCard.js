import React from "react"; 
import {useMenuState,Menu,MenuItem,MenuButton} from "reakit/Menu";
import {useRadioState, Radio, RadioGroup} from "reakit/Radio";

function ProductCard(){
    const menu = useMenuState();
    const radio = useRadioState({ state: "lime green as Luca" });

    return(
        <>
        <h1>Product Title</h1>
        <h2>Price</h2>
        <RadioGroup {...radio} aria-label="colours">
            <label>
                <Radio {...radio} value="neon pink as my nose" /> neon pink as my nose
            </label>
            <label>
                <Radio {...radio} value="lime green as Luca" /> lime green as Luca
            </label>
            <label>
                <Radio {...radio} value="dark dark as my heart" /> dark dark as my heart
            </label>
        </RadioGroup>

       
            
        <p>Guide to Size</p>
        <MenuButton {...menu}>Size</MenuButton>

            <Menu {...menu} aria-label="Size">
                <MenuItem
                {...menu}
                onClick={() => {
                    menu.hide();
                    console.log("clicked on button");}}
                >XS
                </MenuItem>
                
            </Menu>
            

     
        <p>Available</p>
        <h3>Description</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lorem turpis, iaculis a lacus at, pellentesque facilisis arcu. Cras consequat, elit et semper laoreet, felis nunc scelerisque mauris, vitae bibendum nisl dui eget magna.</p>
    </>

    );
}

export default ProductCard;