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
    const fetchUsers= async ()=> {
        const response= await fetch(`${githubUrl}/users`, {
            headers: {
                Authorization: `token ${token}`
            }
        })
        const data= await response.json(); 
        
        dispatch({
            type: "GET_USERS", 
            payload: data
        })
    }

    return (
        <GithubContext.Provider value= {
            {
                users: state.users,
                loading: state.loading,
                fetchUsers
            }
        }>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext; 