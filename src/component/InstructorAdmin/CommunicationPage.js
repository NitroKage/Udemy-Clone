import React, { useState, useEffect } from 'react'
import commImage from '../../Assets/InstructorAdminImages/commImage.png'
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import Paginationfn from '../Website/CommonComponent/Pagination'
import { IoClose } from "react-icons/io5";
import MessageSectionPage from './MessageSectionPage';
export default function CommunicationPage() {
  const [selectedTab, setSelectedTab] = useState('review');
  const [ratingBox, setRatingBox] = useState('all');
  const [sortingBox, setsortingBox] = useState('newest');
  const [filteredData, setFilteredData] = useState([]);
  const [reviewValue, setReviewValue] = useState({});
  const [showpopup, setShowPopup] = useState(false);
  const [ReviewData, setReviewData] = useState([
    {
      courseName: 'Beginner course',
      rating: '2',
      image: commImage,
      name: 'JSon Bond',
      Time: '24-07-2024',
      review: 'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.',
    },
    {
      courseName: 'Beginner course',
      rating: '5',
      image: commImage,
      name: 'JSon Bond',
      Time: '24-12-2024',
      review: 'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.',
    },
    {
      courseName: 'Beginner course',
      rating: '3',
      image: commImage,
      name: 'JSon Bond',
      Time: '24-07-2024',
      review: 'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.',
    },
    {
      courseName: 'Beginner course',
      rating: '3.5',
      image: commImage,
      name: 'JSon Bond',
      Time: '24-07-2026',
      review: 'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.',
    },
  ]);

  useEffect(() => {
    setFilteredData(ReviewData);
  }, [ReviewData])

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

  const handlechange = (e, type) => {
    if (type === 'rating') {
      setRatingBox(e.target.value);

    } else if (type === 'sorting') {
      setsortingBox(e.target.value);

    }
    filterAndSortData(e, type);

  }

  const filterAndSortData = (e, type) => {
    let filtered = ReviewData;
    if (e.target.value !== '' && type !== '') {
      if (type === 'rating') {
        if (e.target.value !== 'all') {
          const ratingValue = parseFloat(e.target.value?.slice(1));
          filtered = filtered.filter(review => parseFloat(review.rating) > ratingValue);
        }
        if (e.target.value === 'all') {
          filtered = ReviewData;
        }
      }

      if (type === 'sorting') {

        if (e.target.value === 'highestRated') {
          filtered = filtered.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
        } else if (e.target.value === 'newestFirst') {
          filtered = filtered.sort((a, b) => new Date(b.Time) - new Date(a.Time));
        }
      }
    }
    setFilteredData(filtered);
  }

  const handlechangePage = () => {

  }

  const seeFullReview = (value) => {
    setReviewValue(value);
    setShowPopup(true);
  }
  const handlePopupclose = () => {
    setReviewValue({});
    setShowPopup(false);
  }
  return (
    <>

      <div className="Instructor-communication-page">

        {
          showpopup ?
            <div className='review-popup'>
              <div className="background"></div>
              <div className="Popup">
                <div className="review-section-box width-sm100 w-75">
                  <div className='d-flex justify-content-between'>
                    <h5>Rating: <span>{StarFuntion(reviewValue?.rating)}</span></h5>
                    <h5 className='h5svg'><IoClose onClick={() => handlePopupclose()} /></h5>
                  </div>
                  <div className="profile">
                    <div className="circle">
                      <img src={reviewValue?.image} alt="image" width={'100%'} />
                    </div>
                    <div>
                      <h6>{reviewValue?.name}</h6>
                      <p>{reviewValue?.Time}</p>
                    </div>
                  </div>
                  <h4>{reviewValue?.review}</h4>
                </div>
              </div>
            </div>
            : ''}


        <div className="container-fluid">
          <div className="heading">
            <h3>Communication</h3>
          </div>

          <div className="tabs">
            <div className={`tab ${selectedTab === 'review' ? 'active' : ''}`} onClick={() => setSelectedTab('review')}>
              <h5>Reviews</h5>
            </div>
            <div className={`tab ${selectedTab === 'message' ? 'active' : ''}`} onClick={() => setSelectedTab('message')}>
              <h5>Messages</h5>
            </div>
          </div>

          {
            selectedTab === 'review' ?
              <div className="reviewss mb-5">
                <div className='row mt-2'>
                  <div className="col-xl-1 col-md-2 col-xs-12 mt-2">
                    <div className="inputgrp">
                      <label>Rating</label>
                      <select name="rating" value={ratingBox} onChange={(e) => handlechange(e, 'rating')}>
                        <option value="all">All</option>
                        <option value=">4">{'> 4'}</option>
                        <option value=">3">{'> 3'}</option>
                        <option value=">2">{'> 2'}</option>
                        <option value=">1">{'> 1'}</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-3 col-xs-12 mt-2">
                    <div className="inputgrp">
                      <label>Sort By</label>
                      <select name="sorting" value={sortingBox} onChange={(e) => handlechange(e, 'sorting')}>
                        <option value="newestFirst">Newest First</option>
                        <option value="highestRated">Highest Rated</option>

                      </select>
                    </div>
                  </div>

                  <div className="col-xl-2 col-md-3 col-xs-12 d-flex align-items-end justify-content-md-end ms-auto mt-2">
                    <button className={`button2 ${filteredData?.length > 0 ? 'active' : 'disabled'}`}>Export to CSV</button>
                  </div>
                </div>

                <div className="row mt-3">
                  {
                    filteredData && filteredData?.length > 0 ?
                      filteredData?.map((value, index) => {
                        return (
                          <div className="col-12 mt-3" key={index}>
                            <div className="review-section-box" onClick={() => seeFullReview(value)}>
                              <h5>Rating: <span>{StarFuntion(value?.rating)}</span></h5>
                              <div className="profile">
                                <div className="circle">
                                  <img src={value?.image} alt="image" width={'100%'} />
                                </div>
                                <div>
                                  <h6>{value?.name}</h6>
                                  <p>{value?.Time}</p>
                                </div>
                              </div>
                              <h4 className='dont-overflow'>{value?.review}</h4>
                            </div>
                          </div>
                        )
                      })
                      : ''}
                </div>
                <Paginationfn page={1} count={Math.ceil(filteredData?.length / 10)} handlechange={handlechangePage} />
              </div>
              : ''}

          {selectedTab === 'message' ?
            <MessageSectionPage />
            : ''}
        </div>
      </div>
    </>
  )
}
