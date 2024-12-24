import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Outlet } from 'react-router-dom'
import "./layout.css"
import Sidebar from '../../components/Sidebar'

const ServicesLayout = () => {
    const [isAsideShow, setIsAsideShow] = useState(false)

    return (
        <main className="d-flex gap-3">
            <Sidebar isAsideShow={isAsideShow} setIsAsideShow={setIsAsideShow} />

            <Outlet />

            <button className="toggle-nav d-md-none" onClick={() => setIsAsideShow(prev => !prev)}>
                <FaArrowRight />
            </button>
        </main>
    )
}

export default ServicesLayout