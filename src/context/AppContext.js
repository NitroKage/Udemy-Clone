import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [login, setLogin] = useState(false);
    const [screenSize, setScreenSize] = useState('small');
    const [bannerPopup, setBannerPopup] = useState(true);
const [LoginData ,setLoginData] =useState({});
const storedLoginData = window.sessionStorage?.getItem('LoginData');
    useEffect(() => {
        let AccessToken = window.sessionStorage.getItem('accessToken');
        if (AccessToken !== '' && AccessToken !== undefined && AccessToken !== null) {
            setLogin(true);
            setLoginData(JSON.parse(storedLoginData));
        } else {
            setLogin(false);
            setLoginData({})
        }

        const updateScreenSize = () => {
            let width = window.innerWidth;
            if (width <= 991) {
                setScreenSize('small');
            } else {
                setScreenSize('large');
            }
        };
        updateScreenSize();
        window.addEventListener('resize', updateScreenSize);
        return () => window.removeEventListener('resize', updateScreenSize);
    }, [storedLoginData]);

    return (
        <AppContext.Provider value={{ login, screenSize, setLogin,LoginData,setLoginData }}>
            {children}
        </AppContext.Provider>
    );
};
