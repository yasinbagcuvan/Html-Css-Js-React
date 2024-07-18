import React, { useContext } from 'react'
import '../assets/style/card.scss'
import Food from '../assets/img/favIcon.png'
import DataContext from '../Context/DataContext'
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
const Card = ({recipe}) => {
  const {cardEdit,recipeDelete,state,dispatch} = useContext(DataContext);
  const {search} = state
  return (
    ((recipe.title.toLowerCase().startsWith(search.toLowerCase())) ||
    (recipe.description.toLowerCase().startsWith(search.toLowerCase()))) &&
    <div   className="card">
        <img src={recipe.image?recipe.image:Food} alt={recipe.title+"_kapak"} /> 
        <div className="card-body">
          <h4>{recipe.title}</h4>
          <p> {recipe.description}</p>
        </div>
        <div className='buttons'>
      <a  onClick={()=>recipeDelete(recipe.id)} className='bn30'><MdDeleteForever size={20} /></a>
      <Link  className='bn30' to={recipe.id}>DETAIL</Link>
      <Link className='bn30' onClick={()=> cardEdit(recipe.id)}><MdEdit size={20} /></Link>
      </div>
    </div>
  )
}

export default Card