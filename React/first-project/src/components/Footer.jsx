import React from 'react'
import  name, { age, image } from '../data'
import './footer.css'
const Footer = () => {
  return (
    <div>
        {name} - {age}
        <div className='flex'>
            {
                image.map((resim,index)=> 
                    <img key={index} src={resim} alt="resim" />
                )
            }
        </div>
    </div>
  )
}

export default Footer