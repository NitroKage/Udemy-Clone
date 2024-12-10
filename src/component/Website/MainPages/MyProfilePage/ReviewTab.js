import React, { useState ,useEffect, useContext} from 'react'
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import Paginationfn from '../../CommonComponent/Pagination';
import { getMyReviewsList } from '../../../../Access/actionCreator';
import {AppContext} from '../../../../context/AppContext'

export default function ReviewTab() {
    const { LoginData } = useContext(AppContext);
    const [ReviewData, setReviewData] = useState([
        {
            courseName: 'Beginners guide',
            Rating: '5',
            Review: 'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.'
        },
        {
            courseName: 'Beginners guide',
            Rating: '5',
            Review: 'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.'
        },
    ])

    useEffect(()=>{
        getMyReviewsList(LoginData._id,(callback)=>{
            if(callback?.data?.coursesBought?.length > 0){
                setReviewData(callback?.data?.coursesBought)
            }else{
                setReviewData([])
            }
        })
    },[])

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

    const handleChange = (e, value) => {

    }
    return (
        <>
            <div className="courseTab-section">
                <h5 className='heading'>Reviews <span>({ReviewData?.length})</span></h5>

                <div className="row">
                    {
                        ReviewData && ReviewData?.length > 0 ?
                            ReviewData?.map((value, index) => {
                                return (
                                    <div className="col-12 mt-3" key={index}>
                                        <div className="reviewcard">
                                            <div className="box">
                                                <h5>Course Name:</h5>
                                                <h4>{value?.courseName}</h4>
                                            </div>
                                            <div className="box">
                                                <h5>Rating:</h5>
                                                <h4>{StarFuntion(value?.Rating)}</h4>
                                            </div>
                                            <div className="box">
                                                <h5>Review:</h5>
                                                <h4 style={{fontWeight:'400'}}>{value?.Review}</h4>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            : ''}
                </div>
                <Paginationfn page={1} count={Math.ceil(ReviewData?.length / 10)} handleChange={handleChange}/>
            </div>
        </>
    )
}
