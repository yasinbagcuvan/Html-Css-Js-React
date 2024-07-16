import React, { useContext } from 'react'
import Card from './Card'
import DataContext from '../Context/DataContext'

const CardList = () => {
  const {fakeRecipes}=useContext(DataContext);
  return (
    <div className="card-list">{
      fakeRecipes.map(recipe =>
          <Card recipe ={recipe}  key={recipe.id}/>
        )
      }
  
      </div>
  )
}

export default CardList