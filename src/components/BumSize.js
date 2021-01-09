import React from "react";
import './Table.css'


function BumSize() {
    return (
        <div role="table"
            aria-label="Bra Size Table"
            aria-describedby="pant_size_table"
            className="bottom__margin">
            <div id="pant_size_table">
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
                    <span role="cell">38</span>
                    <span role="cell">40</span>
                    <span role="cell">42</span>
                    <span role="cell">44</span>
                    <span role="cell">46</span>
                    <span role="cell">48</span>
                    <span role="cell">50</span>
                    <span role="cell">52</span>
                    <span role="cell">54</span>
                </div>

                <div role="row" className='size_row'>
                    <span role="rowheader">France</span>
                    <span role="cell">34</span>
                    <span role="cell">36</span>
                    <span role="cell">38</span>
                    <span role="cell">40</span>
                    <span role="cell">42</span>
                    <span role="cell">44</span>
                    <span role="cell">46</span>
                    <span role="cell">48</span>
                    <span role="cell">50</span>
                </div>
            </div>
        </div>
    );

}

export default BumSize;

