import React, {useState,useEffect} from 'react'
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Paginationfn from '../../Website/CommonComponent/Pagination'

export default function CustomerSubPage() {
    const [page, setPage] = useState(1);
    const [filteredSearchData, setfilteredSearchData] = useState([]);
    const [customerTable, setcustomerTable] = useState([
        {
            customerName: 'zbc',
            date: '08-07-2024',
            country: 'india',
            amount: '240'
        },
        {
            customerName: 'ab',
            date: '08-07-2024',
            country: 'indiad',
            amount: '240'
        },
        {
            customerName: 'bc',
            date: '08-07-2324',
            country: 'india',
            amount: '40'
        },
        {
            customerName: 'acdbc',
            date: '08-12-2024',
            country: 'india',
            amount: '24330'
        },

    ]);

    const handleChange = (value) => {
        setPage(value)
    }

    useEffect(() => {
        if (customerTable?.length > 0) {
            setfilteredSearchData(customerTable)
        }
    }, [customerTable])

    const handleFilterchart = (sortType, sortBy) => {
        const sortedData = [...customerTable].sort((a, b) => {
            if (sortBy === 'amount') {
                return sortType === 'up' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
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
    <div className="customer-sub-page">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                <div className="transactionTable">
                                <table className='table mb-0'>
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className='d-flex justify-content-center'>
                                                    <h5>ID</h5>
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
                                                    <h5>Country </h5>
                                                </div>
                                            </th>
                                            <th>
                                                <div className='d-flex justify-content-center'>
                                                    <h5>Amount </h5>
                                                    <div className='svgbtn'>
                                                        <TiArrowSortedUp style={{ top: '0px' }} onClick={() => handleFilterchart('up', 'amount')} />
                                                        <TiArrowSortedDown style={{ top: '10px' }} onClick={() => handleFilterchart('down', 'amount')} />
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
                                                            <td>{index + 1}</td>
                                                            <td>{value?.customerName}</td>
                                                            <td>{value?.date}</td>
                                                            <td>{value?.country}</td>
                                                            <td>{'$'+value?.amount}</td>
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
