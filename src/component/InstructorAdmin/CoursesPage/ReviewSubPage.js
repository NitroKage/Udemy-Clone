import React,{useState} from 'react'
import commImage from '../../../Assets/InstructorAdminImages/commImage.png'
import Paginationfn from '../../Website/CommonComponent/Pagination'
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
export default function ReviewSubPage({courseData}) {
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
            <div className="review-sub-page">
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
                    <div className="Reviews">
                        <div className="row">
                            <div className="col-xl-2 col-lg-3 col-md-4 col-xs-12">
                                <div className="reviewBox">
                                    <h5>Total Review</h5>
                                    <h3>1000</h3>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-xs-12">
                                <div className="reviewBox">
                                    <h5>1 Star Reviews</h5>
                                    <div className='d-flex'>
                                        <h3 className='me-2'>1000</h3>
                                        <h6 style={{ backgroundColor: 'red' }}>1.0</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-xs-12">
                                <div className="reviewBox">
                                    <h5>2 Star Reviews</h5>
                                    <div className='d-flex'>
                                        <h3 className='me-2'>1000</h3>
                                        <h6 style={{ backgroundColor: '#CA8A04' }}>2.0</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-xs-12">
                                <div className="reviewBox">
                                    <h5>3 Star Reviews</h5>
                                    <div className='d-flex'>
                                        <h3 className='me-2'>1000</h3>
                                        <h6 style={{ backgroundColor: '#FACC15' }}>3.0</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-xs-12">
                                <div className="reviewBox">
                                    <h5>4 Star Reviews</h5>
                                    <div className='d-flex'>
                                        <h3 className='me-2'>1000</h3>
                                        <h6 style={{ backgroundColor: '#4ADE80' }}>4.0</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-xs-12">
                                <div className="reviewBox">
                                    <h5>5 Star Reviews</h5>
                                    <div className='d-flex'>
                                        <h3 className='me-2'>1000</h3>
                                        <h6 style={{ backgroundColor: '#16A34A' }}>5.0</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        {
                            ReviewData && ReviewData?.length > 0 ?
                                ReviewData?.map((value, index) => {
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
                    <Paginationfn page={1} count={Math.ceil(ReviewData?.length / 10)} handlechange={handlechangePage} />

                </div>
            </div>
        </>
    )
}
