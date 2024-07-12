import React,{ useEffect, useState } from 'react'
import '../assets/style/headMain.scss'

const HeadMain = ({recipeAdd,fakeRecipes,selectedRecipe}) => {
  const[title,setrecipeTitle]=useState("");
  const[description,setrecipeDescription]=useState("");
  const[image,setrecipeImage]=useState("");
  const[titleErr,setTitleErr]=useState(false);
  const[descriptionErr,setDescriptionErr]=useState(false);
  const[imageErr,setImageErr]=useState(false);
  const [loading, setLoading] = useState(false);



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
  return (
    <main>
      <div>
      <h1>Welcome To the Recipe Sharing Platform</h1>
      <h3>Find and share the best recipes from around the world!</h3>
    </div>
    <form onSubmit={handleSubmit}>
      <h3>{selectedRecipe?"Edit Recipe":"Add Recipe"}</h3>
      <input value={title} onChange={e=>setrecipeTitle(e.target.value)} type='text' placeholder='Recipe Title'/>
      {titleErr && <p style={{ color: 'red' }}>Recipe Title is required!</p>} 
      <textarea  value={description} onChange={e=>setrecipeDescription(e.target.value)} type='text' placeholder='Recipe Description'/>
      {descriptionErr && <p style={{ color: 'red' }}>Recipe Description is required!</p>} 
      <input value={image} onChange={e=>setrecipeImage(e.target.value)} type="url" placeholder='Image(url)' />
      {/* {imageErr && <p style={{ color: 'red' }}>Recipe Image is required!</p>}  */}
      <input type="submit"  value={selectedRecipe?"Edit":"Add"}  />
      
    </form>
      
    </main>


  )
//   <main>
// <div>
// <h1>Welcome To the Recipe Sharing Platform</h1>
// <h3>Find and share the best recipes from around the world!</h3>
// </div>
// <form onSubmit={handleSubmit}>
// <h3>Add Recipe</h3>
// <input value={title} onChange={e=>setrecipeTitle(e.target.value)} type='text' placeholder='Recipe Title'/>
// <textarea  value={description} onChange={e=>setrecipeDescription(e.target.value)} type='text' placeholder='Recipe Description'/>
// <input value={image} onChange={e=>setrecipeImage(e.target.value)} type="url" placeholder='Image(url)' />
// <input disabled={title ==="" || description===""} type="submit" value="Add" />
// </form>

// </main>
}

export default HeadMain