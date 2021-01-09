import React from 'react'
import '../../App.css'
import BraSize from '../BraSize'
import BumSize from '../BumSize'
import { Link } from 'react-router-dom'

function SizeTable() {
    return (
        <>
            <script>
                {document.title = "Size Tables"}
            </script>
            <nav aria-label="Breadcrumb">
                <ul className="breadcrumb">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/SizeTable" aria-current="page">Size Tables</Link></li>
                </ul>
            </nav>
            <main id="content" role="main" className='SizeTable'>

                <div className='Content'>



                    <h1>Guide to all sizes</h1>
                    <h2>Bras Size</h2>
                    <BraSize role="grid" />
                    <h2>Pants Size</h2>
                    <BumSize role="grid" />

                </div>
            </main>
        </>
    )
}

export default SizeTable
