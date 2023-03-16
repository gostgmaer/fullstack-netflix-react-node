import React, { useContext, useState, useEffect } from "react";
import InvokeAPI, { cleanQueryparam } from "../utils/axiosSetup";
const AppContext = React.createContext(null);

const AppProvider = ({ children }) => {

    const [modal, setModal] = useState(false);
    const [loader, setLoader] = useState(false);
    const [movieID, setMovieID] = useState(null);
    const [infoMovie, setInfoMovie] = useState(null);

    const showHideModal = () => {
        setModal(!modal)
    }

    const getMovieInfo = async (id) => {
        setLoader(true)
        try {
            const query = { language: "en-US", append_to_response: null };
            cleanQueryparam(query);
            const res = await InvokeAPI(`movie/${id}`, "get", {}, {}, query);
            setInfoMovie(res);
        } catch (error) {
            console.log(error);
        }
        setLoader(false)
    }

    return <AppContext.Provider value={{
        modal, showHideModal, loader, setLoader, getMovieInfo, infoMovie
    }}>{children}</AppContext.Provider>;
};

export const useGlobalAppContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };