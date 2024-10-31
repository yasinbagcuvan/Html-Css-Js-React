import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import { initialState, reducer } from "../reducer/reducer";

const DataContext = createContext();

export const DataProvider = ({children}) =>{

    const[state,dispatch] = useReducer(reducer,initialState)
    const{selectedRecipe,fakeRecipes,title,description,image} = state
 

  
    //const[imageErr,setImageErr]=useState(false);
    //const [loading, setLoading] = useState(false);


const recipeAdd =  async (yeni) =>{
    let url = "http://localhost:5500/recipes";
    if(!selectedRecipe){
      //setFakeRecipes(prev =>[...prev,yeni])
      //case_3
      yeni.id = (Number(fakeRecipes[fakeRecipes.length-1].id)+1).toString()
      dispatch({type:"recipeAdd",yeni})
      const response = await axios.post(url,yeni)
    }
    else{
      url+=`/${selectedRecipe.id}`;
      const response2 = await axios.put(url,yeni)
      // setFakeRecipes(prev => 
      //   prev.map(recipe => {
      //     if (recipe.id === selectedRecipe.id) {
      //       return {...response2.data}
      //     }
      //     else{
      //       return {...recipe}
      //     }
      //   })
      // )
      // setSelectedRecipe("");
      //case_4
      yeni.id = selectedRecipe.id
      dispatch({type:"recipeEdit",yeni})
    }
}

const recipeDelete = async(id) => {
  //setFakeRecipes(prev =>prev.filter(statedenGelen => statedenGelen.id !== id))
  //case_2
  dispatch({type:"recipeDelete",id})
  const url =`http://localhost:5500/recipes/${id}`
  const response = await axios.patch(url, {isDeleted: true})
}
const recipesGet = async () =>{
  const url = "http://localhost:5500/recipes"
  const response = await axios.get(url);
  const recipes = await response.data;
  //setFakeRecipes(recipes);
  //case_1
  dispatch({type:"recipesGet",payload:recipes})
}

const cardEdit =  (id) => {
  // setSelectedRecipe(fakeRecipes.find(item =>item.id === id));
  //case_5
  dispatch({type:"cardEdit",id})
}

useEffect(()=>{
  recipesGet()
},[])







// useEffect(() => {
//   if(selectedRecipe){
//     setrecipeTitle(selectedRecipe.title)
//     setrecipeDescription(selectedRecipe.description)
//     setrecipeImage(selectedRecipe.image)
//   }
// },[selectedRecipe])

    return <DataContext.Provider value={{
        recipeAdd,
        recipeDelete, //Card
        cardEdit,
        state,dispatch

    }}>
        {children}
    </DataContext.Provider>
}

export default DataContext;