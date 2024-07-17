import React from 'react'
import '../assets/style/App.scss'
import { NavLink, Outlet } from 'react-router-dom'

const Navi = () => {
  return (
    <>
    <nav>
      <ul>
          <li><NavLink style={({isActive}) =>({color:isActive?"#C8ACD6":"white"})} to="anasayfa">Anasayfa</NavLink></li>
          <li><NavLink to="blog">Blog</NavLink></li>
          <li><NavLink to="galeri">Galeri</NavLink></li>
          <li><NavLink to="iletisim">İletişim</NavLink></li>
      </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navi