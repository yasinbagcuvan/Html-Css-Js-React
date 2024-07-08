//class components
//rcc

// import React, { Component } from 'react'

// export default class Header extends Component {
//   render() {
//     return (
//       <div>Header</div>
//     )
//   }
// }

//rce
// import React, { Component } from 'react'

// export class Header extends Component {
//   render() {
//     return (
//       <div>Header</div>
//     )
//   }
// }

// export default Header

//Functinoal Compenents
//rfc
// import React from 'react'

// export default function Header() {
//   return (
//     <div>Header</div>
//   )
// }

//rfce
// import React from 'react'

// function Header() {
//   return (
//     <div>Header</div>
//   )
// }

// export default Header


//rafce
import React from 'react'
import resim from "../assets/1136659.jpg"
import './header.css'
const Header = () => {
  return (
    <>
    <h3>Hello React</h3>
    <div className='flex'>
    <img src={resim} alt="" />
    </div>
    
    </>
  )
}

export default Header

