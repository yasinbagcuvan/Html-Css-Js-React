import React from 'react'
import '../assets/style/navi.scss'
const Navi = () => {
  return (
    <nav>
        <div>
            <h3>Recipe Platform</h3>
        </div>
        <ul className='liste'>
            <li>Home</li>
            <li>Add Recipe</li>
            <li>About</li>
        </ul>
    </nav>
  )
}

export default Navi