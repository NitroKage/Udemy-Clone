import React, { useState, useEffect ,useContext} from 'react'
import Navbar from '../CommonComponent/Navbar'
import Footer from '../CommonComponent/Footer';
import { IoClose } from "react-icons/io5";
import { Outlet } from 'react-router-dom';
import { AppContext } from '../../../context/AppContext';
export default function MainPage() {
    const { login, screenSize,LoginData,setLoginData } = useContext(AppContext);

    const [bannerPopup, setbannerPopup] = useState(true);


    return (
        <>
            {
                bannerPopup ?
                    <div className="banner-navbar">
                        <div className="container">
                            <div className='row d-flex'>
                                <div className='col-11 text-center'>
                                    <h5 className='mb-0'>Ready to get with the times?| Get the skills with Udemy Business.</h5>
                                </div>
                                <div className='col-1 text-end'>
                                    <IoClose onClick={() => setbannerPopup(false)} style={{ width: '20px', height: '20px',cursor:'pointer' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    : ''}
            <Navbar login={login} screenSize={screenSize} LoginData={LoginData} setLoginData={setLoginData}/>
            <Outlet />
            <Footer />
        </>
    )
}
