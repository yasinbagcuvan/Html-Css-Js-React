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
    let url = "http://localhost:3005/recipes";
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
  const url =`http://localhost:3005/recipes/${id}`
  const response = await axios.patch(url, {isDeleted: true})
}
const recipesGet = async () =>{
  const url = "http://localhost:3005/recipes"
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





const handleSubmit = (e) => {
  e.preventDefault();
  // const title1=setrecipeTitle(e.target.value);
  // const description1=setrecipeDescription(e.target.value);
  // const image1=setrecipeImage(e.target.value);
  //setTitleErr(false)
  dispatch({type:"setTitleErr"})
  //setDescriptionErr(false)
  dispatch({type:"setDescriptionErr"})
  // setImageErr(false)
  if (title.trim() && description.trim()) {
    recipeAdd({
      title: title,
      description: description,
      image: image,
    });
    // setrecipeTitle("");
    // setrecipeDescription("");
    // setrecipeImage("");
    //case_8
    dispatch({type:"resetForm"})
  }
  else{
    //case_6-7
    !title.trim() && dispatch({type:"setTitleErr",payload:true})
    !description.trim() && dispatch({type:"setDescriptionErr",payload:true})
    // !image.trim() && setImageErr(true)
  }   
}

const buttonOnClick = () => {
  setLoading(true);
  // Simülasyon amaçlı bir süre sonra spinner'ı kaldırma
  setTimeout(() => {
    setLoading(false);
  }, 3000); // 3 saniye sonra spinner'ı kaldır
};

// useEffect(() => {
//   if(selectedRecipe){
//     setrecipeTitle(selectedRecipe.title)
//     setrecipeDescription(selectedRecipe.description)
//     setrecipeImage(selectedRecipe.image)
//   }
// },[selectedRecipe])

    return <DataContext.Provider value={{
        handleSubmit,
        recipeDelete, //Card
        cardEdit,
        state,dispatch

    }}>
        {children}
    </DataContext.Provider>
}

export default DataContext;