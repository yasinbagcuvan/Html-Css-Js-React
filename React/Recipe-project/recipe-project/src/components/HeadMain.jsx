import React,{ useContext} from 'react'
import '../assets/style/headMain.scss'
import DataContext from '../Context/DataContext'
import { toast, Zoom } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const HeadMain = () => {
  const navigate = useNavigate();

  const{state,dispatch, recipeAdd } = useContext(DataContext);

  const{selectedRecipe,title,titleErr,description,descriptionErr,image} = state
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
      dispatch({type:"resetForm"});
      toast.success(selectedRecipe ? "Recipe updated successfully!" : "Recipe added successfully!");
  
        // Ana sayfaya yönlendirin
        navigate('/');
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
  return (
    <main>
      <div>
      <h1>Welcome To the Recipe Sharing Platform</h1>
      <h3>Find and share the best recipes from around the world!</h3>
    </div>
    <form onSubmit={handleSubmit}>
      <h3>{selectedRecipe?"Edit Recipe":"Add Recipe"}</h3>
      <input value={title} onChange={e=>dispatch({type:"title",payload:e.target.value})} type='text' placeholder='Recipe Title'/>
      {titleErr && <p style={{ color: 'red' }}>Recipe Title is required!</p>} 
      <textarea  value={description} onChange={e=>dispatch({type:"description",payload:e.target.value})} type='text' placeholder='Recipe Description'/>
      {descriptionErr && <p style={{ color: 'red' }}>Recipe Description is required!</p>} 
      <input value={image} onChange={e=>dispatch({type:"image",payload:e.target.value})} type="url" placeholder='Image(url)' />
      {/* {imageErr && <p style={{ color: 'red' }}>Recipe Image is required!</p>}  */}
      <input type="submit"  value={selectedRecipe?"Edit":"Add"}   />
      
    </form>
    </main>


  )

}

export default HeadMain