import React from "react"; 
import {
    unstable_useGridState as useGridState,
    unstable_Grid as Grid,
    unstable_GridRow as GridRow,
    unstable_GridCell as GridCell,
  } from "reakit/Grid";


  function BumSize(){
    const grid = useGridState();
    return(
    <>
    <Grid {...grid} className='table' aria-label="Pants Size Table">
        <GridRow {...grid} className='size_row_first_row'>
            <GridCell {...grid} role="rowheader">Sizes</GridCell>
            <GridCell {...grid} role="columnheader">XXS</GridCell>
            <GridCell {...grid} role="columnheader">XS</GridCell>
            <GridCell {...grid} role="columnheader">S</GridCell>
            <GridCell {...grid} role="columnheader">M</GridCell>
            <GridCell {...grid} role="columnheader">L</GridCell>
            <GridCell {...grid} role="columnheader">XL</GridCell>
            <GridCell {...grid} role="columnheader">XXL</GridCell>
            <GridCell {...grid} role="columnheader">3XL</GridCell>
            <GridCell {...grid} role="columnheader">4XL</GridCell>
        </GridRow>
        <GridRow {...grid}className='size_row'>
            <GridCell {...grid} role="rowheader">US</GridCell>
            <GridCell {...grid} role="gridcell">O</GridCell>
            <GridCell {...grid} role="gridcell">2</GridCell>
            <GridCell {...grid} role="gridcell">4</GridCell>
            <GridCell {...grid} role="gridcell">6</GridCell>
            <GridCell {...grid} role="gridcell">8</GridCell>
            <GridCell {...grid} role="gridcell">10</GridCell>
            <GridCell {...grid} role="gridcell">12</GridCell>
            <GridCell {...grid} role="gridcell">14</GridCell>
            <GridCell {...grid} role="gridcell">16</GridCell>

        </GridRow>
        <GridRow {...grid}className='size_row'>
            <GridCell {...grid} role="rowheader">UK</GridCell>
            <GridCell {...grid} role="gridcell">6</GridCell>
            <GridCell {...grid} role="gridcell">8</GridCell>
            <GridCell {...grid} role="gridcell">10</GridCell>
            <GridCell {...grid} role="gridcell">12</GridCell>
            <GridCell {...grid} role="gridcell">14</GridCell>
            <GridCell {...grid} role="gridcell">16</GridCell>
            <GridCell {...grid} role="gridcell">18</GridCell>
            <GridCell {...grid} role="gridcell">20</GridCell>
            <GridCell {...grid} role="gridcell">22</GridCell>
        </GridRow>
        <GridRow {...grid}className='size_row'>
            <GridCell {...grid} role="rowheader">Italy</GridCell>
            <GridCell {...grid} role="gridcell">38</GridCell>
            <GridCell {...grid} role="gridcell">40</GridCell>
            <GridCell {...grid} role="gridcell">42</GridCell>
            <GridCell {...grid} role="gridcell">44</GridCell>
            <GridCell {...grid} role="gridcell">46</GridCell>
            <GridCell {...grid} role="gridcell">48</GridCell>
            <GridCell {...grid} role="gridcell">50</GridCell>
            <GridCell {...grid} role="gridcell">52</GridCell>
            <GridCell {...grid} role="gridcell">54</GridCell>
        </GridRow>
        <GridRow {...grid}className='size_row'>
            <GridCell {...grid} role="rowheader">France</GridCell>
            <GridCell {...grid} role="gridcell">34</GridCell>
            <GridCell {...grid} role="gridcell">36</GridCell>
            <GridCell {...grid} role="gridcell">38</GridCell>
            <GridCell {...grid} role="gridcell">40</GridCell>
            <GridCell {...grid} role="gridcell">42</GridCell>
            <GridCell {...grid} role="gridcell">44</GridCell>
            <GridCell {...grid} role="gridcell">46</GridCell>
            <GridCell {...grid} role="gridcell">48</GridCell>
            <GridCell {...grid} role="gridcell">50</GridCell>
        </GridRow>
    </Grid>
  </>
);

}

export default BumSize;

