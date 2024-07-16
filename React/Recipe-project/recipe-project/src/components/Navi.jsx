import React, { useContext } from 'react'
import '../assets/style/navi.scss'
import DataContext from '../Context/DataContext'
import { IoMdSearch } from "react-icons/io";
const Navi = () => {
  const {setSearch} = useContext(DataContext);
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
        <div className='search'>
            <input onChange={(e)=>setSearch(e.target.value)} type='text' placeholder='Search..'  /> 
            <div className='searchIcon'><IoMdSearch size={30} />  </div> 
    </div>

    </nav>
  )
}

export default Navi