import { createContext, useReducer } from "react";
import { useState } from "react";
import GithubReducer from "./githubReducer";

const GithubContext= createContext(); 
const githubUrl= process.env.REACT_APP_API_URL; 
const token= process.env.REACT_APP_TOKEN; 

export const GithubProvider= ({children})=> {
   const initialState ={
    users: [], 
    loading: false
   }
   const [state, dispatch]= useReducer(GithubReducer, initialState); 

   const setLoading = ()=> {
        dispatch({
            type: "SET_LOADING"
        })
   }

    const searchUsers= async (text)=> {
        setLoading(); 
        const params= new URLSearchParams({
            q: text
        }); 
        const response= await fetch(`${githubUrl}/search/users?${params}`, {
            headers: {
                Authorization: `token ${token}`
            }
        })
        const {items}= await response.json(); 
        
        dispatch({
            type: "GET_USERS", 
            payload: items
        })
    }

    return (
        <GithubContext.Provider value= {
            {
                users: state.users,
                loading: state.loading,
                searchUsers
            }
        }>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext; 