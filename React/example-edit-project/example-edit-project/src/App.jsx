import { useEffect, useState } from 'react'
import axios from 'axios'
import CardList from './components/CardList';
import Forms from './components/Forms';

function App() {
  const [notlar,setNotlar] = useState([]);
  const [secilenNot,setSecilenNot] = useState("")

  const notEkle = async(yeni) => {
    let url = "http://localhost:3000/notlar";
    if (!secilenNot) {
      setNotlar(prev => [...prev,yeni])
      const response = await axios.post(url,yeni)
    }
    else{
      url+=`/${secilenNot.id}`;
      const response2 = await axios.put(url,yeni)
      setNotlar(prev => 
        prev.map(not => {
          if (not.id === secilenNot.id) {
            return {...response2.data}
          }
          else{
            return {...not}
          }
        })
      )
      setSecilenNot("");
    }
  }
  const notSil = async(id) => {
    setNotlar(prev => prev.filter(statedenGelen => statedenGelen.id !==id))
    const url = `http://localhost:3000/notlar/${id}`
    const response = await axios.patch(url,{isDeleted: true})
  }
  const notGetir = async()=>{
    const url = "http://localhost:3000/notlar"
    const response = await axios.get(url)
    const notlar = await response.data;
    setNotlar(notlar);
  }

  const cardDuzenle =  (id) => {
    setSecilenNot(notlar.find(item =>item.id === id));
    
  }

  useEffect(()=>{
    notGetir()
  },[])

  return (
    <>
    <Forms notEkle={notEkle} secilenNot={secilenNot} notlar={notlar}/>
    <CardList data={notlar} cardDuzenle={cardDuzenle}  notSil={notSil}/>
    </>
  )
}

export default App
