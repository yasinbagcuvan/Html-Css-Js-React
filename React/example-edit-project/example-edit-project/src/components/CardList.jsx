import React from 'react'
import Card from './Card'

const CardList = ({data,notSil,cardDuzenle}) => {
  return (
    <>
    <div>{
        data.map(not =>
          !not.isDeleted &&
          <Card not ={not} notSil={notSil} key={not.id} cardDuzenle={cardDuzenle}/>
        )
      }

      </div>
    </>
  )
}

export default CardList