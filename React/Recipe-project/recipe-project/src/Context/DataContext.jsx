import axios from "axios";
import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({children}) =>{

    const [fakeRecipes,setFakeRecipes] = useState([]);
const[selectedRecipe,setSelectedRecipe] = useState("")
const[title,setrecipeTitle]=useState("");
const[description,setrecipeDescription]=useState("");
const[image,setrecipeImage]=useState("");
const[titleErr,setTitleErr]=useState(false);
const[descriptionErr,setDescriptionErr]=useState(false);
const[search, setSearch] = useState("");
//const[imageErr,setImageErr]=useState(false);
//const [loading, setLoading] = useState(false);


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





const handleSubmit = (e) => {
  e.preventDefault();
  // const title1=setrecipeTitle(e.target.value);
  // const description1=setrecipeDescription(e.target.value);
  // const image1=setrecipeImage(e.target.value);
  setTitleErr(false)
  setDescriptionErr(false)
  // setImageErr(false)
  if (title.trim() && description.trim()) {
    recipeAdd({
      id: (Number(fakeRecipes[fakeRecipes.length-1].id)+1).toString(),
      title: title,
      description: description,
      image: image,
    });
    setrecipeTitle("");
    setrecipeDescription("");
    setrecipeImage("");
  }
  else{
    !title.trim() && setTitleErr(true)
    !description.trim() && setDescriptionErr(true)
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

useEffect(() => {
  if(selectedRecipe){
    setrecipeTitle(selectedRecipe.title)
    setrecipeDescription(selectedRecipe.description)
    setrecipeImage(selectedRecipe.image)
  }
},[selectedRecipe])

    return <DataContext.Provider value={{
        selectedRecipe, //HeadMain
        title,
        description,
        image,
        setrecipeTitle,
        setrecipeDescription,
        setrecipeImage,
        handleSubmit,
        descriptionErr,
        titleErr,
        fakeRecipes, //CardList
        recipeDelete, //Card
        cardEdit,
        search, 
        setSearch 
    }}>
        {children}
    </DataContext.Provider>
}

export default DataContext;