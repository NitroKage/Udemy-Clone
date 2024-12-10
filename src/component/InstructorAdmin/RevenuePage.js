import React, { useState, useEffect, useLayoutEffect } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import Paginationfn from '../Website/CommonComponent/Pagination'
export default function RevenuePage() {
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [chartwidth, setchartwidth] = useState('');
    const [searchValue, setsearchValue] = useState('');
    const [filteredSearchData, setfilteredSearchData] = useState([]);
    const [transactionTable, settransactionTable] = useState([
        {
            customerName: 'abc',
            date: '08-07-2024',
            type: 'Credit',
            amount: '240'
        },
        {
            customerName: 'abzyczz fkf',
            date: '08-07-2024',
            type: 'Credit',
            amount: '240'
        },
        {
            customerName: 'abzghhc',
            date: '08-06-2024',
            type: 'Credit',
            amount: '240'
        },
        {
            customerName: 'jwevbc',
            date: '28-07-2024',
            type: 'Credit',
            amount: '2040'
        },
    ]);

    function InitialDate(){

        const date = new Date();
        let TodayDate = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        const yesterdayDate = `${year}-${Number(month) + 1 < 10 ? `0${Number(month) + 1}` : Number(month) + 1}-${(Number(TodayDate) - 1) < 10 ? `0${Number(TodayDate) - 1}` : Number(TodayDate) - 1}`;
        const TodaysDate = `${year}-${Number(month) + 1 < 10 ? `0${Number(month) + 1}` : Number(month) + 1}-${TodayDate < 10 ? `0${TodayDate}` : TodayDate}`;
        setFromDate(yesterdayDate);
        setToDate(TodaysDate);
    }

    useEffect(() => {
        InitialDate();

    }, [])
    useLayoutEffect(() => {
        const elewidth = document.getElementById('chartArea').clientWidth;
        setchartwidth(elewidth)
    }, [])

    const handleDateFilter = (e, type) => {
        console.log(e.target.value)
        if (type === 'fromDate') {
            setFromDate(e.target.value)
        }
        else if (type === 'toDate') {
            setToDate(e.target.value)
        }
    }

    const data = [
        {
            "name": "Jan",
            "LifeTime": 4000,
            "Current": 2400,
        },
        {
            "name": "Feb",
            "LifeTime": 3000,
            "Current": 1398,
        },
        {
            "name": "Mar",
            "LifeTime": 2000,
            "Current": 9800,
        },
        {
            "name": "Apr",
            "LifeTime": 2780,
            "Current": 3908,
        },
        {
            "name": "May",
            "LifeTime": 1890,
            "Current": 4800,
        },
        {
            "name": "Jun",
            "LifeTime": 2390,
            "Current": 3800,
        },
        {
            "name": "Jul",
            "LifeTime": 3490,
            "Current": 4300,
        },
        {
            "name": "Aug",
            "LifeTime": 3490,
            "Current": 4300,
        },
        {
            "name": "Sep",
            "LifeTime": 3490,
            "Current": 4300,
        },
        {
            "name": "Oct",
            "LifeTime": 3490,
            "Current": 4300,
        },
        {
            "name": "Nov",
            "LifeTime": 3490,
            "Current": 4300,
        },
        {
            "name": "Dec",
            "LifeTime": 3490,
            "Current": 4300,
        },
    ];

    useEffect(() => {
        if (transactionTable?.length > 0) {
            setfilteredSearchData(transactionTable)
        }
    }, [transactionTable])

    const handleSearch = (e) => {
        setsearchValue(e.target.value);
        console.log(typeof e.target.value)
        if (e.target.value?.length > 0) {
            setfilteredSearchData(transactionTable.filter((value) => ((value?.customerName)?.toLowerCase()).includes((e.target.value).toLowerCase())));
        } else {
            setfilteredSearchData(transactionTable);
        }
    }

    const handleFilterchart =(sortType,sortBy)=>{
        const sortedData = [...transactionTable].sort((a, b) => {
            if (sortBy === 'amount') {
                return sortType === 'up' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
            } else if (sortBy === 'date') {
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

    const clearFilter=()=>{
InitialDate();
setfilteredSearchData(transactionTable)
    }

    const handleChange =()=>{
        
    }

    return (
        <>
            <div className="Instructor-Revenue-page">
                <div className="container-fluid">
                    <div className="heading">
                        <h3>Revenue Analytics</h3>
                    </div>

                    <div className="row mt-4">
                        <div className="heads">
                            <h5>Revenue</h5>
                            <h6>Get top insights about your performance</h6>
                        </div>

                        <div className="col-xl-2 col-md-4 col-xs-12">
                            <div className="datefilter">
                                <label htmlFor="fromDate">From</label>
                                <input type="date" id='fromDate' value={fromDate} onChange={(e) => handleDateFilter(e, 'fromDate')} />
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-xs-12">
                            <div className="datefilter">
                                <label htmlFor="toDate">To</label>
                                <input type="date" id="toDate" min={fromDate} value={toDate} onChange={(e) => handleDateFilter(e, 'toDate')} />
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-xs-12 d-flex align-items-end">
                            <div className="datefilter d-flex">
                                <button className={`button2 me-3 ${fromDate === '' || toDate === '' ? 'disabled' : 'active'}`}>Apply Filter</button>
                                <button className='button2 active' onClick={()=>clearFilter()}>Clear Filter</button>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-lg-3 col-md-6 col-xs-12 mt-3">
                            <div className="revenue-box">
                                <h4>+ $24,340</h4>
                                <h6>Life Time Profit</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 mt-3">
                            <div className="revenue-box">
                                <h4>+ $24,340</h4>
                                <h6>Total Profit</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 mt-3">
                            <div className="revenue-box">
                                <h4>$24,340</h4>
                                <h6>Amount Withdrawn</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 mt-3">
                            <div className="revenue-box">
                                <h4>$0</h4>
                                <h6>Amount Left</h6>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="chart mt-5" style={{ overflowX: 'auto', boxShadow: '4px 4px 8px 0px #c6c8cd', padding: '10px', borderRadius: '8px' }} id="chartArea">
                                <div className="legends mt-3 pe-2">
                                    <div className="circle me-2" style={{ backgroundColor: '#0FC6C2' }}></div>
                                    <h5 className='me-4'>Life Time Sales</h5>
                                    <div className="circle me-2" style={{ backgroundColor: '#165DFF' }}></div>
                                    <h5>Current Sales</h5>
                                </div>
                                <AreaChart width={chartwidth} height={320} data={data}
                                    margin={{ top: 40, right: 5, left: -5, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorLifeTime" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#0FC6C2" stopOpacity={0.6} />
                                            <stop offset="95%" stopColor="#0FC6C2" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#165DFF" stopOpacity={0.6} />
                                            <stop offset="95%" stopColor="#165DFF" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="name" axisLine={false} />
                                    <YAxis axisLine={false} />
                                    <CartesianGrid stroke="none" />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="LifeTime" stroke="#0FC6C2" fillOpacity={1} fill="url(#colorLifeTime)" />
                                    <Area type="monotone" dataKey="Current" stroke="#165DFF" fillOpacity={1} fill="url(#colorCurrent)" />
                                </AreaChart>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="heads">
                            <h5>Transactions</h5>
                        </div>
                        <div className="col-3">
                            <div className="inputgrp mt-3">
                                <input type="text" placeholder='Search Customer' value={searchValue} onChange={(e) => handleSearch(e)} />
                                <span><CiSearch /></span>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="transactionTable">
                                <table className='table mb-0'>
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className='d-flex justify-content-center'>
                                                    <h5>Customer </h5>
                                                    <div className='svgbtn'>
                                                        <TiArrowSortedUp style={{top:'0px'}} onClick={()=>handleFilterchart('up','customerName')}/>
                                                        <TiArrowSortedDown style={{top:'10px'}} onClick={()=>handleFilterchart('down','customerName')}/>
                                                    </div>
                                                </div>
                                            </th>
                                            <th>
                                            <div className='d-flex justify-content-center'>
                                                    <h5>Date </h5>
                                                    <div className='svgbtn'>
                                                        <TiArrowSortedUp style={{top:'0px'}} onClick={()=>handleFilterchart('up','date')}/>
                                                        <TiArrowSortedDown style={{top:'10px'}} onClick={()=>handleFilterchart('down','date')}/>
                                                    </div>
                                                </div>
                                            </th>
                                            <th>
                                            <div className='d-flex justify-content-center'>
                                                    <h5>Type </h5>
                                                </div>
                                            </th>
                                            <th>
                                            <div className='d-flex justify-content-center'>
                                                    <h5>Amount </h5>
                                                    <div className='svgbtn'>
                                                        <TiArrowSortedUp style={{top:'0px'}} onClick={()=>handleFilterchart('up','amount')}/>
                                                        <TiArrowSortedDown style={{top:'10px'}} onClick={()=>handleFilterchart('down','amount')}/>
                                                    </div>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredSearchData && filteredSearchData?.length > 0 ?
                                            filteredSearchData?.map((value, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{value?.customerName}</td>
                                                        <td>{value?.date}</td>
                                                        <td style={{ color: value?.type == 'Credit' ? 'green' : 'red' }}>{value?.type}</td>
                                                        <td>{'$'+value?.amount}</td>
                                                    </tr>
                                                )
                                            })
                                            : ''}
                                    </tbody>
                                </table>
                            </div>
                            <Paginationfn page={1} count = {Math.ceil(transactionTable?.length / 10)} handleChange={handleChange}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
