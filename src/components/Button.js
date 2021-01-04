import React from 'react'
import {Link} from "react-router-dom";
//import { Button } from "reakit/Button"
import './Button.css'

function ButtonMaster() {
    return (
        <>
            <Link to={"/SizeTable"} className='btn' >
                See all sizes
            </Link>
        </>
    )
}

export default ButtonMaster;
