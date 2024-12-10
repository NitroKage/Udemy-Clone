import React, { useState, useEffect, useContext } from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { CiStar, CiGlobe, CiPlay1 } from "react-icons/ci";
import { BsAward } from "react-icons/bs";
import { RiGraduationCapLine } from "react-icons/ri";
import { PiMonitorPlay } from "react-icons/pi";
import VectorImage1 from '../../../Assets/Vector-image1.png'
import reviewImage from '../../../Assets/review-image.png'
import categoryboximage from '../../../Assets/categoryboximage.png'
import instructorimage from '../../../Assets/instructorimage.png'
import courseimage from '../../../Assets/courseimage.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import facebookLogo from '../../../Assets/facebook-icon.png'
import googleLogo from '../../../Assets/google-icon.png'
import twitterLogo from '../../../Assets/twitter-icon.png'
import githubLogo from '../../../Assets/github-icon.png'
import { getTopCourseByType, getCourseDataById, getUserDataByUserId, addUserCourseInCart } from '../../../Access/actionCreator'
import { AppContext } from '../../../context/AppContext';
import CustomDateInput from '../CommonComponent/CustomDateInput';
export default function CoursePage() {

    const { LoginData,screenSize } = useContext(AppContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [courseId, setcourseId] = useState('');
    const [tabs, settabs] = useState('Description')
    const [courseInCart, setCourseInCart] = useState(false)
    const [aboutcourse, setaboutcourse] = useState({
        courseName: 'Beginner’s Guide to Design',
        aboutcourse: 'This course is meticulously crafted to provide you with a foundational understanding of the principles, methodologies, and tools that drive exceptional user experiences in the digital landscape.',
        Description: "This interactive e-learning course will introduce you to User Experience (UX) design, the art of creating products and services that are intuitive, enjoyable, and user-friendly. Gain a solid foundation in UX principles and learn to apply them in real-world scenarios through engaging modules and interactive exercises.",
        certification: 'At Byway, we understand the significance of formal recognition for your hard work and dedication to continuous learning. Upon successful completion of our courses, you will earn a prestigious certification that not only validates your expertise but also opens doors to new opportunities in your chosen field.',
        profession: 'UI/UX Designer',
        studentRevew: '',
        courseProgress: '10%',
        noOfReview: '1500',
        noofStudents: '500',
        totalcourses: '15',
        totalHours: '22',
        totalLectures: '155',
        level: 'Beginner',
        instructorName: 'Ronald Richards',
        instructorabout: 'With over a decade of industry experience, Ronald brings a wealth of practical knowledge to the classroom. He has played a pivotal role in designing user-centric interfaces for renowned tech companies, ensuring seamless and engaging user experiences.',
        languages: ['English', 'Spanish', 'Italian', ' German'],
        syllabus: [
            {
                name: 'Introduction to UX Design',
                lesson: '5',
                time: '1',
                lessonAbout: [
                    {
                        name: 'Joining The Community Chat & Groups',
                        time: '00.26'
                    },
                    {
                        name: 'Joining The Community Chat & Groups',
                        time: '00.26'
                    },
                    {
                        name: 'Joining The Community Chat & Groups',
                        time: '00.26'
                    },
                    {
                        name: 'Joining The Community Chat & Groups',
                        time: '00.26'
                    },
                    {
                        name: 'Joining The Community Chat & Groups',
                        time: '00.26'
                    },
                ]
            },
            {
                name: 'Introduction to UX Design',
                lesson: '5',
                time: '1',
                lessonAbout: [
                    {
                        name: 'Joining The Community Chat & Groups',
                        time: '00.26'
                    },
                    {
                        name: 'Joining The Community Chat & Groups',
                        time: '00.26'
                    },
                    {
                        name: 'Joining The Community Chat & Groups',
                        time: '00.26'
                    },
                    {
                        name: 'Joining The Community Chat & Groups',
                        time: '00.26'
                    },
                    {
                        name: 'Joining The Community Chat & Groups',
                        time: '00.26'
                    },
                ]
            },
        ],
        ratings: {
            'overall': '5',
            "5Star": '10',
            "4Star": '10',
            "3Star": '10',
            "2Star": '10',
            "1Star": '10',
        },
        Reviews: [
            {
                Image: instructorimage,
                name: 'Mark Doe',
                review: '5',
                Date: '22nd March, 2024',
                text: 'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.'
            },
            {
                Image: instructorimage,
                name: 'Mark Doe',
                review: '5',
                Date: '22nd March, 2024',
                text: 'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.'
            },
            {
                Image: instructorimage,
                name: 'Mark Doe',
                review: '5',
                Date: '22nd March, 2024',
                text: 'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.'
            },
        ]
    })
    const [popularcourseData, setpopularcourseData] = useState([])
    const [instructorData, setInstructorData] = useState([])

    useEffect(() => {
        if (aboutcourse && (aboutcourse?.studentRevew === '' || aboutcourse?.studentRevew === null || aboutcourse?.studentRevew === undefined) && aboutcourse?.courseProgress === '100%') {
            navigate(`/review/${aboutcourse?.courseId}`)
        }
        const courseFound = LoginData && Object.keys(LoginData)?.length > 0 ?LoginData?.coursesBought.some((value) => {
            if (value.courseId === aboutcourse.courseId) {
                navigate(`/myCourses/${aboutcourse.courseId}`);
                return true; 
            }
            return false;
        }) :'';
    }, [aboutcourse])

    useEffect(() => {
        let id = decodeURIComponent(window?.location?.pathname?.split('/course/')[1])
        setcourseId(id);
        getCourseDataById(id, (callback) => {
            if (callback && callback?.status == 'success') {
                setaboutcourse(callback?.data)
                handleCartItem(callback?.data?.courseId)
                getTopCourseByType(callback?.data?.courseSubSubCategory, (response) => {
                    if (response && response?.status == 'success') {
                        setpopularcourseData(response?.data)
                    } else {
                        setpopularcourseData([])
                    }
                })
                setInstructorData(getUserData(callback?.data?.intructorId))
            } else {
                setaboutcourse({})
            }
        })
    }, [window?.location?.href])

    // const [popularcourseData, setpopularcourseData] = useState([
    //     {
    //         courseImage: categoryboximage,
    //         courseName: 'Beginner’s Guide to Design',
    //         instructorName: 'Ronald Richards',
    //         rating: '5',
    //         noOfReview: '1200',
    //         totalHours: '22',
    //         totalLectures: '155',
    //         level: 'Beginner',
    //         cost: '149.9'
    //     },
    //     {
    //         courseImage: categoryboximage,
    //         courseName: 'Beginner’s Guide to Design',
    //         instructorName: 'Ronald Richards',
    //         rating: '4.5',
    //         noOfReview: '1200',
    //         totalHours: '22',
    //         totalLectures: '155',
    //         level: 'Beginner',
    //         cost: '149.9'
    //     },
    //     {
    //         courseImage: categoryboximage,
    //         courseName: 'Beginner’s Guide to Design',
    //         instructorName: 'Ronald Richards',
    //         rating: '5',
    //         noOfReview: '1200',
    //         totalHours: '22',
    //         totalLectures: '155',
    //         level: 'Beginner',
    //         cost: '149.9'
    //     },
    //     {
    //         courseImage: categoryboximage,
    //         courseName: 'Beginner’s Guide to Design',
    //         instructorName: 'Ronald Richards',
    //         rating: '3',
    //         noOfReview: '1200',
    //         totalHours: '22',
    //         totalLectures: '155',
    //         level: 'Beginner',
    //         cost: '149.9'
    //     },
    // ])

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

    const handletabs = (type) => {
        settabs(type);
        const section = document.getElementById(type);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const handleNavigation = (page, type) => {
        navigate(`/${page}/${type}`)
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 300)
    }

    const getUserData = (id) => {
        getUserDataByUserId(id, (callback) => {
            if (callback && callback?.status == 'success') {
                return callback?.data
            }
        })
    }

    const handleCartItem = (id,type) => {
        if(Object.keys(LoginData)?.length > 0){

            addUserCourseInCart(LoginData?._id,id, (callback) => {
                if (callback && callback?.status == 'success' && callback?.message == 'course Added') {
                setCourseInCart(true)
            }
        })
        if(type == 'buy'){
            navigate('/cart')
        }
    }else{
        navigate('/LogIn')
    }
    }

    return (
        <>
            <div className="CoursePage">
                {
                    aboutcourse && aboutcourse?.length > 0 ?
                        <>
                            {
                                screenSize === 'small' ?
                                    <div className="small-screen-banner">
                                        <div className="container">
                                            <div className="right-side-box banner-box">
                                                <div className="boxes" style={{ borderBottom: 'none' }}>

                                                    <div className="squarebox">
                                                        <img src={aboutcourse.courseImage} alt="courseimage" width={'100%'} />
                                                    </div>

                                                    <div className="banner-course">
                                                        <div className="row">
                                                            <div className="col-lg-8 col-xs-12">
                                                                <h3>{aboutcourse?.courseName || ''}</h3>
                                                                <p>{aboutcourse?.courseAbout || ''}</p>

                                                                <div className="ratings">
                                                                    <h6><span>{aboutcourse?.averageRating || '3'} &nbsp;<FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span> ({aboutcourse?.courseReviews?.length || '0'} rating). {aboutcourse?.courseData?.length || '0'} Lectures. {aboutcourse?.courseLevel || ''}</h6>
                                                                </div>
                                                                <div className="instructorinfo d-flex">
                                                                    <div className="circle">
                                                                        <img src={instructorData?.userData?.profilePhoto} alt="instructorimage" width={'100%'} />
                                                                    </div>
                                                                    <h6>Created by <Link onClick={() => handleNavigation('instructor', instructorData?.userData?._id)}>{instructorData?.userData?.firstName + ' ' + instructorData?.userData?.lastName || ''}</Link></h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h5><span className='cost'>${aboutcourse?.Price}</span> <span className='realcost'>${aboutcourse?.courseBeforeDiscountedPrice}</span> <span className='discount'>{aboutcourse?.courseDiscount}% Off</span></h5>
                                                    {
                                                        courseInCart ?
                                                            <button className='Addcart' onClick={() => handleCartItem(aboutcourse?.courseId,'')}>Add To Cart</button>
                                                            : <button className='Addcart' onClick={() => navigate('/cart')}>Go To Cart</button>
                                                    }
                                                    <button className='BuyNow' onClick={() => handleCartItem(aboutcourse?.courseId,'buy')}>Buy Now</button>
                                                </div>
                                                {/* <div className="bottombox">
                                        <h5>Share</h5>
                                        <div className="links">
                                            <a className="tab-circle" style={{ cursor: 'pointer' }}>
                                                <div className="inside-circle">
                                                    <img src={facebookLogo} alt="facebookLogo" width={'70%'} />
                                                </div>
                                            </a>
                                            <a className="tab-circle" style={{ cursor: 'pointer' }}>
                                                <div className="inside-circle">
                                                    <img src={googleLogo} alt="googleLogo" width={'70%'} />
                                                </div>
                                            </a>
                                            <a className="tab-circle" style={{ cursor: 'pointer' }}>
                                                <div className="inside-circle">
                                                    <img src={twitterLogo} alt="twitterLogo" width={'70%'} />
                                                </div>
                                            </a>
                                            <a className="tab-circle" style={{ cursor: 'pointer' }}>
                                                <div className="inside-circle">
                                                    <img src={githubLogo} alt="githubLogo" width={'70%'} />
                                                </div>
                                            </a>
                                        </div>
                                    </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="banner-course">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-8 col-xs-12">
                                                    <h3>{aboutcourse?.courseName || ''}</h3>
                                                    <p>{aboutcourse?.courseAbout || ''}</p>

                                                    <div className="ratings">
                                                        <h6><span>{aboutcourse?.averageRating || '1'} &nbsp;<FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span> ({aboutcourse?.courseReviews?.length || '0'} rating). {aboutcourse?.courseData?.length || '0'} Lectures. {aboutcourse?.courseLevel || ''}</h6>
                                                    </div>
                                                    <div className="instructorinfo d-flex">
                                                        <div className="circle">
                                                            <img src={instructorData?.userData?.profilePhoto || ''} alt="" width={'100%'} />
                                                        </div>
                                                        <h6>Created by <Link onClick={() => handleNavigation('instructor', instructorData?.userData?._id)}>{instructorData?.userData?.firstName + ' ' + instructorData?.userData?.lastName || ''}</Link></h6>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            }

                            <div className="about-course-content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8 col-xs-12">
                                            <div className="tabs d-flex">
                                                <div className={`tabs1 ${tabs === 'Description' ? 'active' : ''}`} onClick={() => handletabs('Description')}>
                                                    <h5>Description</h5>
                                                </div>
                                                <div className={`tabs1 ${tabs === 'Instructor' ? 'active' : ''}`} onClick={() => handletabs('Instructor')}>
                                                    <h5>Instructor</h5>
                                                </div>
                                                <div className={`tabs1 ${tabs === 'Syllabus' ? 'active' : ''}`} onClick={() => handletabs('Syllabus')}>
                                                    <h5>Syllabus</h5>
                                                </div>
                                                <div className={`tabs1 ${tabs === 'Reviews' ? 'active' : ''}`} onClick={() => handletabs('Reviews')}>
                                                    <h5>Reviews</h5>
                                                </div>
                                            </div>

                                            <div className="course-Description" id="Description">
                                                <h4 className='course-heading'>Course Description</h4>
                                                <p>{aboutcourse?.courseDescription || ''}</p>
                                                {/* {
                                        aboutcourse?.certification && aboutcourse?.certification !== '' ?
                                            <>
                                                <h4 className='course-heading'>Certification</h4>
                                                <p>{aboutcourse?.certification}</p>
                                            </>
                                            : ''} */}
                                            </div>
                                            <div className="course-instructor" id="Instructor">
                                                <h4 className='course-heading'>Instructor</h4>
                                                <h3 style={{ display: 'inline-block' }} onClick={() => handleNavigation('instructor', instructorDat?.userDataa?._id)}>{instructorData?.userData?.firstName + ' ' + instructorData?.userData?.lastName || ''}</h3>
                                                {/* <h5>{aboutcourse?.profession || ''}</h5> */}
                                                <div className="profile d-flex">
                                                    <div className="circle">
                                                        <img src={instructorData?.userData?.profilePhoto || ''} alt="instructorimage" width={'100%'} />
                                                    </div>
                                                    <div className="info-text">
                                                        <h5><BsAward /> &nbsp;{instructorData?.userData?.instructorReviews?.length || ''} Reviews</h5>
                                                        <h5><RiGraduationCapLine /> &nbsp;{instructorData?.TotalStudent || '0'} Students</h5>
                                                        <h5><CiPlay1 /> &nbsp;{instructorData?.totalCourses} Courses</h5>
                                                    </div>

                                                </div>

                                                <h6 className='mb-0'>{instructorData?.description}</h6>
                                            </div>
                                            <div className="course-syllabus" id="Syllabus">
                                                <h4 className='course-heading'>Syllabus</h4>

                                                <div className="syllabuses">
                                                    <div className="accordion" id="accordionExample">
                                                        {aboutcourse?.courseData && aboutcourse?.courseData?.length > 0 ?
                                                            aboutcourse?.courseData?.map((value, index) => {
                                                                return (
                                                                    <div className="accordion-item" key={index}>
                                                                        <h2 className="accordion-header">
                                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#ACCORD${index}`} aria-expanded="true" aria-controls={`ACCORD${index}`}>
                                                                                <div className='topText d-flex justify-content-between'>
                                                                                    <h5>{aboutcourse?.courseName || ''}</h5>
                                                                                    <h6>{value?.courseData?.length || ''} Lessons &nbsp;{value?.courseData?.reduce((total, chapter) => total + chapter?.videoDuration, 0) || 0} Hour</h6>
                                                                                </div>
                                                                            </button>
                                                                        </h2>
                                                                        <div id={`ACCORD${index}`} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                                                            <div className="accordion-body">

                                                                                <div className='bottomtext'>
                                                                                    <h5> <PiMonitorPlay /> {value?.chapterName || ''}</h5>
                                                                                    <h5>{value?.videoDuration || ''}</h5>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                            : ''}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        {
                                            screenSize === 'small' ? '' :
                                                <div className="col-4">
                                                    <div className="right-side-box">
                                                        <div className="boxes" style={{ borderBottom: 'none' }}>

                                                            <div className="squarebox">
                                                                <img src={aboutcourse?.courseImage} alt="courseimage" width={'100%'} />
                                                            </div>
                                                            <h5><span className='cost'>${aboutcourse?.Price}</span> <span className='realcost'>${aboutcourse?.courseBeforeDiscountedPrice}</span> <span className='discount'>{aboutcourse?.courseDiscount}% Off</span></h5>

                                                            {
                                                        courseInCart ?
                                                            <button className='Addcart' onClick={() => handleCartItem(aboutcourse?.courseId,'')}>Add To Cart</button>
                                                            : <button className='Addcart' onClick={() => navigate('/cart')}>Go To Cart</button>
                                                    }
                                                            <button className='BuyNow' onClick={() => handleCartItem(aboutcourse?.courseId,'buy')}>Buy Now</button>
                                                        </div>
                                                        {/* <div className="bottombox">
                                                <h5>Share</h5>
                                                <div className="links">
                                                    <a className="tab-circle" style={{ cursor: 'pointer' }}>
                                                        <div className="inside-circle">
                                                            <img src={facebookLogo} alt="facebookLogo" width={'70%'} />
                                                        </div>
                                                    </a>
                                                    <a className="tab-circle" style={{ cursor: 'pointer' }}>
                                                        <div className="inside-circle">
                                                            <img src={googleLogo} alt="googleLogo" width={'70%'} />
                                                        </div>
                                                    </a>
                                                    <a className="tab-circle" style={{ cursor: 'pointer' }}>
                                                        <div className="inside-circle">
                                                            <img src={twitterLogo} alt="twitterLogo" width={'70%'} />
                                                        </div>
                                                    </a>
                                                    <a className="tab-circle" style={{ cursor: 'pointer' }}>
                                                        <div className="inside-circle">
                                                            <img src={githubLogo} alt="githubLogo" width={'70%'} />
                                                        </div>
                                                    </a>
                                                </div>
                                            </div> */}
                                                    </div>
                                                </div>
                                        }

                                        <div className="col-12" id="Reviews">
                                            <div className="course-review">
                                                <h4 className='course-heading'>Learner Reviews</h4>
                                                <div className="row mt-3">
                                                    <div className="col-lg-3 col-xs-12 mt-2">
                                                        <div className="ratings2">
                                                            <h5><FaStar /> {aboutcourse?.averageRating || '1'} &nbsp;<span>{aboutcourse?.courseReviews?.length || ''} reviews</span></h5>
                                                            <div className='mt-4'>
                                                                <h6><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> &nbsp;{aboutcourse?.ratingsNumber?.star5}%</h6>
                                                                <h6><FaStar /><FaStar /><FaStar /><FaStar /><CiStar /> &nbsp;{aboutcourse?.ratingsNumber?.star4}%</h6>
                                                                <h6><FaStar /><FaStar /><FaStar /><CiStar /><CiStar /> &nbsp;{aboutcourse?.ratingsNumber?.star3}%</h6>
                                                                <h6><FaStar /><FaStar /><CiStar /><CiStar /><CiStar /> &nbsp;{aboutcourse?.ratingsNumber?.star2}%</h6>
                                                                <h6><FaStar /><CiStar /><CiStar /><CiStar /><CiStar /> &nbsp;{aboutcourse?.ratingsNumber?.star1}%</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-9 col-xs-12 mt-2">
                                                        {
                                                            aboutcourse?.courseReviews && aboutcourse?.courseReviews?.length > 0 ?
                                                                aboutcourse?.courseReviews?.map((value, index) => {
                                                                    if (index >= 3) {
                                                                        return
                                                                    } else {
                                                                        const UserData = getUserData(value?.userId)
                                                                        return (
                                                                            <div className="review-card" key={index}>
                                                                                <div className="row">
                                                                                    <div className="col-md-4 col-xs-12">
                                                                                        <div className="prof-info">
                                                                                            <div className="circle">
                                                                                                <img src={UserData?.userData?.profilePhoto || ''} alt="image" width={'100%'} />
                                                                                            </div>
                                                                                            <h5>{UserData?.userData?.firstName + ' ' + UserData?.userData?.lastName || ''}</h5>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-md-8 col-xs-12">
                                                                                        <div className="review-ingo">
                                                                                            <div className='d-flex'>
                                                                                                <h5><FaStar /> {value?.Rating || '1'}</h5>
                                                                                                <h6>Reviewed on {value?.timestamp || ''}</h6>
                                                                                            </div>
                                                                                            <p>{value?.ReviewText || ''}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    }
                                                                })
                                                                : ''}
                                                        {/* <button className='moreReview mb-3'>View more Reviews</button> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="review-section mt-0">
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
                        </> :
                        <div style={{ margin: '100px auto' }}>
                            <h4 className='text-center' style={{ fontSize: '24px' }}><i>No Course Found</i></h4>
                        </div>
                }
                {
                    popularcourseData && popularcourseData?.length > 0 ?
                        <div className="categories-section">
                            <div className="container">
                                <div className="heading-box">
                                    <h3>More Courses Like This</h3>
                                </div>

                                <div className="row mt-4 mb-5">
                                    {
                                        popularcourseData && popularcourseData?.length > 0 ?
                                            popularcourseData?.map((value, index) => {
                                                return (
                                                    <div className='col-lg-3 col-md-6 col-sm-12' key={index}>
                                                        <div className="squareboxes" style={{ cursor: 'pointer' }} onClick={() => handleNavigation("course", value?.courseId)}>
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
                                                                ({value?.courseReviews?.length} Ratings)
                                                            </div>
                                                            <h6 className='my-2'>{value?.courseData?.length} Lectures. {value?.courseLevel}</h6>
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

            </div>
        </>
    )
}
