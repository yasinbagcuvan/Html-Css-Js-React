import React, { useContext } from 'react'
import '../assets/style/homePage.scss'
import { Carousel } from 'rsuite'
import DataContext from '../Context/DataContext';
import 'rsuite/dist/rsuite.css';

const Slider = () => {
    const {state}=useContext(DataContext);
  return (
    <Carousel autoplay className='custom-slider'>
    {
        state.fakeRecipes.map(recipe =>
            <img key={recipe.id} src={recipe.image} alt=""/>
        ) }
</Carousel>
  )
}

export default Slider