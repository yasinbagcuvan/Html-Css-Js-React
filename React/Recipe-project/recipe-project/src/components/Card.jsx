import React, { useContext } from 'react'
import '../assets/style/card.scss'
import Food from '../assets/img/favIcon.png'
import DataContext from '../Context/DataContext'
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
const Card = ({recipe}) => {
  const {recipeDelete,cardEdit,search} = useContext(DataContext);
  return (
    ((recipe.title.toLowerCase().startsWith(search.toLowerCase())) ||
    (recipe.description.toLowerCase().startsWith(search.toLowerCase()))) &&
    <div className="card">
      <button onClick={()=>recipeDelete(recipe.id)} className='delete'><MdDeleteForever size={100} /></button>
      <button className='edit' onClick={()=> cardEdit(recipe.id)}><MdEdit size={100} /></button>
      <img src={recipe.image?recipe.image:Food} alt={recipe.title+"_kapak"} />
      <div className="card-body">
        <h4>{recipe.title}</h4>
        <p> {recipe.description}</p>
      </div>
    </div>
  )
}

export default Card