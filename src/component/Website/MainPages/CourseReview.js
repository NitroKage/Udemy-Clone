import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { CiStar } from "react-icons/ci"
import { useNavigate } from 'react-router-dom';
export default function CourseReview() {
    const navigate = useNavigate();
    const [hoverIndex, setHoverIndex] = useState(null);
    const [hoverPosition, setHoverPosition] = useState(null);
    const [rating, setRating] = useState(null);
    const [review, setReview] = useState('');

    const handleMouseEnter = (index, event) => {
        setHoverIndex(index);
        updateHoverPosition(event);
    };

    const handleMouseMove = (event) => {
        if (hoverIndex !== null) {
            updateHoverPosition(event);
        }
    };

    const handleMouseLeave = () => {
        setHoverIndex(null);
        setHoverPosition(null);
    };

    const updateHoverPosition = (event) => {
        const starElement = event.currentTarget;
        const { left, width } = starElement.getBoundingClientRect();
        const mouseX = event.clientX;
        const relativeMouseX = mouseX - left;
        const hoverPos = relativeMouseX / width;

        setHoverPosition(hoverPos);
    };

    const handleClick = (index) => {
        let newRating;
        if (hoverPosition < 0.5) {
            newRating = index + 0.5;
        } else {
            newRating = index + 1;
        }
        setRating(newRating);
    };

    const renderStarIcon = (index) => {
        if (rating !== null && index < Math.ceil(rating)) {
            if (rating > index && rating < index + 1) {
                return rating % 1 === 0.5 ? <FaRegStarHalfStroke /> : <FaStar />;
            }
            return <FaStar />;
        }


        if (hoverIndex !== null) {
            if (index < hoverIndex) {
                return <FaStar />;
            }
            if (index === hoverIndex) {
                if (hoverPosition < 0.5) {
                    return <FaRegStarHalfStroke />;
                } else {
                    return <FaStar />;
                }
            }
        }
        return <CiStar />;
    };

    const handleSave =()=>{
        navigate('/')
    }
    return (
        <>
            <div className="CourseReview-page">
                <div className="container">
                    <h5>Congratulations, You have Completed the Course</h5>

                    <div className="review-sections">
                        <h6>Give a Feedback about Course</h6>

                        <div className="row ratingrow">
                            <div className="col-12 d-flex justify-content-center">
                                <h6>Rating:</h6>
                                <div className='stars'>
                                    {[0, 1, 2, 3, 4].map(index => (
                                        <span
                                            key={index}
                                            onMouseEnter={(e) => handleMouseEnter(index, e)}
                                            onMouseLeave={handleMouseLeave}
                                            onMouseMove={handleMouseMove}
                                            onClick={() => handleClick(index)}
                                        >
                                            {renderStarIcon(index)}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="col-12 inputgrp">
                                <h6>Write Feedback about Course:</h6>
                                <textarea name="review"  cols="3" rows="5" value={review} onChange={(e)=>setReview(e.target.value)} />
                            </div>
                            <button className={`savebtn ${rating === null || review === '' ? 'disable' :'active'}`} disabled={rating === null || review === '' ? true :false} onClick={()=>handleSave()}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
