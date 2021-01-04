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
            <GridCell {...grid} >Sizes</GridCell>
            <GridCell {...grid}>XXS</GridCell>
            <GridCell {...grid}>XS</GridCell>
            <GridCell {...grid}>S</GridCell>
            <GridCell {...grid}>M</GridCell>
            <GridCell {...grid}>L</GridCell>
            <GridCell {...grid}>XL</GridCell>
            <GridCell {...grid}>XXL</GridCell>
            <GridCell {...grid}>3XL</GridCell>
            <GridCell {...grid}>4XL</GridCell>
        </GridRow>
        <GridRow {...grid} className='size_row'>
            <GridCell {...grid} className='country'>US</GridCell>
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
            <GridCell {...grid}>UK</GridCell>
            <GridCell {...grid}>6</GridCell>
            <GridCell {...grid}>8</GridCell>
            <GridCell {...grid}>10</GridCell>
            <GridCell {...grid}>12</GridCell>
            <GridCell {...grid}>14</GridCell>
            <GridCell {...grid}>16</GridCell>
            <GridCell {...grid}>18</GridCell>
            <GridCell {...grid}>20</GridCell>
            <GridCell {...grid}>22</GridCell>
        </GridRow>
        <GridRow {...grid} className='size_row'>
            <GridCell {...grid}>Italy</GridCell>
            <GridCell {...grid}>0</GridCell>
            <GridCell {...grid}>1</GridCell>
            <GridCell {...grid}>2</GridCell>
            <GridCell {...grid}>3</GridCell>
            <GridCell {...grid}>4</GridCell>
            <GridCell {...grid}>5</GridCell>
            <GridCell {...grid}>6</GridCell>
            <GridCell {...grid}>7</GridCell>
            <GridCell {...grid}>8</GridCell>
        </GridRow>
        <GridRow {...grid}className='size_row'>
            <GridCell {...grid}>France</GridCell>
            <GridCell {...grid}>80</GridCell>
            <GridCell {...grid}>85</GridCell>
            <GridCell {...grid}>90</GridCell>
            <GridCell {...grid}>95</GridCell>
            <GridCell {...grid}>100</GridCell>
            <GridCell {...grid}>105</GridCell>
            <GridCell {...grid}>110</GridCell>
            <GridCell {...grid}>115</GridCell>
            <GridCell {...grid}>120</GridCell>
        </GridRow>
    </Grid>
  </div>
);

}

export default BraSize;

