import React from 'react'
import Card from './Card'

const CardList = ({data}) => {
  return (
    <div className="card-list">{
        data.map(recipe =>
          <Card recipe ={recipe} key={recipe.id}/>
        )
      }
  
      </div>
  )
}

export default CardList