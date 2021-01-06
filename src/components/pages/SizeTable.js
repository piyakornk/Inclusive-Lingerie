import React from 'react'
import '../../App.css'
import BraSize from '../BraSize'
import BumSize from '../BumSize'
import {Link} from 'react-router-dom'

function SizeTable() {
    return (
        <div className='SizeTable'>
            <div className='Content'>
            <ul className="breadcrumb">
                <li><Link to=""></Link></li>
                <li>Size Tables</li>
            </ul>
                <h1>Guide to all sizes</h1>
                <h2>Bras Size</h2>
                <BraSize/>
                <h2>Pants Size</h2>
                <BumSize/>

            </div>
        </div>
    )
}

export default SizeTable
