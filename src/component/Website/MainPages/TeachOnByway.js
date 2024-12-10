import React ,{useState,useLayoutEffect} from 'react'
import instructorPageBanner from '../../../Assets/instructor-pgae-banner2.png'
import teachimage1 from '../../../Assets/teachimage1.png'
import teachimage2 from '../../../Assets/teachimage2.png'
import teachimage3 from '../../../Assets/teachimage3.png'
import supportimage1 from '../../../Assets/supportimage1.png'
import supportimage2 from '../../../Assets/supportimage2.png'
import { useNavigate } from 'react-router-dom'
export default function TeachOnByway() {
    const navigate = useNavigate();
const [winwidth,setWinWidth] =useState();
    useLayoutEffect(() =>{
        setWinWidth(window.innerWidth);
    },[])
  return (
    <>
    <div className="Teaching-Page">
        <div className="Teach-banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xs-12">
                        <div className="texts">
                            <h3 className='mt-3'>Come teach with us</h3>
                            <h5 className='mt-3'>Become an instructor and change lives — including your own</h5>
                            <button className='button1 mt-3' style={{padding:'10px 25px'}} onClick={()=>navigate('/signIn')}>Get Started</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <div className="imgs text-center">
                            <img src={instructorPageBanner} alt="instructorPageBanner" width={'70%'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="reasons-section">
            <div className="container">
                <div className="heading">
                    <h3>So many reasons to start</h3>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4 col-xs-12 mt-4">
                        <div className="box text-center">
                            <img src={teachimage1} alt="teachimage1" width={'20%'} />
                            <h5>Teach your way</h5>
                            <h6>Publish the course you want, in the way<br/> you want, and always have control of your<br/> own content.</h6>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xs-12 mt-4">
                        <div className="box text-center">
                            <img src={teachimage2} alt="teachimage2" width={'20%'} />
                            <h5>Inspire learners</h5>
                            <h6>Teach what you know and help learners explore<br/> their interests, gain new skills, and advance<br/> their careers.</h6>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xs-12 mt-4">
                        <div className="box text-center">
                            <img src={teachimage3} alt="teachimage3" width={'20%'} />
                            <h5>Get rewarded</h5>
                            <h6>Expand your professional network, build your <br/>expertise, and earn money on<br/> each paid enrollment.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="numbers-section">
            <div className="container">
                <div className="tabs">
                    <div className="tab">
                        <h4>70M</h4>
                        <h6>Students</h6>
                    </div>
                    <div className="tab">
                        <h4>74+</h4>
                        <h6>Languages</h6>
                    </div>
                    <div className="tab">
                        <h4>970M</h4>
                        <h6>Enrollments</h6>
                    </div>
                    <div className="tab">
                        <h4>180+</h4>
                        <h6>Countries</h6>
                    </div>
                    <div className="tab">
                        <h4>16,000+</h4>
                        <h6>Enterprise customers</h6>
                    </div>
                </div>
            </div>
        </div>

        <div className="support-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-xs-12">
                        <div className="imgs text-center">
                            <img src={supportimage1} alt="supportimage1" width={winwidth < 992 ?'80%':'100%'} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <div className="texts">
                            <h3>You won’t have to do it alone</h3>
                            <h6>Our <b>Instructor Support Team</b> is here to answer your questions and review your test video, while our <b>Teaching Center</b> gives you plenty of resources to help you through the process. Plus, get the support of experienced instructors in our <b>online community</b>.</h6>
                        </div>
                    </div>
                    <div className={`col-lg-3 col-xs-12 ${winwidth < 992 ? 'd-none' : ''}`}>
                        <div className="imgs">
                            <img src={supportimage2} alt="supportimage2" width={'100%'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="becomeInstructor-section">
            <div className="container">
                <div className="heading text-center">
                    <h3 className='mt-3'>Become an instructor today</h3>
                    <h5 className='mt-3'>Join one of the world’s largest online learning <br/>marketplaces.</h5>
                    <button className='button1 mt-3' style={{padding:'10px 30px'}} onClick={()=>navigate('/signIn')}>Get Started</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
