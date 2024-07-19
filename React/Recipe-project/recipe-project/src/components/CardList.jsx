import React, { useContext } from 'react'
import Card from './Card'
import DataContext from '../Context/DataContext'
import CardDetail from './CardDetail';
import Navi from './Navi';

const CardList = () => {
  const {state}=useContext(DataContext);
  return (
    <>
    <Navi/>
    <div className="card-list">{
      state.fakeRecipes.map(recipe =>
          <Card recipe ={recipe}  key={recipe.id}/>
        )
      }
  
      </div>
    </>
  )
}

export default CardList