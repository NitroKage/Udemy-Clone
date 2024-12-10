import React, { useState, useLayoutEffect, useEffect ,useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import bywaylogo from '../../Assets/byway-logo.png';
import bywaylogo2 from '../../Assets/footer-logo.png';
import dashboardSelected from '../../Assets/InstructorAdminImages/dashboardSelected.png';
import dashboard from '../../Assets/InstructorAdminImages/dashboard.png';
import closeicon from '../../Assets/InstructorAdminImages/back.png';
import course from '../../Assets/InstructorAdminImages/course.png';
import courseSelected from '../../Assets/InstructorAdminImages/courseSelected.png';
import communicationSelected from '../../Assets/InstructorAdminImages/communicationSelected.png';
import communication from '../../Assets/InstructorAdminImages/communication.png';
import revenueSelected from '../../Assets/InstructorAdminImages/revenueSelected.png';
import revenue from '../../Assets/InstructorAdminImages/revenue.png';
import { IoMenu } from "react-icons/io5";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { AppContext } from '../../context/AppContext';
import DashboardPage from './DashboardPage';
import RevenuePage from './RevenuePage';
import CommunicationPage from './CommunicationPage';
import CoursesPageMain from './CoursesPage/CoursesPageMain';

export default function InstructorMainPage() {
  const { login,LoginData } = useContext(AppContext);
  const navigate = useNavigate();
  const smallScreenWidth = '576';

  const [isOpen, setIsOpen] = useState(false);
  const [menuActive, setMenuActive] = useState('Dashboard');
  const [windowWidth, setWindowWidth] = useState();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const openmenuWidth = isOpen ? '240px' : '80px';

  useEffect(() => {
    let LoginData = window.sessionStorage.getItem('LoginData')
    let data = JSON.parse(LoginData);
    if (data?.userType !== 'instructor') {
      navigate('/')
    }
  }, [])

  useLayoutEffect(() => {
    setWindowWidth(window?.innerWidth)
  }, [])

  const MenuBarItems = [
    {
      Image: dashboard,
      SelectedImage: dashboardSelected,
      name: 'Dashboard'
    },
    {
      Image: course,
      SelectedImage: courseSelected,
      name: 'Courses'
    },
    {
      Image: communication,
      SelectedImage: communicationSelected,
      name: 'Communication'
    },
    {
      Image: revenue,
      SelectedImage: revenueSelected,
      name: 'Revenue'
    },
    {
      name: 'Switch to Student'
    },
  ];

  const handlecloseMenuBar = (item) => {
    if (item === 'Switch to Student') {
      navigate('/')
    } else {
      if(isOpen == true){
        setMenuActive(item)
      }else{
        setMenuActive(item)
        setIsOpen(true);
      }
    }
  }

  const handleProfileBtn =()=>{
    if(isOpen == false){
      setIsOpen(true);
    }else if(isOpen == true){
      navigate(`/profile/${LoginData?.firstName + LoginData?.lastName}/profile`)
    }
  }

  return (
    <>
      <div className="InstructorDashboard">
        {
          windowWidth < smallScreenWidth ?
        <div className="instructor-navbar">
          <IoMenu onClick={() => setIsOpen(true)} />
        </div>
        :''}
        <div className="dashbaord">

          <div className="left-side-instructor-menubar" style={{ width: windowWidth < smallScreenWidth ? isOpen ? '240px' : '0px' : openmenuWidth,zIndex:windowWidth < smallScreenWidth ?'1000':'unset' }}>

            <div className='text-center custom-padding mt-3'>
              {
                isOpen ?
                  <div className='d-flex justify-content-between'>
                    <img src={bywaylogo2} alt="bywaylogo2" width={'50%'} />
                    <img src={closeicon} alt="closeicon" width={'17%'} onClick={() => setIsOpen(false)} style={{cursor:'pointer'}}/>
                  </div>
                  :
                  <img src={bywaylogo} alt="bywaylogo" width={'90%'} />

              }
            </div>

            <div className='items'>
              {
                MenuBarItems.map((value, index) => {
                  return (
                    <>
                      {
                        isOpen ?
                          <div className={`custom-padding menu-items ${menuActive === value?.name ? 'active' : ''}`} onClick={() => handlecloseMenuBar(value.name)} key={index} style={{cursor:'pointer'}}>
                            {
                              value?.name === 'Switch to Student' ?
                                <FaArrowRightArrowLeft /> :
                                <img src={menuActive === value?.name ? value?.SelectedImage : value?.Image} alt={value?.name} width={'15%'} />
                            }
                            <h5>{value.name}</h5>
                          </div>
                          :
                          <div className={`text-center custom-padding closed-menu-item ${menuActive === value?.name ? 'active' : ''}`} onClick={() => handlecloseMenuBar(value.name)} key={index} style={{cursor:'pointer'}}>
                            {
                              value?.name === 'Switch to Student' ?
                                <FaArrowRightArrowLeft />
                                : <img src={menuActive === value?.name ? value?.SelectedImage : value?.Image} alt={value?.name} width={'70%'} />
                            }
                          </div>
                      }
                    </>

                  )
                })
              }
              <div className="Info-item" style={{width: isOpen ? '100%' :'unset'}} onClick={()=>handleProfileBtn()}>
                  {
                    LoginData?.profilePhoto === '' || LoginData?.profilePhoto === 'userImage' ?
                <div className="circle" style={{backgroundColor:LoginData?.backgroundColor,padding: isOpen ?'10px' : '15px',width: isOpen ? '40px' :'50px',height:isOpen ? '40px':'50px'}}>
                    <h5 className='text-center'>{LoginData?.name?.charAt(0)}</h5>
                </div>
               : <div className="circle" style={{width: isOpen ? '40px' :'50px',height:isOpen ? '40px':'50px'}}>
                  <img src={LoginData?.profilePhoto} alt=""  width={'100%'}/>
                </div>
                  }
                  {
                    isOpen ? 
                    <h5>Hi, {LoginData?.firstName + ' ' + LoginData?.lastName}</h5>
                  :''}
              </div>
            </div>
          </div>

          <div className="right-side" style={{ width: windowWidth < smallScreenWidth ? '100%' : `calc(100% - ${openmenuWidth})`, marginLeft: windowWidth < smallScreenWidth ? '0px' : openmenuWidth }}>
            {
              menuActive === 'Dashboard' ?
              <DashboardPage />
           :'' }
            {
              menuActive === 'Courses' ?
              <CoursesPageMain />
           :'' }
            {
              menuActive === 'Communication' ?
              <CommunicationPage />
           :'' }
            {
              menuActive === 'Revenue' ?
              <RevenuePage />
           :'' }
          </div>
        </div>
      </div>
    </>
  )
}
