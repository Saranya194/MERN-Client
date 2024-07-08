import { createContext, useState } from "react";
export const FormContext=createContext();
//component to access by consumer
export const FormProvider=({childcomp})=>{const[localDB,setDB]= useState([])
    return(
        <FormContext.Provider value={{localDB,setDB}}>
            {childcomp}
        </FormContext.Provider>
    )
}
