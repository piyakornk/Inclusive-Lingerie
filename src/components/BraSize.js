import React from "react";
import './Table.css'


function BraSize() {
    return (
        <div role="table"
            aria-label="Bra Size Table"
            aria-describedby="bra_size_table"
            className="bottom__margin">
            <div id="bra_size_table">
            </div>
            <div role="rowgroup" >
                <div role="row" className='size_row_first_row'>
                    <span role="columnheader">Sizes</span>
                    <span role="columnheader">XXS</span>
                    <span role="columnheader">XS</span>
                    <span role="columnheader">S</span>
                    <span role="columnheader">M</span>
                    <span role="columnheader">L</span>
                    <span role="columnheader">XL</span>
                    <span role="columnheader">XXL</span>
                    <span role="columnheader">3XL</span>
                    <span role="columnheader">4XL</span>
                </div>
            </div>
            <div role="rowgroup" >
                <div role="row" className='size_row'>
                    <span role="rowheader">US</span>
                    <span role="cell">0</span>
                    <span role="cell">2</span>
                    <span role="cell">4</span>
                    <span role="cell">6</span>
                    <span role="cell">8</span>
                    <span role="cell">10</span>
                    <span role="cell">12</span>
                    <span role="cell">14</span>
                    <span role="cell">16</span>
                </div>

                <div role="row" className='size_row'>
                    <span role="rowheader">UK</span>
                    <span role="cell">6</span>
                    <span role="cell">8</span>
                    <span role="cell">10</span>
                    <span role="cell">12</span>
                    <span role="cell">14</span>
                    <span role="cell">16</span>
                    <span role="cell">18</span>
                    <span role="cell">20</span>
                    <span role="cell">22</span>
                </div>

                <div role="row" className='size_row'>
                    <span role="rowheader">Italy</span>
                    <span role="cell">0</span>
                    <span role="cell">1</span>
                    <span role="cell">2</span>
                    <span role="cell">3</span>
                    <span role="cell">4</span>
                    <span role="cell">5</span>
                    <span role="cell">6</span>
                    <span role="cell">7</span>
                    <span role="cell">8</span>
                </div>

                <div role="row" className='size_row'>
                    <span role="rowheader">France</span>
                    <span role="cell">80</span>
                    <span role="cell">85</span>
                    <span role="cell">90</span>
                    <span role="cell">95</span>
                    <span role="cell">100</span>
                    <span role="cell">105</span>
                    <span role="cell">110</span>
                    <span role="cell">115</span>
                    <span role="cell">120</span>
                </div>
            </div>
        </div>
    );

}

export default BraSize;

