import React from "react"; 
import {
    unstable_useGridState as useGridState,
    unstable_Grid as Grid,
    unstable_GridRow as GridRow,
    unstable_GridCell as GridCell,
  } from "reakit/Grid";
import './Table.css'


  function BraSize(){
    const grid = useGridState();
    return(
    <div>
    <Grid {...grid} className='table' aria-label="Bras Size Table">
        <GridRow {...grid} className='size_row_first_row'>
            <GridCell {...grid} role="columnheader">Sizes</GridCell>
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
        <GridRow {...grid} className='size_row'>
            <GridCell {...grid} role="rowheader">US</GridCell>
            <GridCell {...grid}>O</GridCell>
            <GridCell {...grid}>2</GridCell>
            <GridCell {...grid}>4</GridCell>
            <GridCell {...grid}>6</GridCell>
            <GridCell {...grid}>8</GridCell>
            <GridCell {...grid}>10</GridCell>
            <GridCell {...grid}>12</GridCell>
            <GridCell {...grid}>14</GridCell>
            <GridCell {...grid}>16</GridCell>

        </GridRow>
        <GridRow {...grid} className='size_row'>
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
        <GridRow {...grid} className='size_row'>
            <GridCell {...grid} role="rowheader">Italy</GridCell>
            <GridCell {...grid} role="gridcell">0</GridCell>
            <GridCell {...grid} role="gridcell">1</GridCell>
            <GridCell {...grid} role="gridcell">2</GridCell>
            <GridCell {...grid} role="gridcell">3</GridCell>
            <GridCell {...grid} role="gridcell">4</GridCell>
            <GridCell {...grid} role="gridcell">5</GridCell>
            <GridCell {...grid} role="gridcell">6</GridCell>
            <GridCell {...grid} role="gridcell">7</GridCell>
            <GridCell {...grid} role="gridcell">8</GridCell>
        </GridRow>
        <GridRow {...grid}className='size_row'>
            <GridCell {...grid} role="rowheader">France</GridCell>
            <GridCell {...grid} role="gridcell">80</GridCell>
            <GridCell {...grid} role="gridcell">85</GridCell>
            <GridCell {...grid} role="gridcell">90</GridCell>
            <GridCell {...grid} role="gridcell">95</GridCell>
            <GridCell {...grid} role="gridcell">100</GridCell>
            <GridCell {...grid} role="gridcell">105</GridCell>
            <GridCell {...grid} role="gridcell">110</GridCell>
            <GridCell {...grid} role="gridcell">115</GridCell>
            <GridCell {...grid} role="gridcell">120</GridCell>
        </GridRow>
    </Grid>
  </div>
);

}

export default BraSize;

