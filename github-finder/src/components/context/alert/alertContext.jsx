import { createContext, useContext, useReducer } from "react"; 
import alertReducer from "./alertReducer"; 

const AlertContext= createContext(); 

export const AlertProvider= ({children})=> {
    const intialState= null; 

    const setAlert= (message, type)=> {
        dispatch({
            type: "SET_ALERT",
            payload: {message, type}
        })
        setTimeout(()=> {
            dispatch({
                type: "REMOVE_ALERT"
            })
        }, 3000); 
    }
    
    const [state, dispatch]= useReducer(alertReducer, intialState); 
    return (
        <AlertContext.Provider value= {
            {
                alert: state,
                setAlert
            }
        }>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContext; 