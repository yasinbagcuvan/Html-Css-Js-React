import React, { useContext } from 'react'
import 'rsuite/dist/rsuite.css';
import '../assets/style/homePage.scss'
import Navi from './Navi';
import { Outlet } from 'react-router-dom'
import Slider from './Slider';


const HomePage = () => {
   
    return (
        <>
                <Navi/>
                <Slider/>
                <Outlet/>
                <div className='home-enterence'>
                  <h3>Recipes</h3>
                  <p>Find and share everyday cooking inspiration on Allrecipes. Discover recipes, cooks, videos, and how-tos based on the food you love and the friends you follow.</p>
                  <ul>
                    <li>
                      DINNER RECIPES
                    </li>
                    <li>
                    FRUITS, VEGETABLES AND OTHER PRODUCE
                    </li>
                    <li>
                    BREAD RECIPES
                    </li>
                    <li>
                    EVERYDAY COOKING
                    </li>
                    <li>
                    LUNCH RECIPES
                    </li>
                    <li>
                    INGREDIENTS
                    </li>
                  </ul>
                </div>
                <div className="home-content">
                <h3>What We're Loving Right Now</h3>
                <img src="https://www.allrecipes.com/thmb/SYfV7K0zt98xEdsAeGJDGS2yHi8=/771x514/filters:no_upscale():max_bytes(150000):strip_icc():focal(2010x1427:2012x1429):format(webp)/ar-ultimate-bbq-showdown-recirc-3x2-712e0664b8c043aaa4c91861631ae7b1.jpg" alt="" />
                
                </div>
        </>
  )
}


export default HomePage