import React from 'react'
import { useParams } from 'react-router-dom';

const CardDetail = () => {
    const {fakeRecipes}=useContext(DataContext);
    const params = useParams();
    const param = params.recipeId;
  return (
    <div className='detay'>
        <img src={fakeRecipes[param-1].image} alt="" />
        <h3>{fakeRecipes[param-1].title}</h3>
        <p>{fakeRecipes[param-1].description}</p>
    </div>
  )
}

export default CardDetail