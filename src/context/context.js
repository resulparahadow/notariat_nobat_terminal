import { createContext, useReducer, useEffect, useState } from 'react';
import AuthReducer from './AuthReducer';

//coookie 

const INITIAL_STATE = {
    data: null
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [id, setId] = useState(null);
    const [fullName, setFullNAme] = useState(null);

    return (
        <AuthContext.Provider
            value={{

            }}
        >
            {children}
        </AuthContext.Provider>
    )
}