import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import visaimage from '../../../Assets/visaimage.png'
import { TiTick } from "react-icons/ti";
import { TbExclamationMark } from "react-icons/tb";
export default function CheckoutPage() {
    const [totalPrice, setTotalPrice] = useState(0)
    const [creditdebit, setcreditdebit] = useState(false)
    const [PageType, setPageType] = useState('checkoutPage')
    const navigate = useNavigate();
    const location = useLocation();
    const [cardDetail, setcardDetail] = useState({
        name: '',
        cardNumber: '',
        expireMonth: '',
        expireYear: '',
        cvv: '',
    })
    useEffect(() => {
        setTotalPrice(location?.state)
    }, [])

    const MonthOption = () => {
        let options = [];
        for (let i = 0; i < 12; i++) {
            options.push(<option key={i} value={i + 1}>{i + 1}</option>);
        }
        return options;
    }

    const YearOption = () => {
        const date = new Date();
        let currentYear = Number(date.getFullYear())
        let options = [];
        for (let i = currentYear - 1; i < currentYear + 9; i++) {
            options.push(<option key={i} value={i + 1}>{i + 1}</option>);
        }
        return options;
    }

    const handleDetail = (e) => {
        const { name, value } = e.target;
        if (name === 'cardNumber' && value?.length > 12) {
            return
        }
        if (name === 'cvv' && value?.length > 3) {
            return
        }
        setcardDetail({
            ...cardDetail,
            [name]: value
        })
    }

    const btnDisabled = Object.values(cardDetail).some(value => ((value === '') || (value === undefined) || (value === null)))

    const handlePayBtn = () => {
        setPageType('SuccessPage')
        setTimeout(()=>{
navigate('/')   
        },2000)
    }
    return (
        <>
            {
                PageType === 'checkoutPage' ?
                    <div className="CheckoutPage">
                        <div className="container">
                            <div className="heading">
                                <h5>Checkout</h5>
                            </div>
                            <div className="row" style={{ marginBottom: '50px' }}>
                                <div className="col-lg-9 mt-4">
                                    <div className="Payment-section">
                                        <h4>Payment Method</h4>
                                        <div className="option">
                                            <div className="top-grp">
                                                <div className="inputgrp">
                                                    <input type="radio" id="creditdebit" className='inputtag' checked={creditdebit} onChange={() => setcreditdebit(!creditdebit)} />
                                                    <label htmlFor="creditdebit" className='labeltag'>Credit/Debit Card</label>
                                                </div>
                                                <div className="imgss text-end">
                                                    <img src={visaimage} alt="visaimage" width={'50%'} />
                                                </div>
                                            </div>
                                            {
                                                creditdebit ?
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="formgrp2">
                                                                <label htmlFor="name">Name On Card</label>
                                                                <input type="text" id='name' name='name' placeholder='Name On Card' value={cardDetail.name} onChange={(e) => handleDetail(e)} />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="formgrp2">
                                                                <label htmlFor="cardNumber">Card Number</label>
                                                                <input type="number" id='cardNumber' name='cardNumber' placeholder='card Number' value={cardDetail.cardNumber} onChange={(e) => handleDetail(e)} />
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="formgrp2">
                                                                <label htmlFor="expiryDate">Expiry Date</label>
                                                                <div className="selectsbox">
                                                                    <div className="grp me-2">
                                                                        <select name="expireMonth" value={cardDetail.expireMonth} onChange={(e) => handleDetail(e)}>
                                                                            <option value="">Select Month</option>
                                                                            {MonthOption()}
                                                                        </select>
                                                                    </div>
                                                                    <h5 style={{ margin: '0px 5px', fontSize: '35px' }}>/ </h5>
                                                                    <div className="grp">
                                                                        <select name="expireYear" value={cardDetail.expireYear} onChange={(e) => handleDetail(e)}>
                                                                            <option value="">Select Year</option>
                                                                            {YearOption()}
                                                                        </select>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="formgrp2">
                                                                <label htmlFor="CVV">CVV</label>
                                                                <input type="number" id='CVV' placeholder='Enter CVV' name='cvv' value={cardDetail.cvv} onChange={(e) => handleDetail(e)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    : ''}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="payoptions">
                                        <h4>${totalPrice}</h4>
                                        <button className={`buttoncheckout w-100 ${btnDisabled === true ? 'disabled' : 'active'}`} disabled={btnDisabled} onChange={() => handlePayBtn()}>Proceed To Pay</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    PageType === 'SuccessPage' ?
                        <div className="successPage">
                            <div className="container">
                                <div className="box">
                                    <div className="circle" style={{backgroundColor:'green'}}>
                                        <TiTick />
                                    </div>
                                    <h4>Order Complete</h4>
                                    <h5>You Will Receive a confirmation email soon! </h5>
                                </div>
                            </div>
                        </div>
                        :
                        PageType === 'FailurePage' ?
                        <div className="successPage">
                            <div className="container">
                                <div className="box">
                                    <div className="circle" style={{backgroundColor:'red'}}>
                                        <TbExclamationMark />
                                    </div>
                                    <h4>Order Failed</h4>
                                    <h5>Error Occured Please Try again later!</h5>
                                </div>
                            </div>
                        </div>
                        : ''}
        </>
    )
}
