import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import ProfileTab from './MyProfilePage/ProfileTab';
import CourseTab from './MyProfilePage/CourseTab';
import ReviewTab from './MyProfilePage/ReviewTab';
import MessagesTab from './MyProfilePage/MessagesTab';
import TeacherTab from './MyProfilePage/TeacherTab';
export default function MyProfilePage() {
  const navigate = useNavigate();
  const { LoginData } = useContext(AppContext);
  const [tabActive, setTabActive] = useState('profile')

  useEffect(() => {

    let locations = decodeURIComponent(window.location.pathname)
    setTabActive(locations.split(`/profile/${LoginData?.firstName + LoginData?.lastName}/`)[1])

  }, [location.pathname])

  const handleProfileTabs = (type) => {
    setTabActive(type);
    navigate(`/profile/${LoginData?.firstName + LoginData?.lastName}/${type}`)
  }
  return (
    <>
      <div className="MyProfilePage">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-xs-12 mt-4 mb-3">
              <div className="ProfileTabs">
                <div className="top-section">
                  {LoginData?.profilePhoto !== '' && LoginData?.profilePhoto !== null && LoginData?.profilePhoto !== undefined ?
                    < div className="circle">
                      <img src={LoginData?.profilePhoto} alt="Image" width={'100%'} style={{width:'160px',height:'160px',borderRadius:'50%'}}/>
                    </div>
                    :
                    <div className="circle" style={{ backgroundColor: LoginData?.backgroundColor }}>
                      <h3 style={{textAlign:'center',fontSize:'50px',color:'#fff',padding:'50px 10px'}}>{LoginData?.firstName.charAt(0).toUpperCase()}</h3>
                    </div>
                  }
                  <h5>{LoginData?.firstName + ' ' + LoginData?.lastName}</h5>
                </div>
                <div className="tabs-section">
                  <div className={`tab ${tabActive === 'profile' ? 'active' : ''}`} onClick={() => handleProfileTabs('profile')}>
                    <h5>Profile</h5>
                  </div>
                  <div className={`tab ${tabActive === 'MyCourses' ? 'active' : ''}`} onClick={() => handleProfileTabs('MyCourses')}>
                    <h5>My Courses</h5>
                  </div>
                  <div className={`tab ${tabActive === 'Teachers' ? 'active' : ''}`} onClick={() => handleProfileTabs('Teachers')}>
                    <h5>Teachers</h5>
                  </div>
                  <div className={`tab ${tabActive === 'Messages' ? 'active' : ''}`} onClick={() => handleProfileTabs('Messages')}>
                    <h5>Message</h5>
                  </div>
                  <div className={`tab border-radiuss ${tabActive === 'MyReviews' ? 'active' : ''}`} onClick={() => handleProfileTabs('MyReviews')}>
                    <h5>My Reviews</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-xs-12 mt-4 mb-3">
              {
                tabActive === 'profile' ?
                  <ProfileTab />
                  : ""}
              {
                tabActive === 'MyCourses' ?
                  <CourseTab />
                  : ""}
              {
                tabActive === 'Teachers' ?
                  <TeacherTab userName={LoginData?.firstName + LoginData?.lastName} />
                  : ""}
              {
                tabActive === 'Messages' ?
                  <MessagesTab userName={LoginData?.firstName + LoginData?.lastName} />
                  : ""}
              {
                tabActive === 'MyReviews' ?
                  <ReviewTab />
                  : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
