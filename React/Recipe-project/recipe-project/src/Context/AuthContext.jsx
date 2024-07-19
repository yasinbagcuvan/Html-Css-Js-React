import { createContext, useReducer, useState } from "react";
import AuthService from "../services/AuthService";
import { initialState, reducer } from "../reducer/reducer";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const[state,dispatch] = useReducer(reducer,initialState);
    const{isAuthenticated} = state;


    const getCurrentUser = async()=> {
        const url = "https://api.escuelajs.co/api/v1/auth/profile";
        const response = await axios.get(url,{
          headers:{
            "Authorization":`Bearer ${JSON.parse(localStorage.getItem("user")).access_token}`
          }
        });
        const user = await response.data;
        console.log(user);
        if (isAuthenticated) {
            dispatch({ type: "currentUser", payload:user });
        }
        
      }

    const login1 = async(username,password) =>{
        try {
            const response = await AuthService.login(username,password);
            if(response.access_token){
                dispatch({type:"setAuthenticated",payload:JSON.parse(localStorage.getItem("user"))})
            }
        } catch (error) {
            dispatch({type:"setAuthenticated",payload:false})
            throw new Error(error)
        }
    }

    const logout = () =>{
        AuthService.logout();
        dispatch({type:"setAuthenticated",payload:false})
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
      }
   

    return <AuthContext.Provider value={{logout,state,dispatch,getCurrentUser,login1,handleAdd}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext