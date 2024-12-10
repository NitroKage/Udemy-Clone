import React, { useState, useEffect } from 'react'
import telescopeImage from '../../../Assets/telescope-image.png'
import intructorImage from '../../../Assets/intructor-image.png'
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { getTopCategory, getTopInstructor } from '../../../Access/actionCreator';
export default function TopCategoriesInstructor() {
    const [pageType, setPageType] = useState('');
    const [topcategories, settopcategories] = useState('');
    const [topinstructor, settopinstructor] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        let urls = window?.location?.pathname?.split('/')[1]
        setPageType(urls)
        if (urls === 'categories') {
            getTopCategory((callback) => {
                if (callback?.status == 'success' && callback?.data?.length > 0) {
                    console.log(callback)
                    settopcategories(callback.data)
                } else {
                    settopcategories([])
                }
            })
        } else if (urls === 'instructor') {
            getTopInstructor((callback) => {
                console.log(callback)
                if (callback.status == 'success' && callback?.data?.length > 0) {
                    settopinstructor(callback.data)
                } else {
                    settopinstructor([])
                }
            })
        }
    }, [])

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

    return (
        <>
            <div className="Homepage-page">
                {
                    pageType === 'categories' ?
                        <div className="categories-section">
                            <div className="container">
                                <div className="heading-box">
                                    <h3>Top Categories</h3>
                                </div>

                                <div className="row mb-5">
                                    {
                                        topcategories ? topcategories.map((value, index) => {
                                            return (
                                                <div className="col-lg-3 col-md-6 col-sm-12 mt-3" key={index}>
                                                    <div className="cards" style={{ cursor: 'pointer',height:'230px' }} onClick={() => handleNavigation('Category', value?.category)}>
                                                        <div className="circle">
                                                            <img src={telescopeImage} alt={'telescopeImage'} width={'60%'} />
                                                        </div>
                                                        <h4 className="mt-2">{value?.category || ''}</h4>
                                                        <p className='mt-3'>{value?.courses && value?.courses?.length > 0 ? value?.courses?.length + ' Courses' : ''}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                            : 
                                            <div>
                                                    <h3 style={{ fontSize: '30px', textAlign: 'center', margin: '100px auto' }}><i>No Top Categories Found</i></h3>
                                                </div>}
                                </div>
                            </div>
                        </div>
                        :
                        pageType === 'instructor' ?
                            <div className="categories-section">
                                <div className="container">
                                    <div className="heading-box">
                                        <h3>Top Instructors</h3>
                                    </div>

                                    <div className="row mb-5">
                                        {
                                            topinstructor && topinstructor?.length > 0 ? topinstructor.map((value, index) => {
                                                return (
                                                    <div className="col-lg-3 col-md-6 col-sm-12 mt-3" key={index}>
                                                        <div className="cards2" style={{ cursor: 'pointer' }} onClick={() => handleNavigation('instructor', value?.firstName + ' ' + value?.lastName)}>
                                                            <div className="image-square">
                                                                <img src={value.profilePhoto} alt={value?.firstName + ' ' + value?.lastName || 'Image'} width={'100%'} />
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
                                                :
                                                <div>
                                                    <h3 style={{ fontSize: '30px', textAlign: 'center', margin: '100px auto' }}><i>No Top Instructor Found</i></h3>
                                                </div>
                                                }
                                    </div>
                                </div>
                            </div>
                            :
                            ''}
            </div>
        </>
    )
}
