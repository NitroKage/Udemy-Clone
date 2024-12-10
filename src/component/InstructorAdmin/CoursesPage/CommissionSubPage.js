import React, { useState, useEffect } from 'react'
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import arrowup from '../../../Assets/InstructorAdminImages/arrow-up.png'
import arrowupblue from '../../../Assets/InstructorAdminImages/arrow-up-blue.png'
import arrowupyellow from '../../../Assets/InstructorAdminImages/arrow-up-yellow.png'
import Paginationfn from '../../Website/CommonComponent/Pagination'
export default function CommissionSubPage({ courseData, screenwidth }) {
    const [page, setPage] = useState(1);
    const [filteredSearchData, setfilteredSearchData] = useState([]);
    const [transactionTable, settransactionTable] = useState([
        {
            orderID: '#0001',
            customerName: 'zbc',
            date: '08-07-2024',
            status: 'Received',
            commission: '240'
        },
        {
            orderID: '#0003',
            customerName: 'ab',
            date: '08-07-2024',
            status: 'Received',
            commission: '240'
        },
        {
            orderID: '#0001',
            customerName: 'bc',
            date: '08-07-2324',
            status: 'Received',
            commission: '40'
        },
        {
            orderID: '#0000',
            customerName: 'acdbc',
            date: '08-12-2024',
            status: 'Pending',
            commission: '24330'
        },

    ]);
    const handleChange = (value) => {
        setPage(value)
    }

    useEffect(() => {
        if (transactionTable?.length > 0) {
            setfilteredSearchData(transactionTable)
        }
    }, [transactionTable])

    const handleFilterchart = (sortType, sortBy) => {
        const sortedData = [...transactionTable].sort((a, b) => {
            if (sortBy === 'commission') {
                return sortType === 'up' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
            } else if (sortBy === 'orderID') {
                return sortType === 'up' ? a[sortBy?.split('#')?.[1]] - b[sortBy?.split('#')?.[1]] : b[sortBy?.split('#')?.[1]] - a[sortBy?.split('#')?.[1]];
            }
            else if (sortBy === 'date') {
                const dateA = new Date(a[sortBy]);
                const dateB = new Date(b[sortBy]);
                return sortType === 'up' ? dateA - dateB : dateB - dateA;
            } else {
                return sortType === 'up'
                    ? a[sortBy].localeCompare(b[sortBy])
                    : b[sortBy].localeCompare(a[sortBy]);
            }
        });
        setfilteredSearchData(sortedData)
    }

    return (
        <>
            <div className="commission-sub-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-xs-12 outerbox mt-3">
                            <div className="box left-box" style={{ height: screenwidth > 1200 ? '120px' : screenwidth < 1200 && screenwidth > 576 ? '126px' : '120px' }}>
                                <div className="imgs">
                                    <img src={arrowupblue} alt="arrow" width={'70%'} />
                                </div>
                                <div className="text">
                                    <h4>$1K</h4>
                                    <h6>Courses Commission</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12 outerbox mt-3">
                            <div className="box left-box" style={{ height: screenwidth > 1200 ? '120px' : screenwidth < 1200 && screenwidth > 576 ? '126px' : '120px' }}>
                                <div className="imgs">
                                    <img src={arrowup} alt="arrow" width={'70%'} />
                                </div>
                                <div className="text">
                                    <h4>$800.0</h4>
                                    <h6>Received Commission</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12 outerbox mt-3">
                            <div className="box left-box" style={{ height: screenwidth > 1200 ? '120px' : screenwidth < 1200 && screenwidth > 576 ? '126px' : '120px' }}>
                                <div className="imgs">
                                    <img src={arrowupyellow} alt="arrow" width={'70%'} />
                                </div>
                                <div className="text">
                                    <h4>$200.00</h4>
                                    <h6>Pending Commission</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="transactionTable">
                                <table className='table mb-0'>
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className='d-flex justify-content-center'>
                                                    <h5>Order ID</h5>
                                                    <div className='svgbtn'>
                                                        <TiArrowSortedUp style={{ top: '0px' }} onClick={() => handleFilterchart('up', 'orderID')} />
                                                        <TiArrowSortedDown style={{ top: '10px' }} onClick={() => handleFilterchart('down', 'orderID')} />
                                                    </div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className='d-flex justify-content-center'>
                                                    <h5>Customer</h5>
                                                    <div className='svgbtn'>
                                                        <TiArrowSortedUp style={{ top: '0px' }} onClick={() => handleFilterchart('up', 'customerName')} />
                                                        <TiArrowSortedDown style={{ top: '10px' }} onClick={() => handleFilterchart('down', 'customerName')} />
                                                    </div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className='d-flex justify-content-center'>
                                                    <h5>Date </h5>
                                                    <div className='svgbtn'>
                                                        <TiArrowSortedUp style={{ top: '0px' }} onClick={() => handleFilterchart('up', 'date')} />
                                                        <TiArrowSortedDown style={{ top: '10px' }} onClick={() => handleFilterchart('down', 'date')} />
                                                    </div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className='d-flex justify-content-center'>
                                                    <h5>Status </h5>
                                                </div>
                                            </th>
                                            <th>
                                                <div className='d-flex justify-content-center'>
                                                    <h5>Commission </h5>
                                                    <div className='svgbtn'>
                                                        <TiArrowSortedUp style={{ top: '0px' }} onClick={() => handleFilterchart('up', 'commission')} />
                                                        <TiArrowSortedDown style={{ top: '10px' }} onClick={() => handleFilterchart('down', 'commission')} />
                                                    </div>
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
                                                            <td>{value?.orderID}</td>
                                                            <td>{value?.customerName}</td>
                                                            <td>{value?.date}</td>
                                                            <td style={{color:value?.status == 'Received' ? 'green' :'#EAB308'}}>{value?.status}</td>
                                                            <td>{'$'+value?.commission}</td>
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
