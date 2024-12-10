import React, {useState,useEffect} from 'react'
import Paginationfn from '../../Website/CommonComponent/Pagination'
import { FaInfoCircle } from "react-icons/fa";
export default function ChapterDetails({handleViewchapter,handlecreatecourse}) {
    const [page, setPage] = useState(1);
    const [filteredSearchData, setfilteredSearchData] = useState([]);
    const [TableData, setTableData] = useState([
        {
            chapterId:'1',
            chapterOrder: '1',
            chapterName: 'zbc',
            date: '08-07-2024',
            status: 'Published',
            commission: '240'
        },
        {
            chapterId:'2',
            chapterOrder: '2',
            chapterName: 'ab',
            date: '08-07-2024',
            status: 'Published',
            commission: '240'
        },
        {
            chapterId:'3',
            chapterOrder: '3',
            chapterName: 'bc',
            date: '08-07-2324',
            status: 'Published',
            commission: '40'
        },
        {
            chapterId:'4',
            chapterOrder: '4',
            chapterName: 'acdbc',
            date: '08-12-2024',
            status: 'Draft',
            commission: '24330'
        },

    ]);

    useEffect(() => {
        if (TableData?.length > 0) {
            setfilteredSearchData(TableData)
        }
    }, [TableData])

    const handleChange = (value) => {
        setPage(value)
    }

    const handleViewChapter =(data)=>{
        handleViewchapter('view')
        handlecreatecourse('Viewchapters',data)
    }

    return (
        <>
            <div className="chapterDetails-sub-page">
                <div className="container-fluid">
                    <div className="row mt-4">
                        <div className="col-12">
                            <div className="transactionTable">
                                <table className='table mb-0'>
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className='d-flex justify-content-center'>
                                                    <h5>Details</h5>
                                                </div>
                                            </th>
                                            <th>
                                                <div className='d-flex justify-content-center'>
                                                    <h5>Chapter </h5>
                                                </div>
                                            </th>
                                            <th>
                                                <div className='d-flex justify-content-center'>
                                                    <h5>Title </h5>
                                                </div>
                                            </th>
                                            <th>
                                                <div className='d-flex justify-content-center'>
                                                    <h5>Date </h5>
                                                </div>
                                            </th>
                                            <th>
                                                <div className='d-flex justify-content-center'>
                                                    <h5>Status </h5>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            filteredSearchData && filteredSearchData?.length > 0 ?
                                                filteredSearchData?.map((value, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td style={{textAlign:'center'}} onClick={()=>handleViewChapter(value)}><FaInfoCircle style={{cursor:'pointer'}}/></td>
                                                            <td style={{textAlign:'center'}}>{value?.chapterOrder}</td>
                                                            <td style={{textAlign:'center'}}>{value?.chapterName}</td>
                                                            <td style={{textAlign:'center'}}>{value?.date}</td>
                                                            <td style={{textAlign:'center'}}>{value?.status}</td>
                                                        </tr>
                                                    )
                                                })
                                                : ''}
                                    </tbody>
                                </table>
                            </div>
                            <Paginationfn page={page} count={Math.ceil(filteredSearchData?.length / 10)} handleChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
