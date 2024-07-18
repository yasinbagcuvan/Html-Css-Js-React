import React, { useContext } from 'react'
import Brand from '../assets/img/brand.png'
import '../assets/style/navi.scss'  
import CardList from './CardList'
import DataContext from '../context/DataContext'
const Navi = () => {
  const {navHead, state,dispatch} = useContext(DataContext);
  return (
    <nav>
        <div className="brand">
            <img src={Brand} alt="Marka" />
            <h3>{navHead}</h3>
        </div>
        <ul className="liste">
            {
              //case_4
              state.kategoriler.map(kategori =>
                <li onClick={(e) =>dispatch({type:"secilenKategori",payload:e.target.innerText})} key={kategori.id}>{kategori.kategoriAdı}</li>
              )
            }
        </ul>
    </nav>
  )
}

export default Navi