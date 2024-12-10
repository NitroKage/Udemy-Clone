import React, { useState, useEffect, useContext } from 'react'
import instructorimage from '../../../../Assets/intructor-image.png'
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { GoMail } from "react-icons/go";
import Paginationfn from '../../CommonComponent/Pagination';
import { getUserTeacherList} from '../../../../Access/actionCreator';
import {AppContext} from '../../../../context/AppContext'

export default function TeacherTab({ userName }) {
    const { LoginData } = useContext(AppContext);
    const navigate = useNavigate();
    const [SearchValue, setSearchValue] = useState('');
    const [MessageData, setMessageData] = useState([
        {
            Image: instructorimage,
            InstructorName: 'Ronald ',
            profession: 'UI/UX Designer'

        },
        {
            Image: instructorimage,
            InstructorName: 'Ronald Richards',
            profession: 'UI/UX Designer'

        },
        {
            Image: instructorimage,
            InstructorName: 'Ronald Richards',
            profession: 'UI/UX Designer'

        },
        {
            Image: instructorimage,
            InstructorName: 'Ronald Richards',
            profession: 'UI/UX Designer'

        },

    ]);
    const [filteredData, setfilteredData] = useState([]);

    useEffect(() => {
        getUserTeacherList(LoginData._id,(callback)=>{
            if(callback.data?.length > 0){
                setfilteredData(MessageData)
            }
        })

    }, [MessageData])

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
    return (
        <>
            <div className="courseTab-section">
                <h5 className='heading'>Teachers <span>({filteredData?.length})</span></h5>
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
                                    <div className="col-lg-3 col-md-6 col-xs-12 mt-3" key={index}>
                                        <div className="Teachercard">
                                            <div className="square">
                                                <img src={value?.Image} alt="Image" width={'100%'} />
                                            </div>
                                            <h5>{value?.InstructorName}</h5>
                                            <hr />
                                            <button className='SendMessagebtn' onClick={() => navigate(`/profile/${userName}/Messages`, { state: 'sendMessage' })}>Send Message &nbsp;<GoMail /></button>
                                        </div>
                                    </div>
                                )
                            })
                            : ''}
                </div>
                <Paginationfn page={1} count={Math.ceil(filteredData?.length / 10)} handleChange={handleChange} />
            </div>
        </>
    )
}
