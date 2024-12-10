import React, { useState, useEffect, useLayoutEffect, useContext } from 'react'
import bannerImage from '../../../Assets/banner-image2.png'
import telescopeImage from '../../../Assets/telescope-image.png'
import intructorImage from '../../../Assets/intructor-image.png'
import VectorImage1 from '../../../Assets/Vector-image1.png'
import reviewImage from '../../../Assets/review-image.png'
import homepageImage1 from '../../../Assets/homepage-image1.png'
import homepageImage2 from '../../../Assets/homepage-image2.png'
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import categoryboximage from '../../../Assets/categoryboximage.png'
import { FaArrowRightLong } from "react-icons/fa6";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../context/AppContext';
import { getTopCategory, getTopInstructor, getTopCourseByType } from '../../../Access/actionCreator'
export default function HomePage() {

    const { LoginData } = useContext(AppContext);
    const navigate = useNavigate();
    const [topcategories, settopcategories] = useState([])
    const [topinstructor, settopinstructor] = useState([])
    const [popularcourseData, setpopularcourseData] = useState([])
    const [courseData, setcourseData] = useState([
        {
            courseImage: categoryboximage,
            courseName: 'Beginner’s Guide to Design',
            instructorName: 'Ronald Richards',
            rating: '5',
            noOfReview: '1200',
            totalHours: '22',
            totalLectures: '155',
            level: 'Beginner',
            cost: '149.9'
        },
        {
            courseImage: categoryboximage,
            courseName: 'Beginner’s Guide to Design',
            instructorName: 'Ronald Richards',
            rating: '4.5',
            noOfReview: '1200',
            totalHours: '22',
            totalLectures: '155',
            level: 'Beginner',
            cost: '149.9'
        },
        {
            courseImage: categoryboximage,
            courseName: 'Beginner’s Guide to Design',
            instructorName: 'Ronald Richards',
            rating: '5',
            noOfReview: '1200',
            totalHours: '22',
            totalLectures: '155',
            level: 'Beginner',
            cost: '149.9'
        },
        {
            courseImage: categoryboximage,
            courseName: 'Beginner’s Guide to Design',
            instructorName: 'Ronald Richards',
            rating: '3',
            noOfReview: '1200',
            totalHours: '22',
            totalLectures: '155',
            level: 'Beginner',
            cost: '149.9'
        },
    ])
    // const topcategories = [
    //     {
    //         categorylogo: telescopeImage,
    //         categoryName: "Astrology",
    //         courseUnderCategory: "11",
    //     },
    //     {
    //         categorylogo: telescopeImage,
    //         categoryName: "Development",
    //         courseUnderCategory: "13",
    //     },
    //     {
    //         categorylogo: telescopeImage,
    //         categoryName: "Marketing",
    //         courseUnderCategory: "14",
    //     },
    //     {
    //         categorylogo: telescopeImage,
    //         categoryName: "Physics",
    //         courseUnderCategory: "1",
    //     },
    // ];
    // const Intructor = [
    //     {
    //         Image: intructorImage,
    //         name: 'Ronald Richards',
    //         profession: 'UI/UX Designer',
    //         rating: '4.9',
    //         studentenrolled: '2400',
    //     },
    //     {
    //         Image: intructorImage,
    //         name: 'Ronald Richards',
    //         profession: 'UI/UX Designer',
    //         rating: '4.9',
    //         studentenrolled: '2400',
    //     },
    //     {
    //         Image: intructorImage,
    //         name: 'Ronald Richards',
    //         profession: 'UI/UX Designer',
    //         rating: '4.9',
    //         studentenrolled: '2400',
    //     },
    //     {
    //         Image: intructorImage,
    //         name: 'Ronald Richards',
    //         profession: 'UI/UX Designer',
    //         rating: '4.9',
    //         studentenrolled: '2400',
    //     },
    // ];
    const Reviews = [
        {
            Image: reviewImage,
            reviews: '"Byway\'s tech courses are top-notch! As someone who\'s always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia. ',
            name: 'Jane Doe',
            profession: 'Designer',
        },
        {
            Image: reviewImage,
            reviews: '"Byway\'s tech courses are top-notch! As someone who\'s always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia. ',
            name: 'Jane Doe',
            profession: 'Designer',
        },
        {
            Image: reviewImage,
            reviews: '"Byway\'s tech courses are top-notch! As someone who\'s always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia. ',
            name: 'Jane Doe',
            profession: 'Designer',
        },
        {
            Image: reviewImage,
            reviews: '"Byway\'s tech courses are top-notch! As someone who\'s always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia. ',
            name: 'Jane Doe',
            profession: 'Designer',
        },
        {
            Image: reviewImage,
            reviews: '"Byway\'s tech courses are top-notch! As someone who\'s always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia. ',
            name: 'Jane Doe',
            profession: 'Designer',
        },
        {
            Image: reviewImage,
            reviews: '"Byway\'s tech courses are top-notch! As someone who\'s always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia. ',
            name: 'Jane Doe',
            profession: 'Designer',
        },

    ];

    useEffect(() => {
        getTopCategory((callback) => {
            console.log(callback)
            if (callback.status == 'success' && callback?.data?.length > 0) {
                settopcategories(callback.data)
            } else {
                settopcategories([])
            }
        })
        getTopInstructor((callback) => {
            if (callback.status == 'success' && callback?.data?.length > 0) {
                settopinstructor(callback.data)
            } else {
                settopinstructor([])
            }
        })
        getTopCourseByType('all', (callback) => {
            if (callback && callback?.status === 'success' && callback?.data?.length > 0) {
                setpopularcourseData(callback?.data)
            } else {
                setpopularcourseData([])
            }
        })
    }, [])

    useLayoutEffect(() => {
        const handlecolumnBorder = () => {
            const screenWidth = window.innerWidth;
            const cols = document.querySelectorAll('.numbers-section .col-lg-3');

            cols.forEach((col, index) => {
                col.classList.remove('borderRight');
                if (screenWidth > 992 && index < 3) {
                    col.classList.add('borderRight');
                } else if (screenWidth <= 991 && screenWidth >= 767 && (index === 0 || index === 2)) {
                    col.classList.add('borderRight');
                }
            });
        };

        handlecolumnBorder();
        window.addEventListener('resize', handlecolumnBorder);
        return () => {
            window.removeEventListener('resize', handlecolumnBorder);
        };
    }, [])

    const handleNavigation = (page, type) => {
        if (type === '') {
            navigate(`/${page}`)
        } else {
            navigate(`/${page}/${type}`)
        }
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 300)
    }
    const handleInstructorbtn = () => {
        if (LoginData?.userType == 'Instructor') {
            navigate('/instructorView')
        }
        else {
            navigate('/teaching')
        }
    }
    return (
        <>
            <div className="Homepage-page">
                <div className="Homepage-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-sm-12">
                                <div className="text">
                                    <h5>Unlock Your Potential with Byway</h5>
                                    <p className='mt-3'>Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. </p>
                                    <button className={`button1 mt-3 ${LoginData?.userType == 'Student' ? 'd-none' : ''}`} onClick={() => handleInstructorbtn()}>Start your instructor journey</button>
                                </div>
                            </div>
                            <div className="col-lg-5 col-sm-12">
                                <img src={bannerImage} alt="banner-image" width={'100%'} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="numbers-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-xs-12 mt-2">
                                <div className="data">
                                    <h2>250+</h2>
                                    <h6>Courses by our best mentors</h6>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xs-12 mt-2">
                                <div className="data">
                                    <h2>1000+</h2>
                                    <h6>Courses by our best mentors</h6>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xs-12 mt-2">
                                <div className="data">
                                    <h2>15+</h2>
                                    <h6>Courses by our best mentors</h6>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xs-12 mt-2">
                                <div className="data">
                                    <h2>2400+</h2>
                                    <h6>Courses by our best mentors</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    topcategories && topcategories?.length > 0 ?
                        <div className="categories-section">
                            <div className="container">
                                <div className="heading-box">
                                    <h3>Top Categories</h3>
                                    <h6 onClick={() => handleNavigation('categories', '')}>See All</h6>
                                </div>

                                <div className="row">
                                    {
                                        topcategories && topcategories?.length > 0 ? topcategories.map((value, index) => {
                                            if (index > 3) {
                                                return
                                            }
                                            return (
                                                <div className="col-lg-3 col-md-6 col-sm-12 mt-3" key={index}>
                                                    <div className="cards" style={{ cursor: 'pointer',height:'230px' }} onClick={() => handleNavigation('Category', value?.category)}>
                                                        <div className="circle">
                                                            <img src={telescopeImage} alt={telescopeImage} width={'60%'} />
                                                        </div>
                                                        <h4 className="mt-2">{value?.category || ''}</h4>
                                                        <p className='mt-3'>{value?.courses && value?.courses?.length > 0 ? value?.courses?.length + ' Courses' : ''}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                            : ""}
                                </div>
                            </div>
                        </div>
                        : ''}

                {
                    popularcourseData && popularcourseData?.length > 0 ?
                        <div className="categories-section">
                            <div className="container">
                                <div className="heading-box">
                                    <h3>Top Courses</h3>
                                    <h6 onClick={() => handleNavigation('Category', 'All')}>See All</h6>
                                </div>

                                <div className="row">
                                    {
                                        popularcourseData && popularcourseData?.length > 0 ?
                                            popularcourseData?.map((value, index) => {
                                                return (
                                                    <div className="col-lg-3 col-md-6 col-xs-12 mt-4" key={index}>
                                                        <div className="squareboxes" style={{ cursor: 'pointer' }} onClick={() => handleNavigation('course', value?.courseId)}>
                                                            <div className="imgs">
                                                                <img src={value?.courseImage} width={"100%"} alt="Image" />
                                                            </div>
                                                            <h4>{value?.courseName}</h4>
                                                            <h6>By {value?.instructorId?.firstName + ' ' + value?.instructorId?.lastName}</h6>
                                                            <div className='rating'>
                                                                {value?.averageRating == '5' ?
                                                                    <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></>
                                                                    :
                                                                    value?.averageRating == '4.5' ?
                                                                        <><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></>
                                                                        :
                                                                        value?.averageRating == '4' ?
                                                                            <><FaStar /><FaStar /><FaStar /><FaStar /><CiStar /></>
                                                                            :
                                                                            value?.averageRating == '3.5' ?
                                                                                <><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /><CiStar /></>
                                                                                :

                                                                                <><FaStar /><FaStar /><FaStar /><CiStar /><CiStar /></>

                                                                }&nbsp;
                                                                ({value?.courseReviews?.length || 0} Ratings)
                                                            </div>
                                                            <h6 className='my-2'>{value?.courseData?.length || 1} Lectures. {value?.courseLevel}</h6>
                                                            <h3>${value?.Price}</h3>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            : ''}
                                </div>
                            </div>
                        </div>
                        : ''}
                {
                    topinstructor && topinstructor?.length > 0 ?
                        <div className="categories-section">
                            <div className="container">
                                <div className="heading-box">
                                    <h3>Top Instructors</h3>
                                    <h6 onClick={() => handleNavigation('instructor', '')}>See All</h6>
                                </div>

                                <div className="row">
                                    {
                                        topinstructor && topinstructor?.length > 0 ? topinstructor.map((value, index) => {
                                            return (
                                                <div className="col-lg-3 col-md-6 col-sm-12 mt-3" key={index}>
                                                    <div className="cards2" style={{ cursor: 'pointer' }} onClick={() => handleNavigation('instructor', value?._id)}>
                                                        <div className="image-square">
                                                            <img src={value.profilePhoto} alt={'Image'} width={'100%'} />
                                                        </div>
                                                        <div className="texts">
                                                            <h4>{value?.firstName + ' ' + value?.lastName}</h4>
                                                            {/* <h6>{value.profession}</h6> */}
                                                        </div>
                                                        <hr />
                                                        <div className="rate d-flex justify-content-between">
                                                            <div className="ratings d-flex">
                                                                <span><FaStar /></span>&nbsp;
                                                                <h6>{value.averageRating}</h6>
                                                            </div>
                                                            <div className="students">
                                                                <h6>{value.totalCoursesSold} Students</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                            : ""}
                                </div>
                            </div>
                        </div>
                        : ''}

                <div className="review-section">
                    <div className="container-lg">
                        <h3>What Our Customer Say <br />About Us</h3>
                        <OwlCarousel className='owl-theme' loop dots={false} responsiveClass={true} responsive={
                            {
                                0: {
                                    items: 1,
                                    dots: false,
                                    nav: true,
                                    loop: true,
                                    autoplay: true,
                                    autoplayTimeout: 3000,
                                },
                                600: {
                                    items: 2,
                                    dots: false,
                                    nav: true,
                                    loop: true,
                                    autoplay: true,
                                    autoplayTimeout: 3000,
                                },
                                1000: {
                                    items: 3,
                                    dots: false,
                                    nav: true,
                                    loop: true,
                                    autoplay: true,
                                    autoplayTimeout: 3000,
                                }
                            }
                        }>
                            {
                                Reviews && Reviews.length > 0 ? Reviews?.map((value, index) => {
                                    return (
                                        <div className="cards">
                                            <div className="subcard">
                                                <div className="imgs">
                                                    <img src={VectorImage1} alt="Image" />
                                                </div>
                                                <h5>{value?.reviews}</h5>
                                                <div className="reviewBy">
                                                    <div className="circle">
                                                        <img src={reviewImage} alt={value?.name} width={'100%'} />
                                                    </div>
                                                    <div className="subtext">
                                                        <h6>{value?.name}</h6>
                                                        <p>{value?.profession}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                    : ''}

                        </OwlCarousel>
                    </div>
                </div>

                <div className="BecomeInstructor">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div className="imgs text-center">
                                    <img src={homepageImage1} alt="Image1" width={'70%'} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="text">
                                    <h4>Become an Instructor</h4>
                                    <h6>Instructors from around the world teach millions of students on Byway. We provide the tools and skills to teach what you love.</h6>
                                    <button className={`buttonInside ${LoginData?.userType == 'Student' ? 'd-none' : ''}`} onClick={() => handleInstructorbtn()}>Start Your Instructor Journey &nbsp;<FaArrowRightLong /></button>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12" id="cols1">
                                <div className="text">
                                    <h4>Transform your life through education</h4>
                                    <h6>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</h6>
                                    <button className='buttonInside' onClick={() => handleNavigation('Category', 'All')}>Checkout Courses &nbsp;<FaArrowRightLong /></button>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12" id="cols2">
                                <div className="imgs text-center">
                                    <img src={homepageImage2} alt="Image2" width={'80%'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
