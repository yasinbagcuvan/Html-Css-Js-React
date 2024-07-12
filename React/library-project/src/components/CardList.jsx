import React from 'react'
import Card from './Card'

const CardList = ({data,kitapSil,secilenKategori,cardDuzenle}) => {
  
  return (
    <>
    <h3 style={{marginLeft:"25px"}}>{secilenKategori} </h3>
      <div className="card-list">{
        data.map(kitap =>
          !kitap.isDeleted &&
          <Card kitap ={kitap} kitapSil={kitapSil} key={kitap.id} cardDuzenle={cardDuzenle}/>
        )
      }

      </div>
    </>
  )
}

export default CardList