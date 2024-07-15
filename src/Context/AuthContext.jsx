import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const login = (name, email) => {
        setIsAuthenticated(true);
        setUserName(name);
        setUserEmail(email);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserName("");
        setUserEmail("");
    };

    const contextValue = { isAuthenticated, userName, userEmail, login, logout };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
