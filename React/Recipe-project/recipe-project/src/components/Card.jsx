import React from 'react'
import '../assets/style/card.scss'
import Food from '../assets/img/favIcon.png'
const Card = ({recipe}) => {
  return (
    <div className="card">
      <img src={recipe.image?recipe.image:Food} alt={recipe.title+"_kapak"} />
      <div className="card-body">
        <h4>{recipe.title}</h4>
        <p> {recipe.description}</p>
      </div>
    </div>
  )
}

export default Card