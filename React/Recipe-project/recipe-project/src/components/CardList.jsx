import React from 'react'
import Card from './Card'

const CardList = ({fakeRecipes, recipeDelete,cardEdit}) => {
  return (
    <div className="card-list">{
      fakeRecipes.map(recipe =>
          <Card recipe ={recipe} recipeDelete={recipeDelete} key={recipe.id} cardEdit={cardEdit}/>
        )
      }
  
      </div>
  )
}

export default CardList