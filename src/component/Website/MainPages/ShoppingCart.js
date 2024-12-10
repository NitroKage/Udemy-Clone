import React,{useState,useEffect, useContext} from 'react'
import courseimage from '../../../Assets/courseimage.png'
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { getCartList,removeCartList } from '../../../Access/actionCreator';
import { AppContext } from '../../../context/AppContext';
export default function ShoppingCart() {
    const { LoginData } = useContext(AppContext);
    const navigate = useNavigate();
    const [cartData, setcartData] = useState([])
    // const CartData = [
    //     {
    //         id: 'course1',
    //         Image: courseimage,
    //         courseName: 'Introduction to User Experience Desig',
    //         instructorName: 'John Doe',
    //         Rating: '4.6',
    //         TotalRating: '250',
    //         TotalHours: '22',
    //         TotalLectures: '155',
    //         Level: 'All Level',
    //         Price: '45.00',
    //         Discount: '5'
    //     },
    //     {
    //         id: 'course1',
    //         Image: courseimage,
    //         courseName: 'Introduction to User Experience Desig',
    //         instructorName: 'John Doe',
    //         Rating: '4.6',
    //         TotalRating: '250',
    //         TotalHours: '22',
    //         TotalLectures: '155',
    //         Level: 'Beginner',
    //         Price: '45.00',
    //         Discount: '10'
    //     },
    // ];

    const handleButtons = (type, id) => {
        if (type == 'SaveLater') {

        } else if (type == 'remove') {
            removeCartList(LoginData._id,id,(callback)=>{
                if(callback.status === 'success'){
                    getCartData()
                }
            })
        }
    }

    const OrderDetail = (type) => {
        const Price = CartData.reduce((total, num) => total + parseFloat(num.Price), 0)
        const Discount = CartData.reduce((total, num) => total + parseFloat(num.Price) * (parseFloat(num.Discount) / 100), 0)
        if (type == 'Price') {
            return Price;
        }
        else if (type == 'Discount') {
            return Discount;
        } else if (type == 'Total') {
            return Price - Discount;
        }
    }

    const handleCheckout = () => {
        const total = OrderDetail('Total')
        navigate('/checkout', { state: total })
    }

    const StarFuntion = (rating) => {
        let rates = Number(rating)
        if (rates === 5) {
            return <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></>
        } else if (rates > 4 && rates < 5){
            return <><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></>
        }else if(rates === 4){
            return <><FaStar /><FaStar /><FaStar /><FaStar /><CiStar /></>
        }else if(rates > 3 && rates < 4){
            return <><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /><CiStar /></>
        }else if(rates === 3){
            return <><FaStar /><FaStar /><FaStar /><CiStar /><CiStar /></>
        }else if(rates > 2 && rates < 3){
            return <><FaStar /><FaStar /><FaRegStarHalfStroke /><CiStar /><CiStar /></>
        }else if(rates === 2){
            return <><FaStar /><FaStar /><CiStar /><CiStar /><CiStar /></>
        }else if(rates > 1 && rates < 2){
            return <><FaStar /><FaRegStarHalfStroke /><CiStar /><CiStar /><CiStar /></>
        }else if(rates >= 0 && rates < 1){
            return <><FaStar /><CiStar /><CiStar /><CiStar /><CiStar /></>
        }
    }

    useEffect(()=>{
        getCartData()
    },[])

    const getCartData = () => {
        getCartList(LoginData._id, (callback) => {
            if (callback.status === 'success') {
                setcartData(callback?.data)
            }
        })
    }

    return (
        <>
            <div className="shoppingcartPage">
                <div className="container">
                    <div className="heading">
                        <h5>Shopping Cart</h5>
                    </div>

                    {
                        cartData && cartData?.coursesList?.length > 0 ?

                            <div className="row" style={{ marginBottom: '50px' }}>
                                <div className="col-xl-9 mt-4">
                                    <div className="courses">
                                        <div className="totalcourses">
                                            <h4>{cartData?.coursesList?.length || '0'} Course in cart</h4>
                                            <hr />
                                        </div>
                                        <div className="coursescardss">
                                            {
                                                cartData && cartData?.coursesList?.length > 0 ?
                                                cartData?.coursesList?.map((value, index) => {
                                                        return (
                                                            <div className="row courseCard" key={index}>
                                                                <div className="col-lg-3 col-md-12 pt-2">
                                                                    <div className="squarebox">
                                                                        <img src={value?.courseImage} alt="courseimage" width={'100%'} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-7 col-md-9 pt-2">
                                                                    <div className="texts">
                                                                        <h4>{value?.courseName}</h4>
                                                                        <p className='instructorName'>By {value?.instructor.firstName + ' ' + value?.instructor.lastName}</p>
                                                                        <p className='rating'><span>{value?.courseRating} {StarFuntion(value?.courseRating)}</span> <span className='ratingNumber'>({value?.totalRatings} rating) |</span> {value?.totalChapters} Total Lectures. {value?.courseLevel}</p>
                                                                        <p className='options'><span style={{ color: 'red' }} onClick={() => handleButtons('remove', value?.courseId)}>Remove</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-2 col-md-3 pt-2">
                                                                    <div className="pricecol">
                                                                        <h5>${value?.Price}</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                    : ''}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 mt-4">
                                    <div className="totalPrices">
                                        <h4>Order Details</h4>

                                        <div className="pricebox">
                                            <div className="box1">
                                                <h5>Price</h5>
                                                <h5 className='amount fw-bold'>₹{cartData.orderDetails.totalPrice}</h5>
                                            </div>
                                            <div className="box1">
                                                <h5>Discount</h5>
                                                <h5 className='amount fw-bold'>- ₹{cartData.orderDetails.discount}</h5>
                                            </div>
                                            <hr />
                                            <div className="box1 mb-0">
                                                <h5 className='total fw-bold'>Total</h5>
                                                <h5 className='total fw-bold'>₹{cartData.orderDetails.NetPayableAmount}</h5>
                                            </div>
                                        </div>

                                        <button className='buttoncheckout w-100' onClick={() => handleCheckout()}>Proceed to Checkout</button>
                                    </div>
                                </div>
                            </div>
                            :

                            <div className="row" style={{ marginBottom: '50px' }}>
                                <div className="col-12 mt-3">
                                    <div className="courses">
                                        <div className="totalcourses">
                                            <h4 className='fs-4'><b>0 Course in cart</b></h4>
                                        </div>

                                        <div className="EmptyCart">
                                            <h6>Your cart is empty. Keep shopping to find a course!</h6>
                                            <button className='buttoncheckout w-25 mt-3' onClick={() => navigate('/')}>Keep Shopping</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}
