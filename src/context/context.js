import { createContext, useState } from 'react';

export const FontContext = createContext(null);

export const FontContextProvider = ({ children }) => {
    const [isBig, setIsBig] = useState(false);

    return (
        <FontContext.Provider value={{ isBig, setIsBig }} >
            {children}
        </FontContext.Provider>
    )
}