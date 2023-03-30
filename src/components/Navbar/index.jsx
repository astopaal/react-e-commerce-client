import React from 'react'
import { Link } from 'react-router-dom'


const index = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
        </ul>
    </nav>
  )
}

export default index