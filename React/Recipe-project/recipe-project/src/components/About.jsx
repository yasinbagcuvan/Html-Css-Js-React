import React from 'react'
import Navi from './Navi'
import '../assets/style/about.scss'

const About = () => {
  return (
    <div className='about'>
        <Navi/>
        <h3 className='about-title'>Above all, we are:</h3>
        <ul className='about-ul'>
            <li className='about-li'><b style={{color:"black"}}>Friendly </b>We love trading ideas and hanging out with fellow home cooks. </li>
            <li className='about-li'><b style={{color:"black"}}>Supportive </b>Struggling with dinner inspo? We’re here to help!</li>
            <li className='about-li'><b style={{color:"black"}}>Creative </b>Cooking is an art. We like to experiment and express ourselves.</li>
            <li className='about-li'><b style={{color:"black"}}>Approachable </b>We don't judge—all cooking levels and recipes are welcome. </li>
            <li className='about-li'><b style={{color:"black"}}>Down-to-Earth </b>We love good food, period. It doesn’t need to be fussy to be great.</li>
            <li className='about-li'><b style={{color:"black"}}>Fun </b>Like you, we enjoy friends, family, cooking, and having a good laugh.</li>
        </ul>
    </div>
  )
}

export default About