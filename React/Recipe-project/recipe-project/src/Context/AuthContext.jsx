import { createContext, useEffect, useReducer, useState } from "react";
import AuthService from "../services/AuthService";
import { initialState, reducer } from "../reducer/reducer";
import axios from "axios";
import { toast, Zoom } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const[state,dispatch] = useReducer(reducer,initialState);
    const{isAuthenticated} = state;

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            dispatch({ type: "setAuthenticated", payload: true });
            dispatch({ type: "currentUser", payload: user });
        } else {
            dispatch({ type: "setAuthenticated", payload: false });
        }
    }, []);

    const getCurrentUser = async () => {
        const url = "https://api.escuelajs.co/api/v1/auth/profile";
    
        try {
            const response = await axios.get(url, {
                headers: {
                    "Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).access_token}`
                }
            });
    
            const user = response.data;
            console.log(user);
    
            // isAuthenticated durumunu kontrol et
            if (isAuthenticated) { // Eğer user varsa
                dispatch({ type: "currentUser", payload: user });
            }
        } catch (error) {
            console.error("User fetching error:", error);
            dispatch({ type: "currentUser", payload: null }); // Kullanıcı verisi alınamazsa null olarak ayarla
        }
    };

    const login1 = async(username,password) =>{
        try {
            const response = await AuthService.login(username,password);
            if(response.access_token){
                localStorage.setItem("user", JSON.stringify(response)); 
                dispatch({ type: "setAuthenticated", payload: true });
            }
        } catch (error) {
            dispatch({type:"setAuthenticated",payload:false})
            throw new Error(error)
        }
    }

    const logout = () =>{
        AuthService.logout();
        dispatch({type:"setAuthenticated",payload:false})
        dispatch({type:"currentUser", payload:""})
    }
    return <AuthContext.Provider value={{logout,isAuthenticated,state,dispatch,getCurrentUser,login1}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext