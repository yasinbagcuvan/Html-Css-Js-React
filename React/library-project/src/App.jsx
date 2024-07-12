import React, { useEffect, useState } from 'react'
import Navi from './components/Navi'
import Forms from './components/Forms'
import CardList from './components/CardList'
import axios from 'axios'
const App = () => {
  const navHead = "Library"
 
  const [kitaplar,setKitaplar] = useState([]);
  const [kategoriler,setKategoriler] = useState([]);
  const [secilenKategori,setSecilenKategori] = useState("Tüm Kitaplar");
  const [secilenKitap, setSecilenKitap] = useState("");

  const kitapEkle =  async (yeni) => {
    let url = "http://localhost:3005/kitaplar";
    if (!secilenKitap) {//Kitap Ekleme
      //Front-End Ekleme işlemi
    setKitaplar(prev =>[...prev,yeni])
    //Backend Ekleme işlemi  
    const response = await axios.post(url,yeni)
    }
    else{//Kitap Düzenleme

      //Backend Düzenleme işlemi
      url+=`/${secilenKitap.id}`;
      const response2 = await axios.put(url,yeni)
      setKitaplar(prev => 
        prev.map(kitap => {
          if (kitap.id === secilenKitap.id) {
            return {...response2.data}
          }
          else{
            return {...kitap}
          }
        })
      )
      setSecilenKitap("");
    }
    
  }
  const kitapSil = async (id) => {
    //Front-End Silme işlemi
     setKitaplar(prev => prev.filter(statedenGelen => statedenGelen.id !== id))
    //Backend Silme işlemi
    const url = `http://localhost:3005/kitaplar/${id}`
    // const response = await axios.delete(url) !! Tehlikeli
    const response = await axios.patch(url,{isDeleted: true});

  }

  const kitaplariGetir = async () =>{
    if (secilenKategori === "Tüm Kitaplar") {
      let url = "http://localhost:3005/kitaplar"
      const response = await axios.get(url);
      const kitaplar = await response.data;
      setKitaplar(kitaplar);      
    }
    else{
      setKitaplar(kitaplar);
      const filtredLib = kitaplar.filter(kitap => kitap.kitapKategorisi === secilenKategori);
      setKitaplar(filtredLib)
    }
  }
  const kitapFiltrele = () => {
   const filtredLib = kitaplar.filter(kitap => kitap.kitapKategorisi === secilenKategori);
   setKitaplar(filtredLib)
  }

  // const kitaplariGetir = async () =>{
  //   let url = "http://localhost:3005/kitaplar"
  //   if (secilenKategori && secilenKategori !== "Tüm Kitaplar") {
  //     url+= `?kitapKategorisi=${secilenKategori}`
  //   }
  //     const response = await axios.get(url);
  //     const kitaplar = await response.data;
  //     setKitaplar(kitaplar);  
  // }

  const kategorilerGetir = async () => {
    const url = "http://localhost:3005/kategoriler";
    const response = await axios.get(url);
    const kategoriler = await response.data;
    setKategoriler(kategoriler);
  }

  const cardDuzenle =  (id) => {
    setSecilenKitap(kitaplar.find(item =>item.id === id));
    console.log(kitaplar.find(item =>item.id === id));
  }

  // kitaplariGetir();
  useEffect(()=>{
    kategorilerGetir()
  },[])
  useEffect(()=>{
    kitaplariGetir()
  },[secilenKategori])



  return (
    <>
    <Navi navHead = {navHead} kategoriler={kategoriler} setSecilenKategori={setSecilenKategori}/>
    <Forms kitapEkle={kitapEkle} kitaplar={kitaplar} secilenKitap={secilenKitap}/>
    <CardList data={kitaplar} kitapSil={kitapSil} secilenKategori={secilenKategori} cardDuzenle={cardDuzenle}/>
    </>
  )
}

export default App