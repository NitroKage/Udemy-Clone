import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import logo from '../../../Assets/header-logo.png'
import '../../../css/Navbar.scss'
import { CiSearch } from "react-icons/ci";
import { IoCartOutline, IoMenu, IoClose } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { UserLogout, getCartList, getCourseCategory,getSearchCategory } from '../../../Access/actionCreator';
const Navbar = ({ login, screenSize, LoginData, setLoginData }) => {
    let navRef = useRef(null);
    let searchRef = useRef(null);
    let categoryRef = useRef(null);
    let cartRef = useRef(null);
    let ProfileRef = useRef(null);
    let navigate = useNavigate();
    const [SearchValue, setSearchValue] = useState('');
    const [searchPopup, setsearchPopup] = useState(false);
    const [categoryPopup, setcategoryPopup] = useState(false);
    const [subcategoryPopup, setsubcategoryPopup] = useState(false);
    const [subcategoryPopupData, setsubcategoryPopupData] = useState(false);
    const [ShowSearchBarPage, setShowSearchBarPage] = useState(false);
    const [currentCategory, setcurrentCategory] = useState(null);
    const [currentSubcategory, setcurrentSubcategory] = useState(null);
    const [leftSideMenuBar, setleftSideMenuBar] = useState(false);
    const [leftSideSubMenuBar, setleftSideSubMenuBar] = useState(false);
    const [leftSideSubMenuBarvalue, setleftSideSubMenuBarvalue] = useState(null);
    const [leftSideSubMenuBarType, setleftSideSubMenuBarType] = useState('');
    const [leftSideSubMenuBarType2, setleftSideSubMenuBarType2] = useState(null);
    const [categoryData, setcategoryData] = useState([])
    // const [categoryData, setcategoryData] = useState({
    //     'All category': {
    //         'Development': {
    //             'Web development': [
    //                 'javascript',
    //                 'HTML',
    //                 'CSS',
    //                 'React js',
    //                 'Angular'
    //             ],
    //             'Data Science': [
    //                 'Machine Learning',
    //                 'Deep Learning',
    //                 'Python',
    //             ]
    //         },
    //         'Finance & Accounting': {
    //             'Accounting & BookKeeping': [
    //                 'Accounting',
    //                 'Bookkeeping',
    //             ],
    //         }
    //     },
    //     'popularcategory': {
    //         'Web development': [
    //             'Web Development',
    //             'js',
    //             'Reactjs',
    //             'Angular'
    //         ],
    //         'Mobile Development': [
    //             'Flutter',
    //             'ios',
    //             'Android'
    //         ]
    //     }
    // })
    const [searchData, setsearchData] = useState([]);
    // const [searchData, setsearchData] = useState({
    //     SearchFields: [{
    //         searchfield: 'Web '
    //     },
    //     {
    //         searchfield: 'Web development'
    //     },
    //     {
    //         searchfield: 'Web desgin'
    //     },
    //     ],

    //     suggestedCourses: [
    //         {
    //             image: '',
    //             heading: 'The complete 2024 web developemnt coursr',
    //             author: 'cole steele',
    //         }
    //     ]
    // });
    const [cartData, setcartData] = useState([{
        image: '',
        heading: 'The complete 2024 web developemnt coursr',
        author: 'cole steele',
    },
    {
        image: '',
        heading: 'The complete 2024 web developemnt coursr',
        author: 'cole steele',
    },
    ]);
    const [cartPopup, setcartPopup] = useState(false);
    const [ProfilePopup, setProfilePopup] = useState(false);



    useEffect(() => {
        if(LoginData && Object.keys(LoginData).includes('_id')){
            getCartData()
        }
        getCourseCategoryfn()
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setsearchPopup(false);
            }
            if (categoryRef.current && !categoryRef.current.contains(event.target)) {
                setcategoryPopup(false);
            }
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setcartPopup(false);
            }
            if (ProfileRef.current && !ProfileRef.current.contains(event.target)) {
                setProfilePopup(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const getCourseCategoryfn=()=>{
        getCourseCategory((callback)=>{
            if(callback.status === 'success' && callback.data?.length > 0){
                setcategoryData(callback.data)
            }else{
                setcategoryData([])
            }
        })
    }

    window.scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };
    function scrollToSection(sectionId) {

        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSearchchange = (e) => {
        setSearchValue(e.target.value);
        if (e.target.value?.length < 2) {
            setsearchPopup(false);
        }
        else if (e.target.value?.length > 2) {
            setTimeout(()=>{
                getSearchCategory(e.target.value,(callback)=>{
                    if(callback?.status == 'success' && callback?.data?.length > 0){
                        setsearchPopup(true);
                        setsearchData(callback?.data)
                    }
                })
            },800)
        }
    }

    const handleMenuBarClose = () => {
        let element = document.getElementById('menu-animation');
        element?.classList.add('sideNav-right-left-animation');
        setTimeout(() => {
            setleftSideMenuBar(false);
            setleftSideSubMenuBar(false);
            element?.classList.remove('sideNav-right-left-animation');
        }, 400);
    };

    const handlemenuBarTabs = (value) => {
        setleftSideSubMenuBarType(value)
        setleftSideSubMenuBar(true);
    }

    const handleBack = (type) => {
        if (type == 'majorcategory') {
            setleftSideSubMenuBarvalue(null)
            setleftSideSubMenuBar(false);
            setleftSideSubMenuBarType(null)

        }
        if (type == 'majorsubcategory') {
            setleftSideSubMenuBarType('Allcategories')
            setleftSideSubMenuBarType2(null)

        }
    }

    const handleAllcategoryTabs = (value) => {
        setleftSideSubMenuBarType2(value)
    }

    const handleLogout = () => {
        const userId = LoginData?._id
        UserLogout(userId, (callback) => {
            if (callback?.status == "success") {
                handleMenuBarClose()
                navigate('/')
                setLoginData({});
                window.sessionStorage.removeItem('accessToken');
                window.sessionStorage.removeItem('LoginData');
            }
        })
    }

    const handleSearchbtn = () => {
        if (SearchValue !== '' && SearchValue !== undefined && SearchValue !== null) {
            setShowSearchBarPage(false)
            navigate(`/Category/${SearchValue}`)
            setSearchValue('')
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearchbtn()
        }
    }

    const getCartData = () => {
        getCartList(LoginData._id, (callback) => {
            if (callback.status === 'success' && callback?.data?.length > 0) {
                setcartData(callback?.data)
            }else{
                setcartData([])
            }
        })
    }


    return (
        <>

            {
                screenSize === 'small' ?
                    ShowSearchBarPage === false ?
                        <>
                            <nav ref={navRef} className="navbar screensize-small">
                                <div className="container">
                                    <div className="menu-bar" onClick={() => setleftSideMenuBar(true)}>
                                        <IoMenu />
                                    </div>
                                    <Link className="navbar-brand me-0" to={{ pathname: "/" }} onClick={scrollToTop}>
                                        <img src={logo} alt="Logo" width="83" height="auto" />
                                    </Link>
                                    <div className="btns">
                                        <Link href="#" className="me-4 pt-2 pb-2" onClick={() => setShowSearchBarPage(true)}>
                                            <CiSearch className='searchbtn' />
                                        </Link>
                                        <Link to={{ pathname: '/cart' }} className="btncart  pt-2 pb-2">
                                            <IoCartOutline />
                                            {
                                                login ?
                                                    cartData?.coursesList?.length > 0 ?
                                                        <span className='span1'>{cartData?.coursesList?.length}</span>
                                                        : ''
                                                    : ''}
                                        </Link>
                                    </div>
                                </div>
                            </nav>
                            {
                                leftSideMenuBar ?
                                    <div className="side-menu-bar">
                                        <div className="background-grey" onClick={() => handleMenuBarClose()}></div>
                                        <div className={`menu-bar d-flex ${leftSideMenuBar ? 'sideNav-left-right-animation' : ''}`} id="menu-animation" >
                                            <div className='menu-tabss'>
                                                {
                                                    !leftSideSubMenuBar ?
                                                        <div className="menu-tabs" id="menu_tabs_first">
                                                            <div className="top-links">
                                                                <ul>
                                                                    {
                                                                        login ?
                                                                            <>
                                                                                <Link className='d-flex mt-3' onClick={() => handleMenuBarClose()} style={{ alignItems: 'center', textDecoration: 'none' }} to={{ pathname: `/profile/${LoginData?.name}/profile` }}>
                                                                                    <button className='profileicon me-2 p-0' style={{ backgroundColor: LoginData?.backgroundColor }}>
                                                                                        {
                                                                                            LoginData?.profilePhoto !== '' && LoginData?.profilePhoto !== null && LoginData?.profilePhoto !== undefined ?
                                                                                                <img src={LoginData?.profilePhoto} width={'100%'} style={{ width: '35px', height: '35px', borderRadius: '50%' }} />
                                                                                                : ""}
                                                                                    </button>
                                                                                    <h5 className='mb-0'>{LoginData?.firstName + ' ' + LoginData?.lastName || ''}</h5>
                                                                                </Link>
                                                                                {
                                                                                    LoginData?.userType == 'instructor' ?
                                                                                        <li>
                                                                                            <Link className="nav-link " to={{ pathname: '/instructorView' }} onClick={scrollToTop}>Switch to Instructor</Link>
                                                                                        </li>
                                                                                        : ''
                                                                                }
                                                                            </>
                                                                            :
                                                                            <>
                                                                                <li>
                                                                                    <Link to={{ pathname: '/LogIn' }} onClick={() => handleMenuBarClose()}>Log in</Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link to={{ pathname: '/signIn' }} onClick={() => handleMenuBarClose()}>Sign Up</Link>
                                                                                </li>
                                                                            </>}
                                                                    {/* <li>
                                                                        <Link>Plans & Pricing</Link>
                                                                    </li> */}

                                                                </ul>
                                                            </div>
                                                            <div className="mid-links">
                                                                <ul>
                                                                    <li className='headinglink'>All Categories</li>
                                                                            {
                                                                                categoryData && categoryData?.length > 0 ?
                                                                                categoryData.map((category, index) => (
                                                                                    <div key={category._id}>
                                                                                      <li className='category'>{category.category}</li>
                                                                              
                                                                                      {category.subcategories && category.subcategories.length > 0 ? (
                                                                                        <ul>
                                                                                          {category.subcategories.map((subcategory, subIndex) => (
                                                                                            <li key={subcategory._id} className='subcategory'>
                                                                                              {subcategory.subcategory}
                                                                                            </li>
                                                                                          ))}
                                                                                        </ul>
                                                                                      ) : (
                                                                                        ''
                                                                                      )}
                                                                                    </div>
                                                                                  ))
                                                                            :''}
                                                                   
                                                                </ul>
                                                            </div>

                                                            <div className="bottom-links">
                                                                <ul>
                                                                    <li className='headinglink'>More from Byway</li>
                                                                    {/* <li>
                                                                        <Link>Byway Business</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link>Invite Friends</Link>
                                                                    </li> */}
                                                                    <li>
                                                                        <Link to={{ pathname: '/contactus' }} onClick={() => handleMenuBarClose()}>Help</Link>
                                                                    </li>
                                                                    {
                                                                        login ?
                                                                            <li>
                                                                                <Link onClick={() => handleLogout()} className="d-flex justify-content-between">
                                                                                    <h5 style={{ fontSize: '16px' }}>Log Out</h5>
                                                                                    <h5> <IoIosArrowForward /></h5>

                                                                                </Link>
                                                                            </li>
                                                                            : ''}

                                                                </ul>
                                                            </div>
                                                        </div>
                                                        :


                                                   ''
                                                }
                                            </div>

                                            <div className="cross-icon ms-4 mt-3" onClick={() => handleMenuBarClose()}>
                                                <IoClose />
                                            </div>
                                        </div>
                                    </div>
                                    : ''}
                        </>
                        :
                        <div className='Small-screen-SearchBarShow'>
                            <div className="inputgrp">
                                <span className='search-span' onClick={() => handleSearchbtn()}><CiSearch /></span>
                                <input type="text" placeholder='Search For Anything' onChange={(e) => handleSearchchange(e)} onKeyDown={(e) => handleKeyDown(e)} value={SearchValue} />
                                <span className='close-span' onClick={() => setShowSearchBarPage(false)}><IoClose /></span>
                            </div>
                            {
                                searchPopup ?

                                    <div className="searchResult-sub">
                                        {searchData?.map((value, index) => {
                                            return (
                                                <div className="textResult" key={index} onClick={() => navigate(`/Category/${value}`)}>
                                                    <div className='searchlogo'><CiSearch /></div>
                                                    <h5>{value}</h5>
                                                </div>
                                            )
                                        })}
                                        {/* {
                                            searchData.suggestedCourses?.map((value, index) => {
                                                return (
                                                    <div className="courseResult" key={index} onClick={() => navigate(`/course/${value?.heading}`)}>
                                                        <div className="square">
                                                            <img src={value?.image} alt="courselogo" />
                                                        </div>
                                                        <div className="text">
                                                            <h4>{value?.heading}</h4>
                                                            <h6><span>Course</span>{value?.author}</h6>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        } */}
                                    </div>

                                    : ''}
                        </div>
                    : ''}

            {
                screenSize === 'large' ?
                    <nav ref={navRef} className="navbar navbar-expand-lg ">
                        <div className="container">
                            <Link className="navbar-brand me-4" to={{ pathname: "/" }} onClick={scrollToTop}>
                                <img src={logo} alt="Logo" width="83" height="auto" />
                            </Link>
                            <div className="collapse navbar-collapse">
                                <div className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex w-100">
                                    <div className='category-navbar'>
                                        <Link className="nav-link ps-0 me-2" onClick={() => setcategoryPopup(true)} onMouseEnter={() => setcategoryPopup(true)}>Categories</Link>
                                        {
                                            console.log("categoryData",categoryData)
                                        }
                                        {
                                            categoryPopup ?
                                                <div className="category-popups d-flex" onMouseEnter={() => setcategoryPopup(true)} onMouseLeave={() => { setcategoryPopup(false); setcurrentCategory(null); setcurrentSubcategory(null); }} ref={categoryRef}>
                                                    <div className="card1" >
                                                        {categoryPopup && categoryData.map((category, index) => (
                                                            <div className="block1" onMouseEnter={() => {
                                                                setsubcategoryPopup(true);
                                                                setcurrentCategory(category.subcategories);
                                                                setcurrentSubcategory(null);
                                                            }} onClick={() => {
                                                                setcategoryPopup(false);
                                                                setcurrentCategory(null);
                                                                navigate(`/Category/${category.category}`, { state: category.category })
                                                            }} key={index}>
                                                                <h5>{category.category}</h5>
                                                                <span><IoIosArrowForward /></span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    {subcategoryPopup && currentCategory && (
                                                        <div className={`card1 ${subcategoryPopup ? '' : 'd-none'}`} >
                                                            {currentCategory && currentCategory?.length > 0 ? currentCategory.map((subcategory, index) => (
                                                                <div className="block1" onMouseEnter={() => {
                                                                    setsubcategoryPopupData(true);
                                                                    setcurrentSubcategory(subcategory.subsubcategories);
                                                                }} onClick={() => {

                                                                    setcurrentSubcategory(null);
                                                                    setcategoryPopup(false);
                                                                    setcurrentCategory(null);
                                                                    navigate(`/Category/${subcategory.subcategory}`, { state: subcategory.subcategory })
                                                                }} key={index}>
                                                                    <h5>{subcategory.subcategory}</h5>
                                                                    <span><IoIosArrowForward /></span>
                                                                </div>
                                                            )):''}
                                                        </div>
                                                    )}
                                                    {subcategoryPopupData && currentSubcategory && (
                                                        <div className={`card1 ${subcategoryPopupData ? '' : 'd-none'}`}>
                                                            {currentSubcategory && currentSubcategory?.length > 0 ? currentSubcategory.map((item, index) => (
                                                                <div className="block1" key={index} onClick={() => {
                                                                    navigate(`/Category/${item}`, { state: item }); setcurrentSubcategory(null);
                                                                    setcategoryPopup(false);
                                                                    setcurrentCategory(null);
                                                                }}>
                                                                    <h5>{item}</h5>
                                                                </div>
                                                            )):''}
                                                        </div>

                                                    )}
                                                </div>
                                                : ''}
                                    </div>
                                    <div className="SearchBar" ref={searchRef}>
                                        <div className="input-grp">
                                            <div className='searchlogo' onClick={() => handleSearchbtn()}><CiSearch /></div>
                                            <input className="form-control inputTag " type="search" placeholder="Search Courses" aria-label="Search" onChange={(e) => handleSearchchange(e)} onKeyDown={(e) => handleKeyDown(e)} value={SearchValue} />
                                        </div>
                                        {
                                            searchPopup ?
                                                <div className={`SearchResults ${searchPopup ? 'active' : ''}`}>
                                                    <div className="searchResult-sub">
                                                        {searchData.map((value, index) => {
                                                            return (
                                                                <div className="textResult" key={index} onClick={() => navigate(`/Category/${value}`)}>
                                                                    <div className='searchlogo'><CiSearch /></div>
                                                                    <h5>{value}</h5>
                                                                </div>
                                                            )
                                                        })}
                                                        {/* {
                                                            searchData.suggestedCourses?.map((value, index) => {
                                                                return (
                                                                    <div className="courseResult" key={index} onClick={() => navigate(`/course/${value?.heading}`)}>
                                                                        <div className="square">
                                                                            <img src={value?.image} alt="courselogo" />
                                                                        </div>
                                                                        <div className="text">
                                                                            <h4>{value?.heading}</h4>
                                                                            <h6><span>Course</span>{value?.author}</h6>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        } */}
                                                    </div>
                                                </div>
                                                : ''}
                                    </div>
                                    {
                                        // LoginData?.UserType =='Student'
                                        login ? '' :
                                            <Link className="nav-link " to={{ pathname: '/teaching' }} onClick={scrollToTop}>Teach on Byway</Link>
                                    }
                                    {
                                        LoginData?.userType == 'instructor' ?
                                            <Link className="nav-link " to={{ pathname: '/instructorView' }} onClick={scrollToTop}>Switch to Instructor</Link>
                                            : ''
                                    }

                                </div>
                            </div>
                            <div className="btns">
                                <Link to={{ pathname: '/cart' }} className="btncart  pt-2 pb-2" onMouseEnter={() => setcartPopup(true)} ref={cartRef}>
                                    <IoCartOutline />
                                    {
                                        login ?
                                        cartData?.coursesList?.length > 0?
                                            <span className='span1'>{cartData?.coursesList?.length}</span>
                                            :''
                                            : ''}
                                    <div className={`cart-box ${cartPopup === true ? cartData?.coursesList?.length > 0 ? 'padding-change' : '' : 'd-none'}`} onMouseEnter={() => setcartPopup(true)} onMouseLeave={() => setcartPopup(false)}>
                                        {
                                            cartData?.coursesList?.length > 0 ?
                                                <>
                                                    {
                                                        cartData?.coursesList?.map((value, index) => {
                                                            return (
                                                                <>
                                                                    <div className="cartData" key={index}>
                                                                        <div className="imgs-square">
                                                                            <img src={value.courseImage} alt="course-logo" />
                                                                        </div>
                                                                        <div className="text">
                                                                            <h4>{value.courseName}</h4>
                                                                            <h6><span>Course</span>{value.instructor.firstName + ' ' + value.instructor.lastName}</h6>
                                                                        </div>
                                                                    </div>
                                                                    <hr className='my-0' />
                                                                </>
                                                            )
                                                        })
                                                    }

                                                    <div className="total">
                                                        <h5>Total: ₹{cartData?.orderDetails.NetPayableAmount} &nbsp;<span>₹{cartData.orderDetails.totalPrice}</span></h5>
                                                        <button className='cartbtn mt-2' onClick={() => navigate('/cart')}>Go To Cart</button>
                                                    </div>
                                                </>
                                                :

                                                <div className='emptycart text-center'>
                                                    <h4>Your Cart is Empty</h4>
                                                    <Link to={{ pathname: '/Category/All' }}>Keep Shopping</Link>
                                                </div>
                                        }
                                    </div>
                                </Link>
                                {
                                    login ?
                                        <Link className="profiless" to={{ pathname: `/profile/${LoginData?.firstName + LoginData?.lastName}/profile` }} onMouseEnter={() => setProfilePopup(true)} ref={ProfileRef}>
                                            <button className='profileicon' style={{ backgroundColor: LoginData?.backgroundColor }}>
                                                <h5 className='mb-0' style={{ color: '#fff' }}>{LoginData?.firstName?.charAt(0)}</h5>
                                            </button>
                                            <div className={`Profile-box ${ProfilePopup === true ? '' : 'd-none'}`}>
                                                <Link className='btnProfile' to={{ pathname: `/profile/${LoginData?.firstName + LoginData?.lastName}/profile` }} onClick={() => setProfilePopup(false)}>{LoginData?.firstName + ' ' + LoginData?.lastName}</Link>
                                                {
                                                    LoginData?.userType === 'Instructor' ?
                                                        <Link className='btnProfile' to={{ pathname: `/instructorView` }} onClick={() => setProfilePopup(false)}>Instructor Dashboard</Link>
                                                        : ''
                                                }
                                                <Link className='btnProfile' to={{ pathname: `/profile/${LoginData?.firstName + LoginData?.lastName}/MyCourses` }} onClick={() => setProfilePopup(false)}>My Courses</Link>
                                                <Link className='btnProfile' to={{ pathname: `/profile/${LoginData?.firstName + LoginData?.lastName}/Teachers` }} onClick={() => setProfilePopup(false)}>Teachers</Link>
                                                <Link className='btnProfile' to={{ pathname: `/profile/${LoginData?.firstName + LoginData?.lastName}/Messages` }} onClick={() => setProfilePopup(false)}>Messages</Link>
                                                <Link className='btnProfile' to={{ pathname: `/profile/${LoginData?.firstName + LoginData?.lastName}/MyReviews` }} onClick={() => setProfilePopup(false)}>My Reviews</Link>
                                                <Link onClick={() => handleLogout()} className="btnProfile d-flex justify-content-between" style={{ alignItems: 'baseline' }}>
                                                    <h5 className='mb-0' style={{ fontSize: '16px' }}>Log Out</h5>
                                                    <h5> <IoIosArrowForward /></h5>
                                                </Link>
                                            </div>
                                        </Link>
                                        :
                                        <>
                                            <Link className="btn1" to={{ pathname: '/LogIn' }}>
                                                Log In
                                            </Link>
                                            <Link className="btn2" to={{ pathname: '/signIn' }}>
                                                Sign Up
                                            </Link>
                                        </>}
                            </div>
                        </div>
                    </nav>
                    : ''}



        </>
    )
}

export default Navbar;

