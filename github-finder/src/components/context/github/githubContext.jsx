import { createContext, useReducer } from "react";
import { useState } from "react";
import GithubReducer from "./githubReducer";

const GithubContext = createContext();
const githubUrl = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
    user: {},
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(`${githubUrl}/search/users?${params}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const { items } = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  const getUser= async (login)=> {
    setLoading(); 
    const response= await fetch(`${githubUrl}/users/${login}`, {
        headers: {
            Authorization: `token ${token}`,
        }
    }); 
    
    if(response.status=== 404){
        window.location= "/notfound"; 
    }else {
        const data = await response.json(); 
        dispatch({
            type: "GET_USER",
            payload: data
        })
    }
  }

  const clearUsers = async () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
        user: state.user,
        getUser
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
