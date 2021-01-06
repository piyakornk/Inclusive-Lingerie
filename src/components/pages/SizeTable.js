import React from 'react'
import '../../App.css'
import BraSize from '../BraSize'
import BumSize from '../BumSize'
import {Link} from 'react-router-dom'

function SizeTable() {
    return (
        <main id="content" role="main" className='SizeTable'>
            <div className='Content'>
            <ul className="breadcrumb">
                <li><Link to="/">Home</Link></li>
                <li>Size Tables</li>
            </ul>
                <h1>Guide to all sizes</h1>
                <h2>Bras Size</h2>
                <BraSize role="grid" />
                <h2>Pants Size</h2>
                <BumSize role="grid"/>

            </div>
        </main>
    )
}

export default SizeTable
