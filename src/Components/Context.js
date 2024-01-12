import React, { useState } from "react";
import { useContext } from "react";
const Context = React.createContext();

const AppProvider = ({ children }) => {
    const [Z, setZ] = useState();
    const [N, setN] = useState();
    return (
        <Context.Provider value={
            {
                Z,
                setZ,
                N,
                setN,

            }
        } >
            {children}
        </Context.Provider>
    )
}
export const useGlobalState = () => {
    return useContext(Context);
}
export {AppProvider, Context};