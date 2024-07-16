import { useEffect, useState } from 'react'
import Navi from './components/Navi'
import HeadMain from './components/HeadMain'
import CardList from './components/CardList'
import axios from 'axios';
function App() {


const [fakeRecipes,setFakeRecipes] = useState([]);
const[selectedRecipe,setSelectedRecipe] = useState("")


const recipeAdd =  async (yeni) =>{
    let url = "http://localhost:3005/recipes";
    if(!selectedRecipe){
      setFakeRecipes(prev =>[...prev,yeni])
      const response = await axios.post(url,yeni)
    }
    else{
      url+=`/${selectedRecipe.id}`;
      const response2 = await axios.put(url,yeni)
      setFakeRecipes(prev => 
        prev.map(recipe => {
          if (recipe.id === selectedRecipe.id) {
            return {...response2.data}
          }
          else{
            return {...recipe}
          }
        })
      )
      setSelectedRecipe("");
    }
}

const recipeDelete = async(id) => {
  setFakeRecipes(prev =>prev.filter(statedenGelen => statedenGelen.id !== id))
  const url =`http://localhost:3005/recipes/${id}`
  const response = await axios.patch(url, {isDeleted: true})
}
const recipesGet = async () =>{
  const url = "http://localhost:3005/recipes"
  const response = await axios.get(url);
  const recipes = await response.data;
  setFakeRecipes(recipes);
}

const cardEdit =  (id) => {
  setSelectedRecipe(fakeRecipes.find(item =>item.id === id));
}

useEffect(()=>{
  recipesGet()
},[])

  return (
    <>
      <Navi/>
      <HeadMain recipeAdd={recipeAdd} fakeRecipes={fakeRecipes} selectedRecipe={selectedRecipe}/>
      <CardList fakeRecipes={fakeRecipes} recipeDelete={recipeDelete} cardEdit={cardEdit}/>
    </>
  )
}

export default App
