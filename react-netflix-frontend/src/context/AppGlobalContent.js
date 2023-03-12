import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext(null);

const AppProvider = ({ children }) => {

    const [modal, setModal] = useState(false);

    const showHideModal = () => {
        setModal(!modal)
    }

    return <AppContext.Provider value={{
        modal, showHideModal
    }}>{children}</AppContext.Provider>;
};

export const useGlobalAppContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };