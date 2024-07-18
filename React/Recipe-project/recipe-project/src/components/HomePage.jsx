import React, { useContext } from 'react'
import DataContext from '../Context/DataContext';
import { Carousel } from 'rsuite';
import 'rsuite/dist/rsuite.css';
import '../assets/style/homePage.scss'

const HomePage = () => {
    const {state}=useContext(DataContext);
   
    return (
        <>


        <Carousel autoplay className='custom-slider'>
            {
             state.fakeRecipes.map(recipe =>
            <img key={recipe.id} src={recipe.image} alt=""/>
            ) }
         
        </Carousel>
        </>
  )
}


export default HomePage