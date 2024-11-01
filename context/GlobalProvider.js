import { useState, useContext, createContext, useEffect } from "react";
import {getCurrentUser} from "../lib/appwrite";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        getCurrentUser()
            .then((user) => {
                setUser(user);
                setIsLoggedIn(true);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, []);
    
    const value = {
        isLoggedIn,
        user,
        setUser,
        isLoading,
    };
    
    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;