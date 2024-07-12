import React, { useEffect, useState } from 'react'

const Forms = ({cardDuzenle,notEkle,notlar,secilenNot}) => {
    const[notAdi,setNotAdi]= useState("")
    const handleSubmit =(e) => {
        e.preventDefault();
        notEkle({
            id: (Number(notlar[notlar.length-1].id)+1).toString(),
            notAdi: notAdi
        });
        setNotAdi("");
    } 
    useEffect(() => {
        if(secilenNot){
            setNotAdi(secilenNot.notAdi)
        }
    },[secilenNot])
  return (
    <>
        <form onSubmit={handleSubmit}>
            <h3>Not Ekle</h3>
            <input type="text" onChange={e=>setNotAdi(e.target.value)} value={notAdi} placeholder='Not Ekleyiniz'/>
            <input type="submit" value={secilenNot?"Duzenle":"Ekle"} />
        </form>
    </>
  )
}

export default Forms