import React, { useState ,useEffect,useContext } from 'react'
import categoryboximage from '../../../../Assets/categoryboximage.png'
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import Paginationfn from '../../CommonComponent/Pagination';
import { useNavigate } from 'react-router-dom';
import { getMyCourses } from '../../../../Access/actionCreator';
import {AppContext} from '../../../../context/AppContext'
export default function CourseTab() {
    
    const { LoginData } = useContext(AppContext);
    const navigate = useNavigate();
    const [SearchValue, setSearchValue] = useState('');
const [courseData,setcourseData] =useState([
    {
        Image: categoryboximage,
        courseName: ' Guide to Design',
        InstructorName: 'Ronald Richards',
        progress: '25%',
        rating: '4',
        noOfRating: '1500',

    },
    {
        Image: categoryboximage,
        courseName: 'Beginner’s  to Design',
        InstructorName: 'Ronald Richards',
        progress: '35%',
        rating: '3',
        noOfRating: '1500',

    },
    {
        Image: categoryboximage,
        courseName: 'Beginner’s Guide  Design',
        InstructorName: 'Ronald Richards',
        progress: '75%',
        rating: '5',
        noOfRating: '1500',

    },
    {
        Image: categoryboximage,
        courseName: 'Beginner’s Guide to ',
        InstructorName: 'Ronald Richards',
        progress: '75%',
        rating: '4.5',
        noOfRating: '1500',

    },
]);
const [filteredData,setfilteredData] =useState([]);

useEffect(()=>{
    getMyCourses(LoginData._id,(callback)=>{
        if(callback?.data?.coursesBought?.length > 0 ){
            setfilteredData(callback?.data?.coursesBought)
        }
    })
},[courseData])
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


    const handleSearch =(e) =>{
        setSearchValue(e.target.value);
        if(e.target.value?.length > 0){
            setfilteredData(courseData.filter((value)=>((value.courseName).toLowerCase()).includes((e.target.value).toLowerCase())))
        }else{
            setfilteredData(courseData);
        }
    }

    const handleChange = (e, value) => {

    }
    return (
        <>
            <div className="courseTab-section">
                <h5 className='heading'>Courses <span>({filteredData?.length})</span></h5>
                <div className="row">
                    <div className="col-4">
                        <div className="inputgrp">
                            <input type="text" value={SearchValue} onChange={(e) => handleSearch(e)} placeholder="Search Course" />
                            <span><CiSearch /></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        filteredData && filteredData?.length > 0 ?
                        filteredData?.map((value, index) => {
                                return (
                                    <div className="col-lg-4 col-md-6 col-xs-12 mt-3" key={index}>
                                        <div className="coursecard" onClick={()=>navigate(`/mycourses/${value?.courseName}`)}>
                                            <div className="square">
                                                <img src={value?.Image} alt="Image" width={'100%'} />
                                            </div>
                                            <h4>{value?.courseName}</h4>
                                            <h6>By {value?.InstructorName}</h6>
                                            <div className="progress-bar-holder">
                                                <div className="progressbar" style={{ width: value?.progress }}></div>
                                            </div>
                                            <div className="ratings-section">
                                                <h5>{StarFuntion(value?.rating)} ({value?.noOfRating} Ratings)</h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            : ''}
                </div>
               <Paginationfn page={1} count={Math.ceil(filteredData?.length /10)} handleChange={handleChange}/>
            </div>
        </>
    )
}
