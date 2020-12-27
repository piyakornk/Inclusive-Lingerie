import React from "react"; 
import {
    unstable_useGridState as useGridState,
    unstable_Grid as Grid,
    unstable_GridRow as GridRow,
    unstable_GridCell as GridCell,
  } from "reakit/Grid";


  function SizeTable(){
    const grid = useGridState();
    return(
    <>
    <Grid {...grid} aria-label="Size Table">
        <GridRow {...grid}>
        <GridCell {...grid}>Sizes</GridCell>
            <GridCell {...grid}>XXS - XS</GridCell>
            <GridCell {...grid}>XS - S</GridCell>
            <GridCell {...grid}>S - M</GridCell>
            <GridCell {...grid}>M - L</GridCell>
            <GridCell {...grid}>L - XL</GridCell>
            <GridCell {...grid}>XL - XXL</GridCell>
        </GridRow>
        <GridRow {...grid}>
            <GridCell {...grid}>4</GridCell>
            <GridCell {...grid}>5</GridCell>
            <GridCell {...grid}>6</GridCell>
        </GridRow>
        <GridRow {...grid}>
            <GridCell {...grid}>7</GridCell>
            <GridCell {...grid}>8</GridCell>
        <GridCell {...grid}>9</GridCell>
        </GridRow>
        </Grid>`
  </>
);

}

export default SizeTable;

