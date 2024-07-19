import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";
import { toast, Zoom } from "react-toastify";


const DataContext = createContext();

export const DataProvider =({children}) => {

    const [state,dispatch] = useReducer(reducer,initialState)


    const navHead = "Library"
 
    const{secilenKitap,kitaplar,kitapAdi,kitapYazari,kitapKategorisi,kitapSayfaSayisi,kitapResmi,kitapAciklamasi}=state
  
    const kitapEkle =  async (yeni) => {
      let url = "http://localhost:3005/kitaplar";
      if (!secilenKitap) {//Kitap Ekleme
        //Front-End Ekleme işlemi
      //setKitaplar(prev =>[...prev,yeni])
      //case_12
      yeni.id= (Number(kitaplar[kitaplar.length-1].id)+1).toString()
      dispatch({type:"kitapEkle",yeni})
      //toastMessage
      toast.success('Yeni Kitap Eklendi!', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
        });
      //Backend Ekleme işlemi  
      const response = await axios.post(url,yeni)
      }
      else{//Kitap Düzenleme
  
        //Backend Düzenleme işlemi
        url+=`/${secilenKitap.id}`;
        const response2 = await axios.put(url,yeni)
        // setKitaplar(prev => 
        //   prev.map(kitap => {
        //     if (kitap.id === secilenKitap.id) {
        //       return {...response2.data}
        //     }
        //     else{
        //       return {...kitap}
        //     }
        //   })
        // )
        // setSecilenKitap("");
        //case_15
        yeni.id = secilenKitap.id
        dispatch({type:"kitapDuzenle",yeni})
        //toastMessage
      toast.info(' Kitap Düzenlendi!', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
        });
      }
      
    }
    const kitapSil = async (id) => {
      //Front-End Silme işlemi
      //  setKitaplar(prev => prev.filter(statedenGelen => statedenGelen.id !== id))
      dispatch({type:"kitapSil",id})
      //toastMessage
      toast.error('Kitap Silindi!', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
        });
      //Backend Silme işlemi
      const url = `http://localhost:3005/kitaplar/${id}`
      // const response = await axios.delete(url) !! Tehlikeli
      const response = await axios.patch(url,{isDeleted: true});
  
    }
  
    const kitaplariGetir = async () =>{
        let url = "http://localhost:3005/kitaplar"
        const response = await axios.get(url);
        const kitaplar = await response.data;
        // setKitaplar(kitaplar); 
        //case_1
        dispatch({type:"kitaplariGetir",payload:kitaplar})
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
      // setKategoriler(kategoriler);
      //case_2
      dispatch({type:"kategorileriGetir",payload:kategoriler})
    }
  
    const cardDuzenle =  (id) => {
      // setSecilenKitap(kitaplar.find(item =>item.id === id));
      //case_14
      dispatch({type:"cardDuzenle",id})
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      kitapEkle({
        
        kitapAdi: kitapAdi,
        kitapYazari: kitapYazari,
        kitapKategorisi: kitapKategorisi,
        kitapSayfaSayisi: kitapSayfaSayisi,
        kitapResmi: kitapResmi,
        kitapAciklamasi: kitapAciklamasi
      });
      // setKitapAdi("");
      // setKitapYazari("");
      // setKitapKategorisi("Kategori Seçiniz");
      // setKitapSayfaSayisi("");
      // setKitapResmi("");
      // setKitapAciklamasi("");
      //case_3
      dispatch({type:"resetForm"})

    }
  
    // useEffect(()=>{
    //   if (secilenKitap) {
    //     setKitapAdi(secilenKitap.kitapAdi);
    //     setKitapYazari(secilenKitap.kitapYazari);
    //     setKitapKategorisi(secilenKitap.kitapKategorisi);
    //     setKitapSayfaSayisi(secilenKitap.kitapSayfaSayisi);
    //     setKitapResmi(secilenKitap.kitapResmi);
    //     setKitapAciklamasi(secilenKitap.kitapAciklamasi);
    //   }
    // },[secilenKitap])
  
    
    useEffect(()=>{
      kategorilerGetir()
      kitaplariGetir()
    },[])
  
  

    return <DataContext.Provider value={{
        navHead,
        handleSubmit,
        kitapSil,cardDuzenle,
        state,dispatch
    }}>
                 {children}
            </DataContext.Provider>
}

export default DataContext;