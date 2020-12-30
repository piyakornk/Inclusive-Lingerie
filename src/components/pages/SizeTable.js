import React from 'react'
import '../../App.css'
import BraSize from '../BraSize'
import BumSize from '../BumSize'

function SizeTable() {
    return (
        <div>
            <h1>Guide to all sizes</h1>
            <h2>Bra Size</h2>
            <BraSize/>
            <h2>Pant Size</h2>
            <BumSize/>
        </div>
    )
}

export default SizeTable
