import React, { useState , useLayoutEffect } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import AddCourse from './AddCourse';
import ChapterDetails from './ChapterDetails';
import CommissionSubPage from './CommissionSubPage';
import CustomerSubPage from './CustomerSubPage';
import ReviewSubPage from './ReviewSubPage';
export default function CoursesPageMain() {

    const [pageView, setPageView] = useState('allCourses');
    const [screenwidth ,setscreenWidth] =useState('');
    const [courseData, setcourseData] = useState({})
    const [selectedTab, setSelectedTab] = useState('commission')
    const [chapterEdit ,setchapterEdit] =useState(false);
    const [chapterEditType ,setchapterEditType] =useState('');
    const [chapterEditData ,setchapterEditData] =useState('');
    const courses = [
        {
            Price: 'Free',
            courseName: 'Beginner’s Guide to Design',
            chapters: '13',
            orders: '25',
            certificate: '25',
            reviews: '25',
            addedToShelf: '500'
        },
        {
            Price: 'Free',
            courseName: 'Beginner’s Guide to Design',
            chapters: '13',
            orders: '25',
            certificate: '25',
            reviews: '25',
            addedToShelf: '500'
        },
        {
            Price: 'Free',
            courseName: 'Beginner’s Guide to Design',
            chapters: '13',
            orders: '25',
            certificate: '25',
            reviews: '25',
            addedToShelf: '500'
        },
    ]


    useLayoutEffect(()=>{
        setscreenWidth(window.innerWidth);
    },[])

    const handleCourseClick = (data) => {
        setPageView('courseView')
        setcourseData(data)
    }

    const handleBack = (type) => {
        if(type == 'Courseshow'){
            setSelectedTab('commission')
            setPageView('allCourses');
            setcourseData({});
            handleViewchapter('back')
        }else if(type =='Aboutcourseshow'){
            setSelectedTab('chapter')
            setPageView('courseView');
            handleViewchapter('back')

        }
    }

    const handleViewchapter = (type)=>{
if(type == 'view'){
    setchapterEdit(true)
}else if('back'){
    setchapterEdit(false)
    setchapterEditType('')
}
    }

    const TabSelected = (type)=>{
setSelectedTab(type)
handleViewchapter('back')
    }

    const handlecreatecourse =(type,data) =>{
    setchapterEdit(true)
        setchapterEditType(type)
        setchapterEditData(data)
    }
    return (
        <>
            <div className="Instructor-Courses-page">
                {
                    chapterEdit == false ?              
                <div className="container-fluid">
                    <div className="heading d-flex justify-content-between flex-wrap">
                        <div className='d-flex align-self-center'>
                            {
                                pageView === 'allCourses' ? '' :
                                    <IoIosArrowBack onClick={() => handleBack('Courseshow')} />
                            }
                            <h3 className=''>{pageView === 'allCourses' ? 'Courses' : pageView === 'courseView' && Object.keys(courseData)?.length > 0 ? courseData?.courseName : ''}</h3>
                        </div>
                        {
                            pageView === 'allCourses' ?
                                <button className='button2 active' onClick={()=>handlecreatecourse('Addcourse','')}>Add Courses</button>
                                : ""}
                        {
                            pageView === 'courseView' && selectedTab === 'chapter' && chapterEdit == false ?
                                <button className='button2 active' onClick={()=>handlecreatecourse('addchapters','')}>Add Chapter</button>
                                : ""}
                    </div>

                    {
                        pageView === 'allCourses' ?
                            <div className="Reviews">
                                <div className="row">
                                    {
                                        courses && courses?.length > 0 ?
                                            courses?.map((value, index) => {
                                                return (
                                                    <div className="col-lg-4 col-md-6 col-xs-12" key={index}>
                                                        <div className="courseBox hoverableBox" onClick={() => handleCourseClick(value)}>
                                                            <h5>{value?.Price}</h5>
                                                            <h4>{value?.courseName}</h4>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-lg-4 col-sm-6">
                                                                    <div className="sub-box">
                                                                        <h6>{value?.Price}</h6>
                                                                        <p>Price</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-sm-6">
                                                                    <div className="sub-box">
                                                                        <h6>{value?.chapters}</h6>
                                                                        <p>Chapters</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-sm-6">
                                                                    <div className="sub-box">
                                                                        <h6>{value?.orders}</h6>
                                                                        <p>Orders</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-sm-6">
                                                                    <div className="sub-box">
                                                                        <h6>{value?.certificate}</h6>
                                                                        <p>Certificates</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-sm-6">
                                                                    <div className="sub-box">
                                                                        <h6>{value?.reviews}</h6>
                                                                        <p>Reviews</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-sm-6">
                                                                    <div className="sub-box">
                                                                        <h6>{value?.addedToShelf}</h6>
                                                                        <p>Added To Shelf</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            : ''}
                                </div>
                            </div>
                            : ''}

                    {
                        pageView === 'courseView' ?
                            <>
                                <div className="tabs">
                                    <div className={`tab ${selectedTab === 'commission' ? 'active' : ''}`} onClick={() => TabSelected('commission')}>
                                        <h5>Commission</h5>
                                    </div>
                                    <div className={`tab ${selectedTab === 'reviews' ? 'active' : ''}`} onClick={() => TabSelected('reviews')}>
                                        <h5>Reviews</h5>
                                    </div>
                                    <div className={`tab ${selectedTab === 'customer' ? 'active' : ''}`} onClick={() => TabSelected('customer')}>
                                        <h5>Customers</h5>
                                    </div>
                                    <div className={`tab ${selectedTab === 'chapter' ? 'active' : ''}`} onClick={() => TabSelected('chapter')}>
                                        <h5>Chapters</h5>
                                    </div>
                                </div>

                                <div className="courseSelectedTab">
                                    {
                                        selectedTab === 'commission' ?
                                        <CommissionSubPage courseData={courseData} screenwidth={screenwidth}/>
                                        :''
                                    }
                                    {
                                        selectedTab === 'reviews' ?
                                        <ReviewSubPage courseData={courseData} screenwidth={screenwidth}/>
                                        :''
                                    }
                                    {
                                        selectedTab === 'customer' ?
                                        <CustomerSubPage courseData={courseData} screenwidth={screenwidth}/>
                                        :''
                                    }
                                    {
                                        selectedTab === 'chapter' ?
                                        <ChapterDetails courseData={courseData} screenwidth={screenwidth} handleViewchapter={handleViewchapter} handlecreatecourse={handlecreatecourse}/>
                                        :''
                                    }
                                </div>
                            </>
                            : ''
                    }
                </div>
:
<AddCourse pageViewValue = {chapterEditType} handleBack={handleBack} chapterEditData={chapterEditData}/>
}
            </div>
        </>
    )
}
