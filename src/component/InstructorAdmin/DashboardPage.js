import React, { useState, useLayoutEffect } from 'react'
import arrowup from '../../Assets/InstructorAdminImages/arrow-up.png'
import arrowupblue from '../../Assets/InstructorAdminImages/arrow-up-blue.png'
import arrowupyellow from '../../Assets/InstructorAdminImages/arrow-up-yellow.png'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
export default function DashboardPage() {
    const [boxheight, setboxheight] = useState('');

    const data = [
        {
            "name": "1",
            "Total": 4000,
            "Recieved": 2400,
            "Pending": 2400
        },
        {
            "name": "2",
            "Total": 3000,
            "Recieved": 1398,
            "Pending": 2210
        },
        {
            "name": "3",
            "Total": 2000,
            "Recieved": 9800,
            "Pending": 2290
        },
        {
            "name": "4",
            "Total": 2780,
            "Recieved": 3908,
            "Pending": 2000
        },
        {
            "name": "5",
            "Total": 1890,
            "Recieved": 4800,
            "Pending": 2181
        },
        {
            "name": "6",
            "Total": 2390,
            "Recieved": 3800,
            "Pending": 2500
        },
        {
            "name": "7",
            "Total": 3490,
            "Recieved": 4300,
            "Pending": 2100
        },
        {
            "name": "8",
            "Total": 3490,
            "Recieved": 4300,
            "Pending": 2100
        },
        {
            "name": "9",
            "Total": 3490,
            "Recieved": 4300,
            "Pending": 2100
        },
        {
            "name": "10",
            "Total": 3490,
            "Recieved": 4300,
            "Pending": 2100
        },
        {
            "name": "11",
            "Total": 3490,
            "Recieved": 4300,
            "Pending": 2100
        },
        {
            "name": "12",
            "Total": 3490,
            "Recieved": 4300,
            "Pending": 2100
        },
    ];

    useLayoutEffect(() => {
        let element1 = document.getElementById('boxes1')?.clientHeight;
        let element2 = document.getElementById('boxes2')?.clientHeight;
        let element3 = document.getElementById('boxes3')?.clientHeight;
        setboxheight(Math.max(element1, element2, element3))

    }, [])

    const courses = [
        {
            Price:'Free',
            courseName:'Beginner’s Guide to Design',
            chapters:'13',
            orders:'25',
            certificate:'25',
            reviews:'25',
            addedToShelf:'500'
        },
        {
            Price:'Free',
            courseName:'Beginner’s Guide to Design',
            chapters:'13',
            orders:'25',
            certificate:'25',
            reviews:'25',
            addedToShelf:'500'
        },
        {
            Price:'Free',
            courseName:'Beginner’s Guide to Design',
            chapters:'13',
            orders:'25',
            certificate:'25',
            reviews:'25',
            addedToShelf:'500'
        },
    ]

    return (
        <>
            <div className="Instructor-dashboard-page">
                <div className="container-fluid">
                    <div className="heading">
                        <h3>Dashboard</h3>
                    </div>

                    <div className="row">
                        <div className="col-xl-4 col-xs-12">
                            <div className="row">
                                <div className="col-xl-12 col-md-4 col-xs-12 outerbox">
                                    <div className="box left-box" id="boxes1" style={{ height: boxheight + 'px' }}>
                                        <div className="imgs">
                                            <img src={arrowupblue} alt="arrow" width={'70%'} />
                                        </div>
                                        <div className="text">
                                            <h4>$1K</h4>
                                            <h6>Courses Commission</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-md-4 col-xs-12 outerbox">
                                    <div className="box left-box" id="boxes2" style={{ height: boxheight + 'px' }}>
                                        <div className="imgs">
                                            <img src={arrowup} alt="arrow" width={'70%'} />
                                        </div>
                                        <div className="text">
                                            <h4>$800.0</h4>
                                            <h6>Received Commission</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-md-4 col-xs-12 outerbox">
                                    <div className="box left-box" id="boxes3" style={{ height: boxheight + 'px' }}>
                                        <div className="imgs">
                                            <img src={arrowupyellow} alt="arrow" width={'70%'} />
                                        </div>
                                        <div className="text">
                                            <h4>$200.00</h4>
                                            <h6>Pending Commission</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-xs-12">
                            <div className="outerbox-right">
                                <div className="box right-box">
                                    <h4>Sales</h4>

                                    <div className="chart" style={{ overflowX: 'auto' }}>
                                        <AreaChart width={840} height={320} data={data}
                                            margin={{ top: 40, right: 0, left: 0, bottom: 0 }}>
                                            <defs>
                                                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.6} />
                                                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                                                </linearGradient>
                                                <linearGradient id="colorRecieved" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#22C55E" stopOpacity={0.6} />
                                                    <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
                                                </linearGradient>
                                                <linearGradient id="colorPending" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#EAB308" stopOpacity={0.6} />
                                                    <stop offset="95%" stopColor="#EAB308" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <XAxis dataKey="name" axisLine={false} />
                                            <YAxis axisLine={false} />
                                            <CartesianGrid stroke="none" />
                                            <Tooltip />
                                            <Area type="monotone" dataKey="Total" stroke="#3B82F6" fillOpacity={1} fill="url(#colorTotal)" />
                                            <Area type="monotone" dataKey="Recieved" stroke="#22C55E" fillOpacity={1} fill="url(#colorRecieved)" />
                                            <Area type="monotone" dataKey="Pending" stroke="#EAB308" fillOpacity={1} fill="url(#colorPending)" />
                                        </AreaChart>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Reviews">
                        <div className="heads">
                            <h3>Reviews</h3>
                        </div>
                        <div className="row">
                            <div className="col-xl-2 col-lg-3 col-md-4 col-xs-12">
                                <div className="reviewBox">
                                    <h5>Total Review</h5>
                                    <h3>1000</h3>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-xs-12">
                                <div className="reviewBox">
                                    <h5>1 Star Reviews</h5>
                                    <div className='d-flex'>
                                        <h3 className='me-2'>1000</h3>
                                        <h6 style={{ backgroundColor: 'red' }}>1.0</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-xs-12">
                                <div className="reviewBox">
                                    <h5>2 Star Reviews</h5>
                                    <div className='d-flex'>
                                        <h3 className='me-2'>1000</h3>
                                        <h6 style={{ backgroundColor: '#CA8A04' }}>2.0</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-xs-12">
                                <div className="reviewBox">
                                    <h5>3 Star Reviews</h5>
                                    <div className='d-flex'>
                                        <h3 className='me-2'>1000</h3>
                                        <h6 style={{ backgroundColor: '#FACC15' }}>3.0</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-xs-12">
                                <div className="reviewBox">
                                    <h5>4 Star Reviews</h5>
                                    <div className='d-flex'>
                                        <h3 className='me-2'>1000</h3>
                                        <h6 style={{ backgroundColor: '#4ADE80' }}>4.0</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-xs-12">
                                <div className="reviewBox">
                                    <h5>5 Star Reviews</h5>
                                    <div className='d-flex'>
                                        <h3 className='me-2'>1000</h3>
                                        <h6 style={{ backgroundColor: '#16A34A' }}>5.0</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Reviews">
                        <div className="heads">
                            <h3>Courses</h3>
                        </div>
                        <div className="row">
                            {
                                courses && courses?.length > 0 ? 
                                courses?.map((value,index)=>{
return(
                            <div className="col-lg-4 col-md-6 col-xs-12" key={index}>
                                <div className="courseBox">
                                    <h5>{value?.Price}</h5>
                                    <h4>{value?.courseName}</h4>
                                    <hr />
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="sub-box">
                                                <h6>{value?.Price}</h6>
                                                <p>Price</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="sub-box">
                                                <h6>{value?.chapters}</h6>
                                                <p>Chapters</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="sub-box">
                                                <h6>{value?.orders}</h6>
                                                <p>Orders</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="sub-box">
                                                <h6>{value?.certificate}</h6>
                                                <p>Certificates</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="sub-box">
                                                <h6>{value?.reviews}</h6>
                                                <p>Reviews</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="sub-box">
                                                <h6>{value?.addedToShelf}</h6>
                                                <p>Added To Shelf</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
)
                                })
                            :''}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
