import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import DataContext from '../Context/DataContext';
import Navi from './Navi';
import '../assets/style/cardDetail.scss'

const CardDetail = () => {
    const {state}=useContext(DataContext);
    const params = useParams();
    const param = params.recipeId;
    console.log(params);
  return (
    <>
    <Navi/>
    <div className='detay'>
        <img src={state.fakeRecipes[param-1].image} alt="" />
        <h3>{state.fakeRecipes[param-1].title}</h3>
        <p>{state.fakeRecipes[param-1].description}</p>
    </div>
    </>
  )
}

export default CardDetail