import React, { useContext } from 'react'
import '../assets/style/card.scss'
import Food from '../assets/img/favIcon.png'
import DataContext from '../Context/DataContext'
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
const Card = ({recipe}) => {
  const {cardEdit,recipeDelete,state,dispatch} = useContext(DataContext);
  const {search} = state
  const {isAuthenticated} = useContext(AuthContext);
  return (
    
    ((recipe.title.toLowerCase().startsWith(search.toLowerCase())) ||
    (recipe.description.toLowerCase().startsWith(search.toLowerCase()))) &&
    <div   className="card">
      
        <img src={recipe.image?recipe.image:Food} alt={recipe.title+"_kapak"} /> 
        <div className="card-body">
          <h4>{recipe.title}</h4>
          <p> {recipe.description}</p>
        </div>
        
        {isAuthenticated ? (
    <div className='buttons'>
        <a onClick={() => recipeDelete(recipe.id)} className='bn30'><MdDeleteForever size={20} /></a>
        <Link className='bn30' to={'/add'} onClick={() => cardEdit(recipe.id)}><MdEdit size={20} /></Link>
    </div>
) : (
    <div className='buttons'>
        <Link className='bn30' to={recipe.id}>DETAIL</Link>
    </div>
)}

    </div>
  )
}

export default Card