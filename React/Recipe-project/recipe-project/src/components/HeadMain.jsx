import React,{ useContext} from 'react'
import '../assets/style/headMain.scss'
import DataContext from '../Context/DataContext'

const HeadMain = () => {

  const{state,dispatch,handleSubmit  } = useContext(DataContext);

  const{selectedRecipe,title,titleErr,description,descriptionErr,image} = state

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
      <input type="submit"  value={selectedRecipe?"Edit":"Add"}  />
      
    </form>
    </main>


  )

}

export default HeadMain