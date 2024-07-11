import { useEffect, useState } from 'react'
import Navi from './components/Navi'
import HeadMain from './components/HeadMain'
import CardList from './components/CardList'
function App() {


const [fakeRecipes,setFakeRecipes] = useState([]);

// const recipeAdd = (yeni) => {
//   setFakeRecipes(prev =>[...prev,yeni])
// }
const recipeAdd =  async (yeni) =>{
    const response = await fetch("http://localhost:3000/recipes",{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(yeni),
    });
    if (response.status=== 201) {
      
      setFakeRecipes(prev =>[...prev,yeni])
    }
}
// const recipeDelete = (id) => {
//   setFakeRecipes(prev => prev.filter(statedenGelen => statedenGelen.id !== id))
// }
const recipeDelete = async(id) => {
  const response = await fetch(`${"http://localhost:3000/recipes"}/${id}`,{
      method:"DELETE",
      headers: { "Content-Type": "application/json" },   
  });
  if (response.status===200) {
    setFakeRecipes(prev =>prev.filter(statedenGelen => statedenGelen.id !== id))
  }
}

useEffect(()=>{
  const recipesGet = async () =>{
    const url = "http://localhost:3000/recipes"
    const response = await fetch(url);
    const fakeRecipes = await response.json();
    console.log(fakeRecipes);
    setFakeRecipes(fakeRecipes);
  }
  recipesGet()
},[])

  return (
    <>
      <Navi/>
      <HeadMain recipeAdd={recipeAdd} fakeRecipes={fakeRecipes}/>
      <CardList fakeRecipes={fakeRecipes} recipeDelete={recipeDelete}/>
    </>
  )
}

export default App
