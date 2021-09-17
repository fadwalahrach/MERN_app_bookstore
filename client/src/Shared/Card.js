import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'
const Card = ({title,price,image,id}) => {
    return (
        <div className='card-container'>
            <img src='' width='140' height='140'/>
            <h3>{title}</h3>
            <p>Price: {price} MAD</p>
            <button><Link to={`/books/${id}`}>Check Details</Link></button>
        </div>
    )
}

export default Card
