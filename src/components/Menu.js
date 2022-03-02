import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div className='d-flex justify-content-evenly'>
            <Link className='card-link text-dark text-decoration-none' to="fast">Fast</Link>  <Link className='card-link text-dark text-decoration-none' to="slow">Slow</Link>
            <Link className='card-link text-dark text-decoration-none' to="cute">Cute</Link>  <Link className='card-link text-dark text-decoration-none' to="eek">Eek</Link>

        </div>
    )
}
