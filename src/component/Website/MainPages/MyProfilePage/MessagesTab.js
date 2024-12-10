import React, { useState, useEffect, useContext } from 'react'
import instructorimage from '../../../../Assets/instructorimage.png'
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import Paginationfn from '../../CommonComponent/Pagination';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { getUserAllLatestMessagesList, getUserMessagesList, sendUserMessagesList,getCreateChat } from '../../../../Access/actionCreator';
import { AppContext } from '../../../../context/AppContext'
export default function MessagesTab({ userName }) {

    const { LoginData } = useContext(AppContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [SearchValue, setSearchValue] = useState('');
    const [message, setMessage] = useState('');
    const [selectedChatMessage, setselectedChatMessage] = useState([]);
    const [MessageData, setMessageData] = useState([
        {
            Image: instructorimage,
            InstructorName: 'Ronald Richards',
            Message: 'Thank you for asking your doubt, I’ll send you a pdf file which cover the problems you are facing. If you have any...',
            Date: '18th March, 2024',

        },
        {
            Image: instructorimage,
            InstructorName: 'User Richards',
            Message: 'Thank you for asking your doubt, I’ll send you a pdf file which cover the problems you are facing. If you have any...',
            Date: '18th March, 2024',

        },
        {
            Image: instructorimage,
            InstructorName: 'ags ewuiewi',
            Message: 'Thank you for asking your doubt, I’ll send you a pdf file which cover the problems you are facing. If you have any...',
            Date: '18th March, 2024',

        },

    ]);
    const [filteredData, setfilteredData] = useState([]);
    const [ActiveMessageBoxData, setActiveMessageBoxData] = useState({});
    const [sendmessage, setsendmessage] = useState(false);
    useEffect(() => {
        getUserAllLatestMessagesList(LoginData._id, (callback) => {
            if (callback?.data?.length > 0) {
                setfilteredData(MessageData)
            } else {
                setfilteredData([])
            }
        })
    }, [MessageData])
    useEffect(() => {
        if (location.state === 'sendMessage') {
            getCreateChat(LoginData._id,ActiveMessageBoxData.instructorId,(callback)=>{
                if(callback.status === 'success' && (callback.message === 'Chat session created successfully' || callback.message === 'Chat session found successfully') ){
                    setsendmessage(true)
                    getUserMessagesfn()
                }
            })
        }
    }, [location])
    const StarFuntion = (rating) => {
        let rates = Number(rating)
        if (rates === 5) {
            return <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></>
        } else if (rates > 4 && rates < 5) {
            return <><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></>
        } else if (rates === 4) {
            return <><FaStar /><FaStar /><FaStar /><FaStar /><CiStar /></>
        } else if (rates > 3 && rates < 4) {
            return <><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /><CiStar /></>
        } else if (rates === 3) {
            return <><FaStar /><FaStar /><FaStar /><CiStar /><CiStar /></>
        } else if (rates > 2 && rates < 3) {
            return <><FaStar /><FaStar /><FaRegStarHalfStroke /><CiStar /><CiStar /></>
        } else if (rates === 2) {
            return <><FaStar /><FaStar /><CiStar /><CiStar /><CiStar /></>
        } else if (rates > 1 && rates < 2) {
            return <><FaStar /><FaRegStarHalfStroke /><CiStar /><CiStar /><CiStar /></>
        } else if (rates >= 0 && rates < 1) {
            return <><FaStar /><CiStar /><CiStar /><CiStar /><CiStar /></>
        }
    }

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
        if (e.target.value?.length > 0) {
            setfilteredData(MessageData.filter((value) => ((value.InstructorName).toLowerCase()).includes((e.target.value).toLowerCase())))
        } else {
            setfilteredData(MessageData);
        }
    }

    const handleChange = (e, value) => {

    }

    const handleMessagetabs = (value) => {
        setsendmessage(true);
        setActiveMessageBoxData(value)
        getUserMessagesfn()
    }
    const handlebackbtn = () => {
        setsendmessage(false);
        setActiveMessageBoxData({})
    }

    const handleMessage = (e) => {
        setMessage(e.target.value)
        sendUserMessagesList(LoginData._id,ActiveMessageBoxData.instructorId,LoginData._id,e.target.value,(callback)=>{
            if(callback.status == 'success'){
                getUserMessagesfn()
            }
        })
    }


    const getUserMessagesfn = () => {
        getUserMessagesList(LoginData._id, ActiveMessageBoxData.instructorId, (callback) => {
            if (callback?.data?.message?.length > 0) {
                setselectedChatMessage(callback?.data?.message)
            } else {
                setselectedChatMessage([])
            }
        })
    }
    return (
        <>
            <div className="courseTab-section">
                <h5 className='heading'>Messages</h5>
                {
                    !sendmessage ?
                        <>
                            <div className="row">
                                <div className="col-4">
                                    <div className="inputgrp">
                                        <input type="text" value={SearchValue} onChange={(e) => handleSearch(e)} placeholder="Search User" />
                                        <span><CiSearch /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {
                                    filteredData && filteredData?.length > 0 ?
                                        filteredData?.map((value, index) => {
                                            return (
                                                <div className="col-12 mt-3" key={index}>
                                                    <div className="messagecard" onClick={() => handleMessagetabs(value)}>
                                                        <div className="heading">
                                                            <div className="left-side">
                                                                <div className="circle">
                                                                    <img src={value?.instructorImage} alt="Image" width={'100%'} />
                                                                </div>
                                                                <h5>{value?.instructorName}</h5>
                                                            </div>
                                                            <div className="right-side">
                                                                <h6>{value?.latestMessage?.timestamp}</h6>
                                                            </div>
                                                        </div>
                                                        <h4>{value?.latestMessage?.messageContent}</h4>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        : ''}
                            </div>
                            <Paginationfn page={1} count={Math.ceil(filteredData?.length / 10)} handleChange={handleChange} />
                        </>
                        :
                        <div className="message-content mt-4">
                            <div className="top-section">
                                <span onClick={() => handlebackbtn()}><FaArrowLeftLong /></span>
                                <div className="circle">
                                    <img src={ActiveMessageBoxData?.Image} alt="image" width={'100%'} />
                                </div>
                                <h5>{ActiveMessageBoxData?.InstructorName}</h5>
                            </div>
                            <div className="mid-section">
                                <div className="row">
                                    <h5 className='head'>Today</h5>
                                </div>
                                <div className="block pt-4" style={{ overflowY: 'auto' }}>
                                    {
                                        selectedChatMessage?.length > 0 ?
                                        selectedChatMessage.map((value,index)=>{
                                            const messageType = value.senderId === ActiveMessageBoxData.instructorId ? 'reciever' :'sender'
                                            return(
                                            <>
                                            {
                                                messageType === 'sender'?
                                                <div className="sender-block mt-2">
                                                    <h5>{value.messageContent}</h5>
                                                    <h6>{value?.timestamp}</h6>
                                                </div>
                                                :
                                                <div className="reciever-block mt-2">
                                                    <h5>{value.messageContent}</h5>
                                                    <h6>{value?.timestamp}</h6>
                                                </div>
                                                }
                                            </>
                                            )
                                        })
                                            : ''}
                                </div>
                            </div>

                            <div className="bottom-section">
                                <input type="text" className='inputtag' placeholder='Type Your Message' value={message} onChange={(e) => handleMessage(e)} />
                                <button className='sendbtn' >Send</button>
                            </div>
                        </div>
                }
            </div>
        </>
    )
}
