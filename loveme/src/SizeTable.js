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
        <GridCell {...grid}>1</GridCell>
            <GridCell {...grid}>2</GridCell>
            <GridCell {...grid}>3</GridCell>
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

