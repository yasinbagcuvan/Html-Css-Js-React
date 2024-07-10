import React,{ useState } from 'react'
import '../assets/style/headMain.scss'

const HeadMain = ({recipeAdd,fakeRecipes}) => {
  const[title,setrecipeTitle]=useState("");
  const[description,setrecipeDescription]=useState("");
  const[image,setrecipeImage]=useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
  return (
    <main>
      <div>
      <h1>Welcome To the Recipe Sharing Platform</h1>
      <h3>Find and share the best recipes from around the world!</h3>
    </div>
    <form onSubmit={handleSubmit}>
      <h3>Add Recipe</h3>
      <input value={title} onChange={e=>setrecipeTitle(e.target.value)} type='text' placeholder='Recipe Title'/>
      <textarea  value={description} onChange={e=>setrecipeDescription(e.target.value)} type='text' placeholder='Recipe Description'/>
      <input value={image} onChange={e=>setrecipeImage(e.target.value)} type="url" placeholder='Image(url)' />
      <input disabled={title ==="" || description===""} type="submit" value="Add" />
    </form>
      
    </main>
  )
}

export default HeadMain