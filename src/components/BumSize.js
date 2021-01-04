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
            <GridCell {...grid}>Sizes</GridCell>
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
        <GridRow {...grid}className='size_row'>
            <GridCell {...grid}>US</GridCell>
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
        <GridRow {...grid}className='size_row'>
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
        <GridRow {...grid}className='size_row'>
            <GridCell {...grid}>Italy</GridCell>
            <GridCell {...grid}>38</GridCell>
            <GridCell {...grid}>40</GridCell>
            <GridCell {...grid}>42</GridCell>
            <GridCell {...grid}>44</GridCell>
            <GridCell {...grid}>46</GridCell>
            <GridCell {...grid}>48</GridCell>
            <GridCell {...grid}>50</GridCell>
            <GridCell {...grid}>52</GridCell>
            <GridCell {...grid}>54</GridCell>
        </GridRow>
        <GridRow {...grid}className='size_row'>
            <GridCell {...grid}>France</GridCell>
            <GridCell {...grid}>34</GridCell>
            <GridCell {...grid}>36</GridCell>
            <GridCell {...grid}>38</GridCell>
            <GridCell {...grid}>40</GridCell>
            <GridCell {...grid}>42</GridCell>
            <GridCell {...grid}>44</GridCell>
            <GridCell {...grid}>46</GridCell>
            <GridCell {...grid}>48</GridCell>
            <GridCell {...grid}>50</GridCell>
        </GridRow>
    </Grid>
  </>
);

}

export default BumSize;

