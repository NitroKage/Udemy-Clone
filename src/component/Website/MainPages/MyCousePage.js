import React, { useState, useEffect, useContext } from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { CiStar, CiGlobe, CiPlay1 } from "react-icons/ci";
import { BsAward } from "react-icons/bs";
import { RiGraduationCapLine } from "react-icons/ri";
import videothumbnail from '../../../Assets/videothumbnail.png'
import categoryboximage from '../../../Assets/categoryboximage.png'
import instructorimage from '../../../Assets/instructorimage.png'
import courseimage from '../../../Assets/courseimage.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { IoIosVideocam } from "react-icons/io";
import { AppContext } from '../../../context/AppContext';
import { getCourseDataById } from '../../../Access/actionCreator';
export default function MyCousePage() {


    const { screenSize } = useContext(AppContext);
    let firstAccordionShown = false;
    const navigate = useNavigate();
    const location = useLocation();
    console.log("location", location)
    const [courseName, setcourseName] = useState('');
    const [tabs, settabs] = useState('Description')
    const [accordionindex, setaccordionindex] = useState();
    const [aboutcourse, setaboutcourse] = useState({
        courseName: 'Beginner’s Guide to Design',
        Overview: "Embark on a transformative journey into the dynamic world of User Experience (UX) Design with our comprehensive course, 'Introduction to User Experience Design.' This course is meticulously crafted to provide you with a foundational understanding of the principles, methodologies, and tools that drive exceptional user experiences in the digital landscape.",
        objectives: [
            'Gain a clear understanding of what User Experience (UX) Design entails and its importance in today\'s digital world.',
            'Explore the fundamental principles of user-centered design and how to apply them to create intuitive and user-friendly interfaces.',
            'Learn about the various elements that contribute to a positive user experience, including information architecture, interaction design, and visual design.'
        ],
        profession: 'UI/UX Designer',
        noOfReview: '1500',
        noofStudents: '500',
        totalcourses: '15',
        instructorName: 'Ronald Richards',
        instructorabout: 'With over a decade of industry experience, Ronald brings a wealth of practical knowledge to the classroom. He has played a pivotal role in designing user-centric interfaces for renowned tech companies, ensuring seamless and engaging user experiences.',
        syllabus: [
            {
                name: 'Introduction to UX Design',
                lesson: '5',
                time: '1',
                lessonAbout: [
                    {
                        name: 'Joining The Community Chat & Groups',
                        time: '00.26',
                        watched: true,
                        thumbnail:videothumbnail,
                    },
                    {
                        name: 'Joining The Community Chat & Groups',
                        time: '00.26',
                        watched: true,
                        thumbnail:videothumbnail,
                    },
                    {
                        name: 'Joining The Community Chat & Groups',
                        time: '00.26',
                        watched: true,
                        thumbnail:videothumbnail,
                    },
                    {
                        name: 'Joining The Community Chat & Groups',
                        time: '00.26',
                        watched: true,
                        thumbnail:videothumbnail,
                    },
                    {
                        name: 'Joining The Community Chat & Groups',
                        time: '00.26',
                        watched: true,
                        thumbnail:videothumbnail,
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
                        time: '00.26',
                        watched: true,
                        thumbnail:videothumbnail,
                    },
                    {
                        name: 'Joining The Community Chat & Groups',
                        time: '00.26',
                        watched: false,
                        thumbnail:videothumbnail,
                    },
                    {
                        name: 'Joining The Community Chat & Groups',
                        time: '00.26',
                        watched: false,
                        thumbnail:videothumbnail,
                    },
                    {
                        name: 'Joining The Community Chat & Groups',
                        time: '00.26',
                        watched: false,
                        thumbnail:videothumbnail,
                    },
                    {
                        name: 'Joining The Community Chat & Groups',
                        time: '00.26',
                        watched: true,
                        thumbnail:videothumbnail,
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
                        time: '00.26',
                        watched: true,
                        thumbnail:videothumbnail,
                    },
                    {
                        name: 'Joining The Community Chat & Groups',
                        time: '00.26',
                        watched: false,
                        thumbnail:videothumbnail,
                    },
                    {
                        name: 'Joining The Community Chat & Groups',
                        time: '00.26',
                        watched: false,
                        thumbnail:videothumbnail,
                    },
                    {
                        name: 'Joining The Community Chat & Groups',
                        time: '00.26',
                        watched: false,
                        thumbnail:videothumbnail,
                    },
                    {
                        name: 'Joining The Community Chat & Groups',
                        time: '00.26',
                        watched: true,
                        thumbnail:videothumbnail,
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
    useEffect(() => {
        const id = decodeURIComponent(window?.location?.pathname?.split('/myCourses/')[1])
        setcourseName(id);
        getCourseDataById(id,(callback)=>{
            if (callback && callback?.status == 'success') {
                setaboutcourse(callback?.data)
            }else{
                setaboutcourse({})
            }
        })
    }, [window?.location?.href])

    const [popularcourseData, setpopularcourseData] = useState([
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


    const handletabs = (type) => {
        settabs(type);
        const section = document.getElementById(type);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const handleNavigation = (page,type) => {
        navigate(`/${page}/${type}`)
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 300)
    }

    const handlecoursechapterclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const checkOpenAccordion = (array) => {
        const watchedlinks = array.some(value => value.watched === false)
        let element = document.getElementsByClassName('accordion-collapse');
        const arry = [];
        for (let i = 0; i < element.length; i++) {
            if (element[i].classList.contains('show')) {
                arry.push(element[i]);
            }
        }
        if (arry.length > 0) {
            for (let i = 0; i < arry.length; i++) {
                if (i === 0) {
                    if (!arry[i].classList.contains('show')) {
                        arry[i].classList.add('show');
                    }
                } else {
                    arry[i].classList.remove('show');
                }
            }
        }
        if (watchedlinks == true) {
            return 'show';
        } else {
            return '';
        }

    }


    const getCurrentVideoURL =(data) =>{
        const link = data && data?.length > 0 ? data?.forEach((value)=>{
            if(chapterStatus == 'completed')
        })
    }

    return (
        <>
            <div className="CoursePage MyCoursePage">
                <div className="about-course-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-xs-12">
                                <h5 className='headings'>{aboutcourse?.courseName}</h5>
                                <div className="square">
                                    <video width={"100%"} height={"100%"} controls>
                                    <source src={getCurrentVideoURL(aboutcourse?.courseData)} type="video/mp4"/>
                                    </video>
                                </div>
                                {
                                    screenSize === 'small' ?
                                        <div className="right-side-box small-screen">
                                            <div className="boxes-new">
                                                <h5>Course Completion</h5>
                                                <div className="accordion" id="accordionExample">
                                                    {aboutcourse?.syllabus && aboutcourse?.syllabus?.length > 0 ?
                                                        aboutcourse?.syllabus?.map((value, index) => {
                                                            return (
                                                                <div className="accordion-item" key={index} style={{ borderBottomLeftRadius: index == aboutcourse?.syllabus?.length - 1 ? '16px' : '0px', borderBottomRightRadius: index == aboutcourse?.syllabus?.length - 1 ? '16px' : '0px' }}>
                                                                    <h2 className="accordion-header">
                                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#ACCORD${index}`} aria-expanded="true" aria-controls={`ACCORD${index}`}>
                                                                            <div className='topText d-flex justify-content-between'>
                                                                                <h5>{value?.name || ''}</h5>
                                                                            </div>
                                                                        </button>
                                                                    </h2>
                                                                    <div id={`ACCORD${index}`} className={`accordion-collapse collapse ${checkOpenAccordion(value?.lessonAbout)}`} data-bs-parent="#accordionExample">
                                                                        <div className="accordion-body" style={{ borderBottomLeftRadius: index == aboutcourse?.syllabus?.length - 1 ? '16px' : '0px', borderBottomRightRadius: index == aboutcourse?.syllabus?.length - 1 ? '16px' : '0px' }}>
                                                                            {
                                                                                value?.lessonAbout && value?.lessonAbout?.length > 0 ?
                                                                                    value?.lessonAbout?.map((da, indexs) => {
                                                                                        return (
                                                                                            <div className='bottomtext' key={indexs} onClick={() => handlecoursechapterclick()}>
                                                                                                <div className='inputgrp'>
                                                                                                    <input type="checkbox" checked={da?.watched} />
                                                                                                    <label>{indexs + 1}. {da?.name || ''}</label>
                                                                                                </div>
                                                                                                <div className='timegrp'>
                                                                                                    <h5><span><IoIosVideocam /></span> {da?.time || ''}</h5>
                                                                                                </div>
                                                                                            </div>
                                                                                        )
                                                                                    })
                                                                                    : ''}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                        : ''}
                                                </div>
                                            </div>
                                        </div>
                                        : ''}

                                <div className="tabs d-flex">
                                    <div className={`tabs1 ${tabs === 'Description' ? 'active' : ''}`} onClick={() => handletabs('Description')}>
                                        <h5>Description</h5>
                                    </div>
                                    <div className={`tabs1 ${tabs === 'Instructor' ? 'active' : ''}`} onClick={() => handletabs('Instructor')}>
                                        <h5>Instructor</h5>
                                    </div>
                                    <div className={`tabs1 ${tabs === 'Courses' ? 'active' : ''}`} onClick={() => handletabs('Courses')}>
                                        <h5>Courses</h5>
                                    </div>
                                    <div className={`tabs1 ${tabs === 'Reviews' ? 'active' : ''}`} onClick={() => handletabs('Reviews')}>
                                        <h5>Reviews</h5>
                                    </div>
                                </div>

                                <div className="course-Description" id="Description">
                                    <h4 className='course-heading'>Course Overview</h4>
                                    <p>{aboutcourse?.Overview || ''}</p>

                                    <h4 className='course-heading'>Key Learning Objectives</h4>
                                    <ul>
                                        {
                                            aboutcourse && aboutcourse?.objectives ? aboutcourse?.objectives?.map((value, index) => {
                                                return (
                                                    <li key={index}>
                                                        <p>{value}</p>
                                                    </li>
                                                )
                                            })
                                                : ''}
                                    </ul>

                                </div>

                                <div className="course-instructor" id="Instructor">
                                    <h4 className='course-heading'>Instructor</h4>
                                    <h3 style={{display:'inline-block'}} onClick={()=>handleNavigation('instructor',aboutcourse?._id)}>{aboutcourse?.instructorName || ''}</h3>
                                    <h5>{aboutcourse?.profession || ''}</h5>
                                    <div className="profile d-flex">
                                        <div className="circle">
                                            <img src={instructorimage} alt="instructorimage" width={'100%'} />
                                        </div>
                                        <div className="info-text">
                                            <h5><BsAward /> &nbsp;{aboutcourse?.noOfReview || ''} Reviews</h5>
                                            <h5><RiGraduationCapLine /> &nbsp;{aboutcourse?.noofStudents || ''} Students</h5>
                                            <h5><CiPlay1 /> &nbsp;{aboutcourse?.totalcourses} Courses</h5>
                                        </div>

                                    </div>

                                    <h6 className='mb-0'>{aboutcourse?.instructorabout}</h6>
                                </div>

                            </div>
                            {
                                screenSize === 'small' ? '' :
                                    <div className="col-4">
                                        <div className="right-side-box">
                                            <div className="boxes-new">
                                                <h5>Course Completion</h5>
                                                <div className="accordion" id="accordionExample">
                                                    {aboutcourse?.syllabus && aboutcourse?.syllabus?.length > 0 ?
                                                        aboutcourse?.syllabus?.map((value, index) => {
                                                            return (
                                                                <div className="accordion-item" key={index} style={{ borderBottomLeftRadius: index == aboutcourse?.syllabus?.length - 1 ? '16px' : '0px', borderBottomRightRadius: index == aboutcourse?.syllabus?.length - 1 ? '16px' : '0px' }}>
                                                                    <h2 className="accordion-header">
                                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#ACCORD${index}`} aria-expanded="true" aria-controls={`ACCORD${index}`}>
                                                                            <div className='topText d-flex justify-content-between'>
                                                                                <h5>{value?.name || ''}</h5>
                                                                            </div>
                                                                        </button>
                                                                    </h2>
                                                                    <div id={`ACCORD${index}`} className={`accordion-collapse collapse ${checkOpenAccordion(value?.lessonAbout)}`} data-bs-parent="#accordionExample">
                                                                        <div className="accordion-body" style={{ borderBottomLeftRadius: index == aboutcourse?.syllabus?.length - 1 ? '16px' : '0px', borderBottomRightRadius: index == aboutcourse?.syllabus?.length - 1 ? '16px' : '0px' }}>
                                                                            {
                                                                                value?.lessonAbout && value?.lessonAbout?.length > 0 ?
                                                                                    value?.lessonAbout?.map((da, indexs) => {
                                                                                        return (
                                                                                            <div className='bottomtext' key={indexs} onClick={() => handlecoursechapterclick()}>
                                                                                                <div className='inputgrp'>
                                                                                                    <input type="checkbox" checked={da?.watched} />
                                                                                                    <label>{indexs + 1}. {da?.name || ''}</label>
                                                                                                </div>
                                                                                                <div className='timegrp'>
                                                                                                    <h5><span><IoIosVideocam /></span> {da?.time || ''}</h5>
                                                                                                </div>
                                                                                            </div>
                                                                                        )
                                                                                    })
                                                                                    : ''}
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
                            }
                        </div>
                    </div>
                </div>

                <div className="review-section mt-5" id="Courses">
                    <div className="container-lg">
                        <h3>More Courses by <span style={{ color: '#2563EB' }}>Ronald Richards</span></h3>
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
                                    items: 4,
                                    dots: false,
                                    nav: true,
                                    loop: true,
                                    autoplay: true,
                                    autoplayTimeout: 3000,
                                }
                            }
                        }>
                            {
                                popularcourseData && popularcourseData?.length > 0 ?
                                    popularcourseData?.map((value, index) => {
                                        return (
                                            <div className='cardssss' key={index} style={{ padding: '10px' }}>
                                                <div className="squareboxes" style={{ cursor: 'pointer' }} onClick={() => handleNavigation('course',value?.courseId)}>
                                                    <div className="imgs">
                                                        <img src={value?.courseImage} width={"100%"} alt="Image" />
                                                    </div>
                                                    <h4>{value?.courseName}</h4>
                                                    <h6>By {value?.instructorName}</h6>
                                                    <div className='rating'>
                                                        {value?.rating == '5' ?
                                                            <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></>
                                                            :
                                                            value?.rating == '4.5' ?
                                                                <><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></>
                                                                :
                                                                value?.rating == '4' ?
                                                                    <><FaStar /><FaStar /><FaStar /><FaStar /><CiStar /></>
                                                                    :
                                                                    value?.rating == '3.5' ?
                                                                        <><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /><CiStar /></>
                                                                        :
                                                                        value?.rating == '3' ?
                                                                            <><FaStar /><FaStar /><FaStar /><CiStar /><CiStar /></>
                                                                            : ''
                                                        }&nbsp;
                                                        ({value?.noOfReview} Ratings)
                                                    </div>
                                                    <h6 className='my-2'>{value?.totalHours} Total Hours. {value?.totalLectures} Lectures. {value?.level}</h6>
                                                    <h3>${value?.cost}</h3>
                                                </div>
                                            </div>
                                        )
                                    })
                                    : ''}

                        </OwlCarousel>
                    </div>
                </div>

                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12" id="Reviews">
                            <div className="course-review">
                                <h4 className='course-heading'>Learner Reviews</h4>
                                <div className="row mt-3">
                                    <div className="col-lg-3 col-xs-12 mt-2">
                                        <div className="ratings2">
                                            <h5><FaStar /> {aboutcourse?.ratings['overall'] || '1'} &nbsp;<span>{aboutcourse?.noOfReview || ''} reviews</span></h5>
                                            <div className='mt-4'>
                                                <h6><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> &nbsp;{aboutcourse?.ratings['5Star']}%</h6>
                                                <h6><FaStar /><FaStar /><FaStar /><FaStar /><CiStar /> &nbsp;{aboutcourse?.ratings['4Star']}%</h6>
                                                <h6><FaStar /><FaStar /><FaStar /><CiStar /><CiStar /> &nbsp;{aboutcourse?.ratings['3Star']}%</h6>
                                                <h6><FaStar /><FaStar /><CiStar /><CiStar /><CiStar /> &nbsp;{aboutcourse?.ratings['2Star']}%</h6>
                                                <h6><FaStar /><CiStar /><CiStar /><CiStar /><CiStar /> &nbsp;{aboutcourse?.ratings['1Star']}%</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-xs-12 mt-2">
                                        {
                                            aboutcourse?.Reviews && aboutcourse?.Reviews?.length > 0 ?
                                                aboutcourse?.Reviews?.map((value, index) => {
                                                    if (index >= 3) {
                                                        return
                                                    } else {
                                                        return (
                                                            <div className="review-card" key={index}>
                                                                <div className="row">
                                                                    <div className="col-md-4 col-xs-12">
                                                                        <div className="prof-info">
                                                                            <div className="circle">
                                                                                <img src={value?.Image || ''} alt="image" width={'100%'} />
                                                                            </div>
                                                                            <h5>{value?.name || ''}</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8 col-xs-12">
                                                                        <div className="review-ingo">
                                                                            <div className='d-flex'>
                                                                                <h5><FaStar /> {value?.review || '1'}</h5>
                                                                                <h6>Reviewed on {value?.Date || ''}</h6>
                                                                            </div>
                                                                            <p>{value?.text || ''}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                })
                                                : ''}
                                        <button className='moreReview mb-3'>View more Reviews</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
