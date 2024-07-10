import React from 'react'
import Card from './Card'

const CardList = ({data,kitapSil}) => {
  
  return (
    <div className="card-list">{
      data.map(kitap =>
        <Card kitap ={kitap} kitapSil={kitapSil} key={kitap.id}/>
      )
    }

    </div>
  )
}

export default CardList