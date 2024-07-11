import React, { useEffect, useState } from 'react'
import Navi from './components/Navi'
import Forms from './components/Forms'
import CardList from './components/CardList'
import {kitaplik,kategoriler as categories} from './data/data'
const App = () => {
  const navHead = "Library"
 
  const [kitaplar,setKitaplar] = useState([]);
  const [kategoriler,setKategoriler] = useState([]);
  const [secilenKategori,setSecilenKategori] = useState("Tüm Kitaplar");

  const kitapEkle = (yeni) => {
    // setKitaplar([...kitaplar,yeni]);
    setKitaplar(prev =>[...prev,yeni])
  }
  const kitapSil = (id) => {
    // setKitaplar(kitaplar.filter(statedenGelen => statedenGelen.id !== id))
    setKitaplar(prev => prev.filter(statedenGelen => statedenGelen.id !== id))
  }

  const kitaplariGetir = async () =>{
    const url = "http://localhost:3000/kitaplar"
    const response = await fetch(url);
    const kitaplar = await response.json();
    setKitaplar(kitaplar);
  }
  // kitaplariGetir();
  useEffect(()=>{
    kitaplariGetir()
  },[])

  return (
    <>
    <Navi navHead = {navHead} kategoriler={kategoriler} setSecilenKategori={setSecilenKategori}/>
    <Forms kitapEkle={kitapEkle} kitaplar={kitaplar}/>
    <CardList data={kitaplar} kitapSil={kitapSil} secilenKategori={secilenKategori}/>
    </>
  )
}

export default App