import axios from "axios";
import { createContext, useEffect, useState } from "react";


const DataContext = createContext();

export const DataProvider =({children}) => {

    const navHead = "Library"
 
    const [kitaplar,setKitaplar] = useState([]);
    const [kategoriler,setKategoriler] = useState([]);
    const [secilenKategori,setSecilenKategori] = useState("Tüm Kitaplar");
    const [secilenKitap, setSecilenKitap] = useState("");
    const[kitapAdi,setKitapAdi]=useState("");
    const[kitapYazari,setKitapYazari]=useState("");
    const[kitapKategorisi,setKitapKategorisi]=useState("Kategori Seçiniz");
    const[kitapSayfaSayisi,setKitapSayfaSayisi]=useState("");
    const[kitapResmi,setKitapResmi]=useState("");
    const[kitapAciklamasi,setKitapAciklamasi]=useState("");
    const[search, setSearch] = useState("");
  
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
        let url = "http://localhost:3005/kitaplar"
        const response = await axios.get(url);
        const kitaplar = await response.data;
        setKitaplar(kitaplar); 
    }
    // const kitaplariGetir = async () =>{
    //   if (secilenKategori === "Tüm Kitaplar") {
    //     let url = "http://localhost:3005/kitaplar"
    //     const response = await axios.get(url);
    //     const kitaplar = await response.data;
    //     setKitaplar(kitaplar);      
    //   }
    //   else{
    //     setKitaplar(kitaplar);
    //     const filtredLib = kitaplar.filter(kitap => kitap.kitapKategorisi === secilenKategori);
    //     setKitaplar(filtredLib)
    //   }
    // }
  
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

    const handleSubmit = (e) => {
      e.preventDefault();
      kitapEkle({
        id: (Number(kitaplar[kitaplar.length-1].id)+1).toString(),
        kitapAdi: kitapAdi,
        kitapYazari: kitapYazari,
        kitapKategorisi: kitapKategorisi,
        kitapSayfaSayisi: kitapSayfaSayisi,
        kitapResmi: kitapResmi,
        kitapAciklamasi: kitapAciklamasi
      });
      setKitapAdi("");
      setKitapYazari("");
      setKitapKategorisi("Kategori Seçiniz");
      setKitapSayfaSayisi("");
      setKitapResmi("");
      setKitapAciklamasi("");
    }
  
    useEffect(()=>{
      if (secilenKitap) {
        setKitapAdi(secilenKitap.kitapAdi);
        setKitapYazari(secilenKitap.kitapYazari);
        setKitapKategorisi(secilenKitap.kitapKategorisi);
        setKitapSayfaSayisi(secilenKitap.kitapSayfaSayisi);
        setKitapResmi(secilenKitap.kitapResmi);
        setKitapAciklamasi(secilenKitap.kitapAciklamasi);
      }
    },[secilenKitap])
  
    
    useEffect(()=>{
      kategorilerGetir()
      kitaplariGetir()
    },[])
  
  

    return <DataContext.Provider value={{
        navHead, kategoriler,setSecilenKategori, //Navi componentinden gelenler
        secilenKitap, // Forms componentinden gelenler
        kitapAdi,
        kitapYazari,
        kitapKategorisi,
        kitapResmi,
        kitapSayfaSayisi,
        kitapAciklamasi,
        setKitapAdi,
        setKitapYazari,
        setKitapKategorisi,
        setKitapResmi,
        setKitapSayfaSayisi,
        setKitapAciklamasi,
        handleSubmit,
        kitaplar,secilenKategori, //CardList gelenler
        kitapSil,cardDuzenle, //Card componentinden gelenler
        search,setSearch
    }}>
                 {children}
            </DataContext.Provider>
}

export default DataContext;