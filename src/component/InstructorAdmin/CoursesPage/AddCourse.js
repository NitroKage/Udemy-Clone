import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
export default function AddCourse({ pageViewValue, handleBack, chapterEditData }) {
    console.log("chapterEditDatachapterEditDatachapterEditData",chapterEditData)
    const [createcourseData, setcreatecourseData] = useState({
        courseName: '',
        courseDescription: '',
        courseObjective: '',
        coursePrice: '',

    })
    const [chapterData ,setchapterData] =useState({
        chapterName:'',
        chapterNumber:''
    })
    const handlecreatecourse = () => {
        // call api to cretae course
        handleBack()
    }

    const handleAddcoursechange = (e) => {
        const {name, value} = e.target;
        setcreatecourseData({
            ...createcourseData,
            [name]: value
        })
    }

    const handleAddchapter = (e) =>{
        const {name, value ,files} = e.target;
        setchapterData({
            ...chapterData,
            [name]: name == 'chapterVideo' ? files[0]: value
        })
    }
    return (
        <>
            <div className="Addcourse-page">
                <div className="container-fluid">
                    <div className="heading d-flex justify-content-between flex-wrap">
                        <div className='d-flex align-self-center'>
                            <IoIosArrowBack onClick={() => handleBack(pageViewValue == 'Addcourse' ? 'Courseshow' : 'Aboutcourseshow')} />
                            <h3 className=''>{pageViewValue == 'Addcourse' ? 'Create Course' : pageViewValue == 'addchapters' ? 'Create Chapters' : pageViewValue == 'Viewchapters' ? chapterEditData?.chapterName:''}</h3>
                        </div>

                        {
                            pageViewValue == 'addchapters' || pageViewValue == 'Viewchapters' ?
                                <div>
                                    {
                                        pageViewValue == 'Viewchapters' ?
                                        <button className='button4 active me-2' >Delete</button>
                                    :''}
                                    <button className={`button3 active me-2  ${chapterData?.chapterName == '' || chapterData?.chapterNumber == ''? 'disabled' : 'active'}`}>Move To Draft</button>
                                    <button className={`button5  ${chapterData?.chapterName == '' || chapterData?.chapterNumber == ''? 'disabled' : 'active'}`}>Publish</button>
                                </div>
                                : ''}

                    </div>

                    {
                        pageViewValue == 'Addcourse' ?
                            <div className="AddcourseForm">
                                <h5>Course Details</h5>
                                <div className="row mt-4">
                                    <div className="col-lg-6 col-md-8 col-xs-12 ">
                                        <div className="InputGrps">
                                            <label htmlFor="courseName" className='inputlabel'>Course Name</label>
                                            <input type="text" name="courseName" id="courseName" className='inputTag' value={createcourseData.courseName} onChange={(e) => handleAddcoursechange(e)} />
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-xs-12 mt-4">
                                        <div className="InputGrps">
                                            <label htmlFor="courseDescription" className='inputlabel'>Course Description (min 50 Words)</label>
                                            <textarea type="text" name="courseDescription" id="courseDescription" className='inputTag' style={{ minHeight: '100px' }} value={createcourseData.courseDescription} onChange={(e) => handleAddcoursechange(e)} />
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-xs-12 mt-4">
                                        <div className="InputGrps">
                                            <label htmlFor="courseObjective" className='inputlabel'>Course Objective</label>
                                            <textarea type="text" name="courseObjective" id="courseObjective" className='inputTag' style={{ minHeight: '100px' }} value={createcourseData.courseObjective} onChange={(e) => handleAddcoursechange(e)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 col-xs-12 mt-4">
                                        <div className="InputGrps">
                                            <label htmlFor="coursePrice" className='inputlabel'>Course Price</label>
                                            <div className="subinputGrp">
                                                <span>$</span>
                                                <input type="Number" name="coursePrice" id="coursePrice" className='inputTag2' value={createcourseData.coursePrice} onChange={(e) => handleAddcoursechange(e)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className={`button2  mt-4 ${createcourseData?.courseName === '' || createcourseData?.courseDescription === '' || createcourseData?.courseDescription.length < 150 || createcourseData?.coursePrice === '' ? 'disabled' :'active'}`} onClick={() => handlecreatecourse()}>Create course</button>
                            </div>
                            : ''}


                            {
                                 pageViewValue == 'addchapters' || pageViewValue == 'Viewchapters' ?
                                 <div className="AddcourseForm">
                                     <h5>Chapter Details</h5>
                                     <div className="row mt-4">
                                         <div className="col-lg-6 col-md-8 col-xs-12 ">
                                             <div className="InputGrps">
                                                 <label htmlFor="chapterName" className='inputlabel'>Chapter Name</label>
                                                 <input type="text" name="chapterName" id="chapterName" className='inputTag' value={chapterData.courseName} onChange={(e) => handleAddchapter(e)} />
                                             </div>
                                         </div>
                                         <div className="col-lg-6 col-md-8 col-xs-12 ">
                                             <div className="InputGrps">
                                                 <label htmlFor="chapterNumber" className='inputlabel'>Chapter Number</label>
                                                 <input type="number" name="chapterNumber" id="chapterNumber" className='inputTag' value={chapterData.chapterNumber} onChange={(e) => handleAddchapter(e)} />
                                             </div>
                                         </div>
                                         <div className="col-md-7 col-xs-12 mt-4">
                                             <div className="InputGrps">
                                                 <label htmlFor="chapterVideo" className='inputlabel'>Upload Video</label>
                                                 <input type="file" accept="video/*" name="chapterVideo" id="chapterVideo" className='inputTag filetype'  onChange={(e) => handleAddchapter(e)} />
                                             </div>
                                         </div>
                                        
                                     </div>
                                     
                                     
                                 </div>
                                 : ''
                            }
                </div>
            </div>
        </>
    )
}
