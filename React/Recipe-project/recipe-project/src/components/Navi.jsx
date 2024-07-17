import React, { useContext } from 'react'
import '../assets/style/navi.scss'
import DataContext from '../Context/DataContext'
import { IoMdSearch } from "react-icons/io";
import { NavLink, Outlet } from 'react-router-dom';
const Navi = () => {
  const {setSearch} = useContext(DataContext);
  return (
    <>
    <nav>
        <div>
            <h3>Recipe Platform</h3>
        </div>
        <ul className='liste'>
            <li><NavLink to="home">Home</NavLink></li>
            <li><NavLink to={"add"}>Add Recipe</NavLink></li>
            <li><NavLink to={"recipes"}>All Recipes</NavLink></li>
            <li>About</li>
        </ul>
        <div className='search'>
            <input onChange={(e)=>setSearch(e.target.value)} type='text' placeholder='Search..'  /> 
            <div className='searchIcon'><IoMdSearch size={30} />  </div> 
    </div>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navi