import React, { useContext } from 'react'
import '../assets/style/card.scss'
import Book from '../assets/img/defaultBook.png'
import DataContext from '../context/DataContext'
import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import AuthContext from '../context/AuthContext';

const Card = ({kitap}) => {
  const {kitapSil,cardDuzenle,state} = useContext(DataContext);
  const {isAuthenticated} = useContext(AuthContext);
  return (
    ((kitap.kitapAdi.toLowerCase().startsWith(state.search.toLowerCase())) ||
    (kitap.kitapYazari.toLowerCase().startsWith(state.search.toLowerCase()))) &&
    <div className="card">
      {isAuthenticated &&
        <>
        <button onClick={()=>kitapSil(kitap.id)} className='delete'><FaRegTrashAlt size={50} /></button>
        <button onClick={() => cardDuzenle(kitap.id)} className='edit'><MdModeEditOutline size={50}/></button>
        </>
      }
      
      <img src={kitap.kitapResmi?kitap.kitapResmi:Book} alt={kitap.kitapAdi+"_kapak"} />
      <div className="card-body">
        <h4>{kitap.kitapAdi}</h4>
        <p>Yazarı : {kitap.kitapYazari}</p>
        <p>Kategori : {kitap.kitapKategorisi}</p>
        <p>Sayfa Sayısı : {kitap.kitapSayfaSayisi}</p>
        <p>Açıklaması : {kitap.kitapAciklamasi.substring(0,kitap.kitapAciklamasi.substring(0,100).lastIndexOf(" "))+"..."}</p>
      </div>
    </div>
  )
}

export default Card