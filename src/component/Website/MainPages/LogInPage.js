import React,{useState,useContext} from 'react'
import LoginImage from '../../../Assets/LoginImage.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { LogInValidation } from '../../../utils/Validation';
import { AppContext } from '../../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { UserLogin } from '../../../Access/actionCreator';
export default function LogInPage() {
    const navigate = useNavigate();
    const { setLogin,setLoginData } = useContext(AppContext);
    const [message, setMessage] = useState('');
    const [dataArray,setDataArray] = useState({
        email:'',
        password:'',
    })

    const changeHandler =(e)=>{
const {name ,value} = e.target;

setDataArray({
    ...dataArray,
    [name] : value
})
    }

    const handleSubmit = () => {
        let validationMsg = LogInValidation(dataArray)
        if (validationMsg?.status === true) {
            setMessage(validationMsg)
            UserLogin(dataArray?.email,dataArray?.password,(callback)=>{
                console.log(callback)
                if(callback.status == 'success'){
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
            //             const obj = {
//                 name:'John Doe',
//                 age:'18',
//                 UserType:'Instructor',
//                 AccessToken:'dtrfgyuhij',
//                 userId:'fgwcklwflekhug',
//                 Image:'userImage',
//                 backgroundColor:'red',
//             };
//         window.sessionStorage.setItem("accessToken",'dtrfgyuhij')
//         window.sessionStorage.setItem("LoginData", JSON.stringify(obj))
//         navigate('/')
//         setTimeout(()=>{
// window.scrollTo({top:0,behavior:'smooth'})
//         },200)
        } else {
            setMessage(validationMsg)
        }

    }
  return (
    <>
         <div className="LogInPage SignInPage">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-7 col-sm-12" id="cols1">
                            <div className="signinForm">
                                <h3 className='heading'>Sign in to your account</h3>
                                <div className="row">
                                    <label className='labeltext'>Email</label>
                                    <div className="col-sm-12">
                                        <input className="inputTag" type="text" name="email" placeholder='Username or Email ID' value={dataArray.email} onChange={(e)=>changeHandler(e)}/>
                                        <div className="form-text error-msg">{message.field === 'email' ? message.msg : ""}</div>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-sm-12">
                                    <label className='labeltext'>Password</label>
                                        <input className="inputTag" type="text" name="password" placeholder='Enter Password' value={dataArray.password} onChange={(e)=>changeHandler(e)}/>
                                        <div className="form-text error-msg">{message.field === 'password' ? message.msg : ""}</div>
                                    </div>
                                </div>

                                <button className='buttoninside' onClick={()=>handleSubmit()}>Sign In &nbsp;<FaArrowRightLong /></button>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-12" id="cols2">
                            <img src={LoginImage} alt="LoginImage" width={'100%'} />
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
