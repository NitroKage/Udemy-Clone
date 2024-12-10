import React, { useState, useEffect, useContext } from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { AppContext } from '../../../context/AppContext';
import instructorimage from '../../../Assets/instructorimage.png'
import ProfileImage from '../../../Assets/ProfileImage.png'
import categoryboximage from '../../../Assets/categoryboximage.png'
import { useNavigate } from 'react-router-dom';
export default function MentorPage() {
    const { screenSize } = useContext(AppContext);
    const navigate = useNavigate();

    const [TeacherName, setTeacherName] = useState('')

    useEffect(() => {
        setTeacherName(decodeURIComponent(window?.location?.pathname?.split('/instructor/')[1]));
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

    const [aboutTeacher, setaboutTeacher] = useState({
        ProfileImage: ProfileImage,
        Profession: 'Web developer, UX/UI Designer, and Teacher',
        About: 'Ronald Richard is a highly skilled UX/UI Designer with over a decade of experience in crafting user-centric digital solutions. With a background in graphic design and a keen eye for detail, Ronald specializes in creating intuitive interfaces that delight users and drive business results.',
        AreaOfExpertise: [
            'User Experience (UX) Design',
            'User Interface (UI) Design',
            'Information Architecture',
            'Interaction Design',
            'Visual Design',
            'Usability Testing',
            'Wireframing and Prototyping',
            'Design Thinking',
        ],
        ProfessionalExperience: 'Ronald Richard has an extensive professional background in UX/UI design, having worked with renowned companies such as [Company Name] and [Company Name]. His portfolio includes a diverse range of projects spanning web applications, mobile apps, and e-commerce platforms.',
        noOfReview: '1500',
        totalStudents: '1000',
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
        ],
        Links: {
            Website: 'wjej',
            Twitter: 'bdbew',
            Facebook: 'facebook.com',
            Youtube: 'gvhjbk',
            Instagram: 'eckue',
        }

    })

    const handleNavigation = (type) => {
        navigate(`/course/${type}`)
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 300)
    }
    return (
        <>
            <div className="CoursePage MentorPage">
                <div className="Instructor-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-xs-12">
                            {
                                screenSize === 'small' ? 
                                <div className="Profile small-screen">
                                    <div className="circle">
                                        <img src={aboutTeacher?.ProfileImage || ''} alt={TeacherName} width={'100%'} />
                                    </div>
                                    <div className='linkss mt-4'>
                                        {
                                            aboutTeacher && Object.entries(aboutTeacher?.Links).map((value, index) => {
                                                return (
                                                    <a href={value[1]} target="_blank" className='aButton'>{value[0]}</a>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
:''}
                                <div className="info mt-5">
                                    <div className="heads">
                                        <h6>Instructor</h6>
                                        <h4>{TeacherName || ''}</h4>
                                        <h6>{aboutTeacher?.Profession || ''}</h6>

                                        <div className="block">
                                            <div className="subblock">
                                                <h6>Total Students</h6>
                                                <h5>{aboutTeacher?.totalStudents || 0}</h5>
                                            </div>
                                            <div className="subblock">
                                                <h6>Reviews</h6>
                                                <h5>{aboutTeacher?.noOfReview || 0}</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="more-info">
                                        <h4>{`About ${TeacherName}` || ''}</h4>
                                        <h6>{aboutTeacher?.About}</h6>
                                        <h4>Areas of Expertise</h4>
                                        <ul>
                                            {aboutTeacher && aboutTeacher?.AreaOfExpertise?.length > 0 ?
                                                aboutTeacher?.AreaOfExpertise?.map((value, index) => {
                                                    return (
                                                        <li key={index}><h6>{value}</h6></li>
                                                    )
                                                })
                                                : ''}
                                        </ul>
                                        <h4>Professional Experience</h4>
                                        <h6>{aboutTeacher?.ProfessionalExperience || ''}</h6>
                                    </div>
                                </div>
                            </div>
                            {
                                screenSize === 'small' ? '' :
                                    <div className="col-4">
                                        <div className="Profile">
                                            <div className="circle">
                                                <img src={aboutTeacher?.ProfileImage || ''} alt={TeacherName} width={'100%'} />
                                            </div>
                                            <div className='linkss mt-4'>
                                                {
                                                    aboutTeacher && Object.entries(aboutTeacher?.Links).map((value, index) => {
                                                        return (
                                                            <a href={value[1]} target="_blank" className='aButton'>{value[0]}</a>
                                                        )
                                                    })
                                                }
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
                                                <div className="squareboxes" style={{ cursor: 'pointer' }} onClick={() => handleNavigation(value?.courseName)}>
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
                                            <h5><FaStar /> {aboutTeacher?.ratings['overall'] || '1'} &nbsp;<span>{aboutTeacher?.noOfReview || ''} reviews</span></h5>
                                            <div className='mt-4'>
                                                <h6><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> &nbsp;{aboutTeacher?.ratings['5Star']}%</h6>
                                                <h6><FaStar /><FaStar /><FaStar /><FaStar /><CiStar /> &nbsp;{aboutTeacher?.ratings['4Star']}%</h6>
                                                <h6><FaStar /><FaStar /><FaStar /><CiStar /><CiStar /> &nbsp;{aboutTeacher?.ratings['3Star']}%</h6>
                                                <h6><FaStar /><FaStar /><CiStar /><CiStar /><CiStar /> &nbsp;{aboutTeacher?.ratings['2Star']}%</h6>
                                                <h6><FaStar /><CiStar /><CiStar /><CiStar /><CiStar /> &nbsp;{aboutTeacher?.ratings['1Star']}%</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-xs-12 mt-2">
                                        {
                                            aboutTeacher?.Reviews && aboutTeacher?.Reviews?.length > 0 ?
                                                aboutTeacher?.Reviews?.map((value, index) => {
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
