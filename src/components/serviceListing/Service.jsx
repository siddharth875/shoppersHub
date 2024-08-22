import React from 'react'
import {Link} from "react-router-dom"

function Service({videoLink, type, label, category}) {
  return (
    <div>
      <Link to={`/product-catalogue/${category}`}>
        <video autoPlay muted loop id='serviceVideo' className=''>
            <source src={videoLink} type={type} />
        </video>
        <div className=''>
            <h2>
                {label}
            </h2>
        </div>
        </Link>
    </div>
  )
}

export default Service