import React, { useState } from 'react'
import contactusimage from '../../../Assets/contactusimg1.png'
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
export default function Contactus() {
    return (
        <>
            <div className="contactus-page">
                <div className="container">
                    <div className="heading">
                        <h5>Contact Us</h5>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-xs-12">
                            <div className="imgs">
                                <img src={contactusimage} alt="contactusimage" width={'100%'} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-xs-12">
                            <div className="infos">

                            <div className="info-boxes">
                                <h5><IoLocationSharp />&nbsp; Address:</h5>

                                <h6 className='valuess'>123 Main Street, Anytown, CA 12345</h6>
                            </div>
                            <div className="info-boxes">
                                <h5><IoCall />&nbsp; Phone Number:</h5>

                                <a className='valuess' href='tel:+(123) 456-7890'>+(123) 456-7890</a>
                            </div>
                            <div className="info-boxes">
                                <h5><IoIosMail />&nbsp; Mail:</h5>

                                <a className='valuess' href='mailto:bywayedu@webkul.in'>bywayedu@webkul.in</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
