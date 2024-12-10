import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { IoFilterSharp, IoClose } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import categoryboximage from '../../../Assets/categoryboximage.png'
import intructorImage from '../../../Assets/intructor-image.png'
import Paginationfn from '../CommonComponent/Pagination';
import { AppContext } from '../../../context/AppContext';
import { getTopInstructor,getCategoryFilter,getCourseByFilter,getTopCourseByType,addUserCourseInCart } from '../../../Access/actionCreator';
const CategoryPage = () => {
    const { screenSize } = useContext(AppContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [sortingbox, setsortingBox] = useState('newest')
    const [filterwidth, setfilterwidth] = useState('300')
    const [Filtershow, setFiltershow] = useState(screenSize === 'small' ? false : true)
    const [categoryType, setcategoryType] = useState('')
    const [totalCourse, setTotalCourse] = useState('');
    const [FilterNumber, setFilterNumber] = useState({});
    const [selectedRating, setSelectedRating] = useState('');
    const [selectedTopics, setSelectedTopics] = useState([]);
    const [selectedLevels, setSelectedLevels] = useState([]);
    const [selectedPrices, setSelectedPrices] = useState('');
    const [topinstructor, settopinstructor] = useState([])
    const [categoryData, setcategoryData] = useState([])

    const [courseData, setcourseData] = useState([])
    // const [courseData, setcourseData] = useState([
    //     {
    //         courseImage: categoryboximage,
    //         courseName: 'Beginner’s Guide to Design',
    //         aboutcourse:'This course is meticulously crafted to provide you with a foundational understanding of the principles, methodologies, and tools that drive exceptional user experiences in the digital landscape.',
    //         instructorName: 'Ronald Richards',
    //         rating: '5',
    //         noOfReview: '1200',
    //         totalHours: '22',
    //         totalLectures: '155',
    //         level: 'Beginner',
    //         cost: '149.9',
    //         languages:['English', 'Spanish', 'Italian',' German']
    //     },
    //     {
    //         courseImage: categoryboximage,
    //         courseName: 'Beginner’s Guide to Design',
    //         aboutcourse:'This course is meticulously crafted to provide you with a foundational understanding of the principles, methodologies, and tools that drive exceptional user experiences in the digital landscape.',
    //         instructorName: 'Ronald Richards',
    //         rating: '4.5',
    //         noOfReview: '1200',
    //         totalHours: '22',
    //         totalLectures: '155',
    //         level: 'Beginner',
    //         cost: '149.9',
    //         languages:['English', 'Spanish', 'Italian',' German']
    //     },
    //     {
    //         courseImage: categoryboximage,
    //         courseName: 'Beginner’s Guide to Design',
    //         aboutcourse:'This course is meticulously crafted to provide you with a foundational understanding of the principles, methodologies, and tools that drive exceptional user experiences in the digital landscape.',
    //         instructorName: 'Ronald Richards',
    //         rating: '5',
    //         noOfReview: '1200',
    //         totalHours: '22',
    //         totalLectures: '155',
    //         level: 'Beginner',
    //         cost: '149.9',
    //         languages:['English', 'Spanish', 'Italian',' German']
    //     },
    //     {
    //         courseImage: categoryboximage,
    //         courseName: 'Beginner’s Guide to Design',
    //         aboutcourse:'This course is meticulously crafted to provide you with a foundational understanding of the principles, methodologies, and tools that drive exceptional user experiences in the digital landscape.',
    //         instructorName: 'Ronald Richards',
    //         rating: '3',
    //         noOfReview: '1200',
    //         totalHours: '22',
    //         totalLectures: '155',
    //         level: 'Beginner',
    //         cost: '149.9',
    //         languages:['English', 'Spanish', 'Italian',' German']
    //     },
    // ])
    const [popularcourseData, setpopularcourseData] = useState([])
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

    const Intructor = [
        {
            Image: intructorImage,
            name: 'Ronald Richards',
            profession: 'UI/UX Designer',
            rating: '4.9',
            studentenrolled: '2400',
        },
        {
            Image: intructorImage,
            name: 'Ronald Richards',
            profession: 'UI/UX Designer',
            rating: '4.9',
            studentenrolled: '2400',
        },
        {
            Image: intructorImage,
            name: 'Ronald Richards',
            profession: 'UI/UX Designer',
            rating: '4.9',
            studentenrolled: '2400',
        },
        {
            Image: intructorImage,
            name: 'Ronald Richards',
            profession: 'UI/UX Designer',
            rating: '4.9',
            studentenrolled: '2400',
        },
    ];


    // const getCheckboxes = (categoryType, categoryData) => {
    //     const allCategories = categoryData['All category'];

    //     if (allCategories.hasOwnProperty(categoryType)) {
    //         const mainCategory = allCategories[categoryType];
    //         const allTopics = [];

    //         for (const subCategory in mainCategory) {
    //             allTopics.push(...mainCategory[subCategory]);
    //         }

    //         return allTopics;
    //     }
    //     for (const mainCategory in allCategories) {
    //         for (const subCategory in allCategories[mainCategory]) {
    //             if (subCategory === categoryType) {
    //                 return allCategories[mainCategory][subCategory];
    //             }
    //         }
    //     }

    //     return [];
    // }
    // const checkboxes = getCheckboxes(categoryType, categoryData);

    useEffect(() => {
        const categorytypes = decodeURIComponent(window?.location?.pathname?.split('/Category/')[1]);
        setcategoryType(categorytypes);
        if(screenSize === 'small'){
            setFiltershow(false)
        }
        getTopInstructor((callback) => {
            if (callback.status == 'success' && callback?.data?.length > 0) {
                settopinstructor(callback.data)
            } else {
                settopinstructor([])
            }
        })
        getCategoryFilter(categorytypes,(callback)=>{
            if(callback && callback?.status === 'success' && callback?.data?.length > 0){
                setcategoryData(callback?.data)
            }else{
                setcategoryData([])
            }
        })
        getTopCourseByType('all',(callback)=>{
            if(callback && callback?.status === 'success' && callback?.data?.length > 0){
                setpopularcourseData(callback?.data)
            }else{
                setpopularcourseData([])
            }
        })

        const obj = {
            rating:'',
            topic:[categorytypes],
            level:[],
            prices:''
        }
        courseByFilterAPI(obj)
    }, [window?.location?.href])


    const handleFilterSelection = (type, value) => {
        if (type === 'Ratings') {
            setSelectedRating(value);
        } else if (type === 'Topic') {
            setSelectedTopics((prev) =>
                prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
            );
        } else if (type === 'Level') {
            setSelectedLevels((prev) =>
                prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
            );
        } else if (type === 'Price') {
            setSelectedPrices(value);
        }
    };
    
    useEffect(()=>{
        console.log(selectedLevels,selectedPrices,selectedRating,selectedTopics)
        if(selectedLevels?.length > 0 || selectedPrices !== '' || selectedRating !== '' || selectedTopics?.length > 0){
            const obj = {
                rating:selectedRating,
                topic:selectedTopics && selectedTopics?.length > 0 ? selectedTopics : [],
                level:selectedLevels && selectedLevels?.length > 0 ? selectedLevels : [],
                prices:selectedPrices
            }
            courseByFilterAPI(obj)
        }else{
            const obj = {
                rating:'',
                topic:[],
                level:[],
                prices:''
            }
            courseByFilterAPI(obj)

        }

    },[selectedLevels,selectedPrices,selectedRating,selectedTopics])
    

    const courseByFilterAPI = (obj)=>{
        obj.topic.push(categoryType)
        getCourseByFilter(obj,(callback)=>{
            if (callback && callback?.status === 'success'){
                setTotalCourse(callback?.data?.totalCourses || 0)
                setFilterNumber(callback?.data?.filterNumber)
                if(sortingbox === 'newest'){
                    setcourseData(callback?.data?.data)
                }
                else if(sortingbox === 'popular'){
                    const sortedByPopular = callback?.data?.data?.sort((a, b) => b.noofcourseSold - a.noofcourseSold);
                    setcourseData(sortedByPopular)
                }
                else if(sortingbox === 'rated'){
                    const sortedByRated = callback?.data?.data?.sort((a, b) => b.averageRating - a.averageRating);
                    setcourseData(sortedByRated)
                }
            }else{
                setcourseData([])
            }
        })

    }

    const clearFilter = () => {
        setSelectedRating('');
        setSelectedTopics([]);
        setSelectedLevels([]);
        setSelectedPrices('');
        setsortingBox('newest');
    }

    const handleFilter = () => {
        if (screenSize !== 'small') {
            let LeftElement = document.getElementById('categoryElementLeft')
            let RightElement = document.getElementById('categoryElementRight')
            if (Filtershow == true) {
                LeftElement?.classList.remove('category-filter-left-right-animation');
                LeftElement?.classList.add('category-filter-right-left-animation');
                setTimeout(() => {
                    setFiltershow(false)
                    setfilterwidth(0)
                    LeftElement?.classList.add('d-none');
                }, 300);

            } else {
                LeftElement?.classList.remove('category-filter-right-left-animation');
                LeftElement?.classList.add('category-filter-left-right-animation');
                setTimeout(() => {
                    setFiltershow(true)
                    setfilterwidth('300')
                    LeftElement?.classList.remove('d-none');
                }, 400);
            }
        } else {
            setFiltershow(!Filtershow)
        }

    }


    const handleMenuBarClose = () => {
        let element = document.getElementById('menu-animation');
        element?.classList.add('side-Nav-right-left-animation');
        setTimeout(() => {
            setFiltershow(false);
            element?.classList.remove('side-Nav-right-left-animation');
        }, 400);
    };

    const handleChange = (e, value) => {

    }

    const handleNavigation = (page,type)=>{
        let pagetype = page
        if(page == 'course'){
            addUserCourseInCart(LoginData?._id,id, (callback) => {
                if (callback && callback?.status == 'success' && (callback?.message == 'course already bought' || callback?.message == 'course already in cart')) {
                    pagetype = ''
            }
        })
        }
        navigate(`/${pagetype}/${type}`)
        setTimeout(()=>{
window.scrollTo({top:0,behavior:'smooth'})
        },300)
    }

    const SplitingFunction =(text)=>{
const arr = text.split('and')
return arr[0] + ' & ' + arr[1];
    }

    const handleSort = (e)=>{
        setsortingBox(e.target.value)
    }

    return (
        <>
            <div className="CategoryPage">
                <div className="container">
                    <div className="heading">
                        <h2>{categoryType !== '' ? categoryType.includes('and')? SplitingFunction(categoryType) + ' Courses' : categoryType + ' Courses' : ''}</h2>
                    </div>
                    {
                                        courseData && courseData?.length > 0 ?
                    <div className="filters">
                        <div className='d-flex'>
                            <div className="filterbox me-3" onClick={() => handleFilter()}>
                                <h5><IoFilterSharp /> &nbsp; Filter</h5>
                            </div>
                            {(selectedRating !== '' && selectedRating !== null && selectedRating !== undefined) ||
                                selectedTopics?.length > 0 || (selectedPrices !== '' && selectedPrices !== null && selectedPrices !== undefined) || selectedLevels?.length > 0
                                ?
                                <div className="filterbox me-3" onClick={() => clearFilter()}>
                                    <h5>Clear Filter</h5>
                                </div>
                                : ''}
                        </div>

                        <div className="sortingbox">
                            <h5>Sort By</h5>
                            <select className='selectbox' onChange={(e) =>handleSort(e)}>
                                <option value="newest">Newest</option>
                                <option value="popular">Most Popular</option>
                                <option value="rated">Highest Rated</option>
                            </select>
                        </div>
                    </div>
                    :
                    <div style={{margin:'100px auto'}}>
                        <h5 className='text-center' style={{fontSize:'24px'}}><i>No Courses Found</i></h5>
                    </div>
                    }

{
                                        courseData && courseData?.length > 0 ?
                    <div className="coursesFilters">
                        <div className="row d-flex">
                            {screenSize === 'small' ?
                                Filtershow === true ?
                                    <div className="category-side-bar">
                                        <div className="background-grey" onClick={() => handleMenuBarClose()}></div>
                                        <div className={`menu-item d-flex ${Filtershow === true ? 'side-Nav-left-right-animation' : ''}`} id="menu-animation">
                                            <div className="menu-filters">

                                                <LeftFilters categoryData={categoryData}
                                                handleFilterSelection={handleFilterSelection}
                                                    selectedRating={selectedRating}
                                                    selectedTopics={selectedTopics}
                                                    selectedLevels={selectedLevels}
                                                    selectedPrices={selectedPrices} 
                                                    FilterNumber={FilterNumber}/>

                                                <button className='buttonApply'>Apply Filter</button>

                                            </div>
                                            <div className="cross-icon ms-4 mt-3" onClick={() => handleMenuBarClose()}>
                                                <IoClose />
                                            </div>
                                        </div>
                                    </div>
                                    : ''
                                :
                                <div className="category-left" id="categoryElementLeft" style={{ width: filterwidth + 'px' }}>
                                    <LeftFilters categoryData={categoryData}
                                        handleFilterSelection={handleFilterSelection}
                                        selectedRating={selectedRating}
                                        selectedTopics={selectedTopics}
                                        selectedLevels={selectedLevels}
                                        selectedPrices={selectedPrices}
                                        FilterNumber={FilterNumber} />
                                </div>
                            }
                            <div className="category-right" style={{ width: screenSize === 'small' ? '100%' : `calc(100% - ${filterwidth}px)` }}>
                                <div className="row">
                                    {
                                        courseData && courseData?.length > 0 ?
                                            courseData?.map((value, index) => {
                                                return (
                                                    <div className={`${Filtershow == true ? 'col-xl-4 col-lg-6 col-md-6 col-sm-12' : 'col-lg-4 col-md-6 col-sm-12'} mt-4`} key={index}>
                                                        <div className="squareboxes" onClick={()=>handleNavigation('course',value?.courseId)} style={{cursor:'pointer'}}>
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
                                <Paginationfn page={1} count={totalCourse}/>
                            </div>
                        </div>
                    </div>
                    :''}

                </div>
                {
                    topinstructor && topinstructor?.length > 0 ?
                <div className="categories-section popularmentors">
                    <div className="container">
                        <div className="heading-box">
                            <h3>Popular Mentors</h3>
                        </div>

                        <div className="row">
                            {
                                topinstructor ? topinstructor.map((value, index) => {
                                    return (
                                        <div className="col-lg-3 col-md-6 col-sm-12 mt-3" key={index}>
                                            <div className="cards2" style={{cursor:'pointer'}} onClick={()=>handleNavigation('instructor', value?._id)}>
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
                :''}
                {
                    popularcourseData && popularcourseData?.length > 0 ?
                <div className="categories-section">
                    <div className="container">
                        <div className="heading-box">
                            <h3>Featured Courses</h3>
                        </div>

                        <div className="row mt-4 mb-5">
                            {
                                popularcourseData && popularcourseData?.length > 0 ?
                                    popularcourseData?.map((value, index) => {
                                        return (
                                            <div className='col-lg-3 col-md-6 col-sm-12' key={index}>
                                                <div className="squareboxes" style={{cursor:'pointer'}} onClick={()=>handleNavigation('course',value?.courseId)}>
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
                :''}
            </div>
        </>
    )
}

export default CategoryPage;


function LeftFilters({ categoryData, handleFilterSelection, selectedRating, selectedTopics, selectedLevels, selectedPrices,FilterNumber }) {
    console.log("FilterNumber",FilterNumber)
    return (
        <>
            <div className="filtersLeft">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#Ratings" aria-expanded="true" aria-controls="Ratings">
                                Ratings
                            </button>
                        </h2>
                        <div id="Ratings" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="input-grps-radio">
                                    <input type="radio" id="4.5star" className='input-tag' checked={selectedRating === '4.5'} onChange={() => handleFilterSelection('Ratings', '4.5')} />
                                    <label htmlFor='4.5star' className='input-label'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaRegStarHalfStroke />&nbsp;
                                        <h6>4.5 & up ({FilterNumber?.rating?.up45})</h6>
                                    </label>
                                </div>
                                <div className="input-grps-radio">
                                    <input type="radio" id="4star" className='input-tag' checked={selectedRating === '4.0'} onChange={() => handleFilterSelection('Ratings', '4.0')} />
                                    <label htmlFor='4star' className='input-label'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <CiStar />&nbsp;
                                        <h6>4.0 & up ({FilterNumber?.rating?.up40})</h6>
                                    </label>
                                </div>
                                <div className="input-grps-radio">
                                    <input type="radio" id="3.5star" className='input-tag' checked={selectedRating === '3.5'} onChange={() => handleFilterSelection('Ratings', '3.5')} />
                                    <label htmlFor='3.5star' className='input-label'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaRegStarHalfStroke />
                                        <CiStar />&nbsp;
                                        <h6>3.5 & up ({FilterNumber?.rating?.up35})</h6>
                                    </label>
                                </div>
                                <div className="input-grps-radio">
                                    <input type="radio" id="3star" className='input-tag' checked={selectedRating === '3.0'} onChange={() => handleFilterSelection('Ratings', '3.0')} />
                                    <label htmlFor='3star' className='input-label'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <CiStar />
                                        <CiStar />&nbsp;
                                        <h6>3.0 & up ({FilterNumber?.rating?.up30})</h6>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        categoryData && categoryData?.length > 0 ?
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#Topic" aria-expanded="true" aria-controls="Topic">
                                        Topic
                                    </button>
                                </h2>
                                <div id="Topic" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        {categoryData.map((topic, index) => (
                                            <div className="input-grps-checkbox" key={index}>
                                                <input type="checkbox" id={topic} className='input-tag' checked={selectedTopics.includes(topic)} onChange={() => handleFilterSelection('Topic', topic)} />
                                                <label htmlFor={topic} className='input-label'>
                                                    {topic}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            : ""}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#Level" aria-expanded="true" aria-controls="Level">
                                Level
                            </button>
                        </h2>
                        <div id="Level" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="input-grps-checkbox">
                                    <input type="checkbox" id="AllLevel" className='input-tag' checked={selectedLevels.includes('All Levels')} onChange={() => handleFilterSelection('Level', 'All Levels')} />
                                    <label htmlFor="AllLevel" className='input-label'>
                                        All Levels ({FilterNumber?.level?.AllLevels})
                                    </label>
                                </div>
                                <div className="input-grps-checkbox">
                                    <input type="checkbox" id="Beginner" className='input-tag' checked={selectedLevels.includes('Beginner')} onChange={() => handleFilterSelection('Level', 'Beginner')} />
                                    <label htmlFor="Beginner" className='input-label'>
                                        Beginner ({FilterNumber?.level?.Beginner})
                                    </label>
                                </div>
                                <div className="input-grps-checkbox">
                                    <input type="checkbox" id="Intermediate" className='input-tag' checked={selectedLevels.includes('Intermediate')} onChange={() => handleFilterSelection('Level', 'Intermediate')} />
                                    <label htmlFor="Intermediate" className='input-label'>
                                        Intermediate ({FilterNumber?.level?.Intermediate})
                                    </label>
                                </div>
                                <div className="input-grps-checkbox">
                                    <input type="checkbox" id="Expert" className='input-tag' checked={selectedLevels.includes('Expert')} onChange={() => handleFilterSelection('Level', 'Expert')} />
                                    <label htmlFor="Expert" className='input-label'>
                                        Expert ({FilterNumber?.level?.Expert})
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#Price" aria-expanded="true" aria-controls="Price">
                                Price
                            </button>
                        </h2>
                        <div id="Price" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="input-grps-checkbox">
                                    <input type="radio" id="Paid" className='input-tag' checked={selectedPrices === 'Paid'} onChange={() => handleFilterSelection('Price', 'Paid')} />
                                    <label htmlFor="Paid" className='input-label'>
                                        Paid ({FilterNumber?.price?.Paid})
                                    </label>
                                </div>
                                <div className="input-grps-checkbox">
                                    <input type="radio" id="Free" className='input-tag' checked={selectedPrices === 'Free'} onChange={() => handleFilterSelection('Price', 'Free')} />
                                    <label htmlFor="Free" className='input-label'>
                                        Free ({FilterNumber?.price?.Free})
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
