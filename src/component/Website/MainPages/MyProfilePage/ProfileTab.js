import React, { useState,useEffect,useContext } from 'react'
import ProfileImage2 from '../../../../Assets/ProfileImage2.png'
import { getUserProfile, updateUserProfile } from '../../../../Access/actionCreator';
import {AppContext} from '../../../../context/AppContext'
export default function ProfileTab() {
    const { LoginData } = useContext(AppContext);
    const [data, setData] = useState({
        fName: '',
        lName: '',
        headline: '',
        Description: '',
        Images: '',
        Website: '',
        twitter: '',
        Linkdin: '',
        Youtube: '',
    })
    const [previewImage, setpreviewImage] = useState('');

    useEffect(()=>{
        GetProfile()
    },[])

    const GetProfile =()=>{
        const userId = LoginData?._id
        getUserProfile(userId,(callback)=>{
if(callback.status == 'success' && Object.keys(callback?.data)?.length > 0){
    setData({
        fName:callback.data.firstName,
        lName:callback.data.lastName,
        headline:callback.data.headline,
        Description:callback.data.description,
        Images:callback.data.profilePhoto === '' || callback.data.profilePhoto == null || callback.data.profilePhoto == undefined ? '' :callback?.data?.profilePhoto,
        Website:callback.data.links.Website,
        twitter:callback.data.links.Twitter,
        Linkdin:callback.data.links.LinkdIn,
        Youtube:callback.data.links.Youtube,
    })
    setpreviewImage(callback.data.profilePhoto)
}
        })
    }

    const handlechange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'Images'&& files && files[0]) {
            setData({
                ...data,
                [name]:  files[0] 
            })
            const reader = new FileReader();
            reader.onloadend = () => {
                setpreviewImage(reader.result);
            };
            reader.readAsDataURL(files[0]);
        }else{

            setData({
                ...data,
                [name]:  value
            })
        }
    }

    const handleSave=()=>{
        const Dataform = new FormData()
        Dataform.append('userId',LoginData._id)
        Dataform.append('firstName',data.fName)
        Dataform.append('lastName',data.lName)
        Dataform.append('headline;',data.headline)
        Dataform.append('description',data.Description)
        Dataform.append('Website',data.Website)
        Dataform.append('Twitter',data.twitter)
        Dataform.append('LinkdIn',data.Linkdin)
        Dataform.append('Youtube',data.Youtube)
        console.log(typeof data?.Images, data?.Images)
        console.log("data",data.Images)
        if (data?.Images && data.Images instanceof File) {
            Dataform.append('profilePhoto', data.Images);
        }

        updateUserProfile(Dataform,(callback)=>{    
            if(callback.status == 'success'){
                GetProfile()
            }
        })
    }
    return (
        <>
            <div className="ProfileTab-section">
                <div className="contents">
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <div className="inputgrp">
                                <label htmlFor="fName">First Name</label>
                                <input className='inputtag' type="text" name="fName" id="fName" value={data?.fName} onChange={(e) => handlechange(e)} placeholder="Enter First Name" />
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="inputgrp">
                                <label htmlFor="lName">Last Name</label>
                                <input className='inputtag' type="text" name="lName" id="lName" value={data?.lName} onChange={(e) => handlechange(e)} placeholder="Enter Last Name" />
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="inputgrp">
                                <label htmlFor="headline">Headline</label>
                                <input className='inputtag' type="text" name="headline" id="headline" value={data?.headline} onChange={(e) => handlechange(e)} placeholder="Headline" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="inputgrp">
                                <label htmlFor="Description">Description</label>
                                <textarea className='inputtag' type="text" name="Description" id="Description" value={data?.Description} onChange={(e) => handlechange(e)} placeholder="Description" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contents">
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <h5>Images Preview</h5>
                            <div className="square">
                                <img src={previewImage||ProfileImage2} alt="Images" width={'100%'} />
                            </div>
                        </div>
                        <div className="col-md-8 col-xs-12 mt-3">
                            <h5>Add/Change Images</h5>
                            <div className="inputgrp">
                                <input className='inputtag' type="file" name="Images" id="Images"  onChange={(e) => handlechange(e)} accept=".png, .jpg, .jpeg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contents">
                    <div className="row">
                        <div className="col-12">
                           <h5>Links</h5>

                           <div className="inputgrp">
                                <label htmlFor="Website">Website</label>
                                <input className='inputtag' type="text" name="Website" id="Website" value={data?.Website} onChange={(e) => handlechange(e)} placeholder="Enter Website URL" />
                            </div>
                           <div className="inputgrp">
                                <label htmlFor="twitter">X(Formerly twitter)</label>
                                <input className='inputtag' type="text" name="twitter" id="twitter" value={data?.twitter} onChange={(e) => handlechange(e)} placeholder="Enter Twitter URL" />
                            </div>
                           <div className="inputgrp">
                                <label htmlFor="Linkdin">LinkdIn</label>
                                <input className='inputtag' type="text" name="Linkdin" id="Linkdin" value={data?.Linkdin} onChange={(e) => handlechange(e)} placeholder="Enter Linkdin URL" />
                            </div>
                           <div className="inputgrp">
                                <label htmlFor="Youtube">Youtube</label>
                                <input className='inputtag' type="text" name="Youtube" id="Youtube" value={data?.Youtube} onChange={(e) => handlechange(e)} placeholder="Enter Youtube URL" />
                            </div>
                        </div>
                    </div>
                </div>
                <button className='buttonSave' onClick={()=>handleSave()}>Save</button>
            </div>
        </>
    )
}
