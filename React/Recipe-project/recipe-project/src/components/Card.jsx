import React from 'react'
import '../assets/style/card.scss'
import Food from '../assets/img/favIcon.png'
const Card = ({recipe,recipeDelete,cardEdit}) => {
  return (
    <div className="card">
      <button onClick={()=>recipeDelete(recipe.id)} className='delete'>SİL</button>
      <button className='edit' onClick={()=> cardEdit(recipe.id)}>DÜZENLE</button>
      <img src={recipe.image?recipe.image:Food} alt={recipe.title+"_kapak"} />
      <div className="card-body">
        <h4>{recipe.title}</h4>
        <p> {recipe.description}</p>
      </div>
    </div>
  )
}

export default Card