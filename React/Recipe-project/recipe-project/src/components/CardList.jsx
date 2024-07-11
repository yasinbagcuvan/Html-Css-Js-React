import React from 'react'
import Card from './Card'

const CardList = ({fakeRecipes, recipeDelete}) => {
  return (
    <div className="card-list">{
      fakeRecipes.map(recipe =>
          <Card recipe ={recipe} recipeDelete={recipeDelete} key={recipe.id}/>
        )
      }
  
      </div>
  )
}

export default CardList