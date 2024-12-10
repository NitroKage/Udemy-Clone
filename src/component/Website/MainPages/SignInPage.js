import React, { useState, useContext } from 'react'
import SignInImage from '../../../Assets/SignInImage.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { SignInValidation } from '../../../utils/Validation';
import { useNavigate } from 'react-router-dom';
import { FirstSignIn, SecondSignIn } from '../../../Access/actionCreator';
import { AppContext } from '../../../context/AppContext';
export default function SignInPage() {
    const {setLogin, setLoginData } = useContext(AppContext);
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [formSection, setFormSection] = useState('FirstSection')
    const [firstRespose, setFirstResponse] = useState([]);
    const [dataArray, setDataArray] = useState({
        fName: '',
        lName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        accountType: '',
    })

    const changeHandler = (e) => {
        const { name, value } = e.target;

        setDataArray({
            ...dataArray,
            [name]: value
        })
    }

    const handleSubmit = () => {
        let validationMsg = SignInValidation(dataArray)
        if (validationMsg?.status) {
            setMessage(validationMsg)

            const obj = {
                firstName: dataArray.fName,
                lastName: dataArray.lName,
                email: dataArray.email,
                userName: dataArray.username,
                password: dataArray.password
            }

            FirstSignIn(obj, (callback) => {
                console.log(callback)
                if (callback?.status == 'success') {
                    setFirstResponse(callback?.data)
                    setFormSection('SecondSection');
                } else {

                }
            })
        } else {
            setMessage(validationMsg)
        }

    }

    const handleAccountType = (type) => {
        if (dataArray.accountType === '') {
            setDataArray({
                ...dataArray,
                'accountType': type
            })
        }
        else {
            setDataArray({
                ...dataArray,
                'accountType': ''
            })
        }
    }

    const handleAccountSubmit = () => {
        const obj = {
            userId: firstRespose?.userId,
            userType: dataArray?.accountType
        }
        SecondSignIn(obj, (callback) => {
            console.log(callback)
            if (callback?.status == 'success') {
                setLoginData(callback?.data)
                window.sessionStorage.setItem("accessToken", callback?.data?.token)
                window.sessionStorage.setItem("LoginData", JSON.stringify(callback?.data))
                setLogin(true)
                if (callback?.data?.userType === 'instructor') {
                    navigate('/instructorView')
                } else {
                    navigate('/')
                }
                setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                }, 200)
            }
        })
    }

    return (
        <>
            {
                formSection === 'FirstSection' ?
                    <div className="SignInPage">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-5 col-sm-12">
                                    <img src={SignInImage} alt="SignInImage" width={'100%'} />
                                </div>
                                <div className="col-lg-7 col-sm-12">
                                    <div className="signinForm">
                                        <h3 className='heading'>Create Your Account</h3>

                                        <div className="row">
                                            <label className='labeltext'>Full Name</label>
                                            <div className="col-md-6 col-sm-12">
                                                <input className="inputTag" type="text" name="fName" placeholder='First Name' value={dataArray.fName} onChange={(e) => changeHandler(e)} />
                                                <div className="form-text error-msg">{message.field === 'fName' ? message.msg : ""}</div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <input className="inputTag" type="text" name="lName" placeholder='Last Name' value={dataArray.lName} onChange={(e) => changeHandler(e)} />
                                                <div className="form-text error-msg">{message.field === 'lName' ? message.msg : ""}</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <label className='labeltext'>Username</label>
                                            <div className="col-sm-12">
                                                <input className="inputTag" type="text" name="username" placeholder='Username' value={dataArray.username} onChange={(e) => changeHandler(e)} />
                                                <div className="form-text error-msg">{message.field === 'username' ? message.msg : ""}</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <label className='labeltext'>Email</label>
                                            <div className="col-sm-12">
                                                <input className="inputTag" type="email" name="email" placeholder='Email ID' value={dataArray.email} onChange={(e) => changeHandler(e)} />
                                                <div className="form-text error-msg">{message.field === 'email' ? message.msg : ""}</div>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <label className='labeltext'>Password</label>
                                                <input className="inputTag" type="password" name="password" placeholder='Enter Password' value={dataArray.password} onChange={(e) => changeHandler(e)} />
                                                <div className="form-text error-msg">{message.field === 'password' ? message.msg : ""}</div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <label className='labeltext'>Confirm Password</label>
                                                <input className="inputTag" type="password" name="confirmPassword" placeholder='Confirm Password' value={dataArray.confirmPassword} onChange={(e) => changeHandler(e)} />
                                                <div className="form-text error-msg">{message.field === 'confirmPassword' ? message.msg : ""}</div>
                                            </div>

                                        </div>

                                        <button className='buttoninside' onClick={() => handleSubmit()}>Create Account &nbsp;<FaArrowRightLong /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : ''}
            {
                formSection === 'SecondSection' ?
                    <div className="SignInPage info">
                        <div className="container">

                            <div className="heading text-center">
                                <h3>Create Account as </h3>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-6 col-xs-12 mt-2 text-center">
                                    <div className="upperBox">
                                        <div className={`box ${dataArray.accountType === 'student' ? 'active' : ''}`} onClick={() => handleAccountType('student')}>
                                            <h4>Student</h4>
                                            <h6>Get Access to Millions of Courses By Top Instructor's from around the Globe</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-12 mt-2 text-center">
                                    <div className="upperBox">
                                        <div className={`box ${dataArray.accountType === 'instructor' ? 'active' : ''}`} onClick={() => handleAccountType('instructor')}>
                                            <h4>Instructor</h4>
                                            <h6>Create & Sell Courses to millions of our active Customers </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                dataArray.accountType === '' ? '' :
                                    <div className="btns text-end">
                                        <button className='buttoninside' onClick={() => handleAccountSubmit()}>Create Account <FaArrowRightLong /></button>
                                    </div>
                            }
                        </div>
                    </div>
                    : ''
            }
        </>
    )
}
