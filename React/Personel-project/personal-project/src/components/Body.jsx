import React from 'react'
import '../assets/style/index.scss'
import profile from '../assets/img/profile.jpg'

const Body = () => {
  return (
    <main>
        <section className="head">
            <h1>Welcome to My Website</h1>
            <p>Hello, I'm Yasin Bağçuvan, a web developer. Passionate about creating awesome websites.</p>
            <img src={profile} alt="" />
        </section>

        <section className="s1">
            <h1>About Me</h1>
            <ol>
                <ol>
                    <h3>Background</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi aliquid provident ullam dicta delectus temporibus eaque, animi</p>
                </ol>
                <ol>
                    <h3>Education</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi aliquid provident ullam dicta delectus temporibus eaque, animi</p>
                </ol>
            </ol>
        </section>

        <section className="s2">
            <h1>Skills</h1>
            <ol>
                <li>
                    <h3>HTML</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cupiditate animi magni corporis? Quos, sequi!</p>
                </li>
                <li>
                    <h3>CSS</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cupiditate animi magni corporis? Quos, sequi!</p>
                </li>
                <li>
                    <h3>JavaScript</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cupiditate animi magni corporis? Quos, sequi!</p>
                </li>
                <li>
                    <h3>REACT</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cupiditate animi magni corporis? Quos, sequi!</p>
                </li>
            </ol>
            
        </section>
        <section className="s1">
            <h1>Projects</h1>
            <ol>
                <ol>
                    <h3>Project1</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi aliquid provident ullam dicta delectus temporibus eaque, animi</p>
                </ol>
                <ol>
                    <h3>Project2</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi aliquid provident ullam dicta delectus temporibus eaque, animi</p>
                </ol>
            </ol>
        </section>
    </main>
  )
}

export default Body