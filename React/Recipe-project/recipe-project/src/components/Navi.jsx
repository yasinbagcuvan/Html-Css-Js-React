import React, { useContext, useEffect } from 'react'
import '../assets/style/navi.scss'
import DataContext from '../Context/DataContext'
import { IoMdSearch } from "react-icons/io";
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import Brand from '../assets/img/brand.png'
import { toast, Zoom } from 'react-toastify';
const Navi = () => {
  const {state,logout,getCurrentUser} = useContext(AuthContext);
  const {dispatch} = useContext(DataContext);
  const navigate = useNavigate();
  const{isAuthenticated,currentUser,search} = state;

  const handleLogin = () =>{
    navigate("/login")
  }
  const handleLogout = () =>{
    {logout()}
    navigate("/login");
  }

  const handleAdd = (e) =>{
    e.preventDefault();
      if(!isAuthenticated){
        toast.error('UnAuthenticated!', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
        });
      }
      else{
        dispatch({type:"resetForm"})
        navigate('/add');
      }
  }

  useEffect(() =>{
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      getCurrentUser(); 
    }
}, [isAuthenticated]);
  
  return (
    <>
    <nav>
        <div className="brand">
            <img src={Brand} alt="Marka" />
            <h3>RECIPE PLATFORM</h3>
        </div>
        <ul className='liste'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to={"/add"} onClick={handleAdd}>Add Recipe</NavLink></li>
            <li><NavLink to={"/recipes"}>All Recipes</NavLink></li>
            <li><NavLink to={"/about"}>About</NavLink></li>
        </ul>
        <div className='search'>
            <input onChange={(e)=>dispatch({type:"search",payload:e.target.value})} type='text' placeholder='Search..'  /> 
            <NavLink to={"/recipes"} className='searchIcon'><IoMdSearch size={30} />  </NavLink> 
            {console.log(search)}
    </div>
        <div className="kullanici">
              {currentUser &&
                <div className="card-kullanici">
                  <img src={currentUser.avatar}/>
                    <div className="user-text">
                      <span>{currentUser.email} / {currentUser.role}</span>
                    </div>
                </div>
            }
            <button onClick={isAuthenticated?handleLogout:handleLogin}>{isAuthenticated?"Logout":"Login"}</button>
      </div>
    </nav>
    </>
  )
}

export default Navi