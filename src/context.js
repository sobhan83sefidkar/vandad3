import { createContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [projectLink , setProjectLink] = useState("voip")

    return (
        <MyContext.Provider value={{
            loading,
            setLoading,
            projectLink,
            setProjectLink
        }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyContext;