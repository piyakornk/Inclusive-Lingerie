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
            <GridCell {...grid}>XXL - XXXL</GridCell>
            <GridCell {...grid}>XXXL</GridCell>
        </GridRow>
        <GridRow {...grid}>
            <GridCell {...grid}>US</GridCell>
            <GridCell {...grid}>O</GridCell>
            <GridCell {...grid}>2 - 4</GridCell>
            <GridCell {...grid}>4 - 6</GridCell>
            <GridCell {...grid}>8</GridCell>
            <GridCell {...grid}>10</GridCell>
            <GridCell {...grid}>12</GridCell>
            <GridCell {...grid}>14</GridCell>
            <GridCell {...grid}>16</GridCell>
        </GridRow>
        <GridRow {...grid}>
            <GridCell {...grid}>UK</GridCell>
            <GridCell {...grid}>6</GridCell>
            <GridCell {...grid}>8</GridCell>
            <GridCell {...grid}>10</GridCell>
            <GridCell {...grid}>12</GridCell>
            <GridCell {...grid}>14</GridCell>
            <GridCell {...grid}>16</GridCell>
            <GridCell {...grid}>18</GridCell>
            <GridCell {...grid}>20</GridCell>
        </GridRow>
        <GridRow {...grid}>
            <GridCell {...grid}>Italy</GridCell>
            <GridCell {...grid}>38</GridCell>
            <GridCell {...grid}>40</GridCell>
            <GridCell {...grid}>42</GridCell>
            <GridCell {...grid}>44</GridCell>
            <GridCell {...grid}>46</GridCell>
            <GridCell {...grid}>48</GridCell>
            <GridCell {...grid}>50</GridCell>
            <GridCell {...grid}>52</GridCell>
        </GridRow>
        <GridRow {...grid}>
            <GridCell {...grid}>France</GridCell>
            <GridCell {...grid}>34</GridCell>
            <GridCell {...grid}>36</GridCell>
            <GridCell {...grid}>38</GridCell>
            <GridCell {...grid}>40</GridCell>
            <GridCell {...grid}>42</GridCell>
            <GridCell {...grid}>44</GridCell>
            <GridCell {...grid}>46</GridCell>
            <GridCell {...grid}>48</GridCell>
        </GridRow>
    </Grid>
  </>
);

}

export default SizeTable;

