import React from 'react'
import '../../App.css'
import BraSize from '../BraSize'
import BumSize from '../BumSize'

function SizeTable() {
    return (
        <div className='SizeTable'>
            <div className='Content'>
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
