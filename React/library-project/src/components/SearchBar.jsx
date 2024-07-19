import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../context/DataContext';
import '../assets/style/search.scss'
import { FaSearch } from "react-icons/fa";
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SearchBar = () => {
const {state,dispatch} = useContext(DataContext);
const {isAuthenticated,logout} = useContext(AuthContext)
const navigate = useNavigate();
const [currentUser, setCurrentUser] = useState("");

const handleLogin = () =>{
  navigate("/login")
}

const handleLogout = () =>{
  logout();
  navigate("/login");
}

const getCurrentUser = async()=> {
  const url = "https://api.escuelajs.co/api/v1/auth/profile";
  const response = await axios.get(url,{
    headers:{
      "Authorization":`Bearer ${JSON.parse(localStorage.getItem("user")).access_token}`
    }
  });
  const user = await response.data;
  {isAuthenticated && setCurrentUser(user);}
  console.log(user);
  
}

useEffect(() =>{
  if(JSON.parse(localStorage.getItem("user"))){
    getCurrentUser();
  }
},[])

  return (
    //case_5
    <div className='search'>
      <div className="kullanici">
              {currentUser &&
                <div className="card-kullanici">
                  <img src={currentUser.avatar}/>
                    <div className="user-text">
                      <span>{currentUser.email} / {currentUser.role}</span>
                    </div>
                </div>
            }
            <button onClick={isAuthenticated?handleLogout:handleLogin}>{isAuthenticated?"Çıkış":"Giriş"}</button>
      </div>

      <div className='search-bar'>
            <h3 style={{marginLeft:"25px"}}>
            {state.secilenKategori} </h3>
            <input onChange={(e)=>dispatch({type:"search",payload:e.target.value})} type='text' placeholder='Ara..'  /> 
      </div>
    </div>
  )
}

export default SearchBar