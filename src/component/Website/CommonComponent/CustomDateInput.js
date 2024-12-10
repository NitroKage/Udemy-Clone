import React, { useState } from 'react'
import '../../../css/customDate.scss'
import { MdDateRange } from "react-icons/md";
export default function customDateInput() {
    const [showDatePicker, setshowDatePicker] = useState(true)
    const [month, setmonth] = useState('');
    const [year, setyear] = useState('');
    const monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const handleoption = () => {
        setshowDatePicker(true)
        const date = new Date();
        console.log()
        setmonth(date.getMonth());
        setyear(date.getFullYear());
    }



    return (
        <div className='custom-input'>
            <input type="date" />
            <div className="input-tag d-flex" onClick={() => handleoption()}>
                <h5>DD-MM-YYYY</h5>
                <h4><MdDateRange /></h4>
            </div>
            {
                showDatePicker ?
                    <div className="date-option">
                        <div className="box d-flex justify-content-between">
                            <h5>
                                {monthsName[month + 1]},{year}
                            </h5>
                            <select name="" id="">
                                <option value="">Select Format</option>
                                <option value="DD/mm/yyyy">DD/MM/YYYY</option>
                                <option value="yyyy/mm/dd">YYYY/MM/DD</option>
                                <option value="mm/dd/yyyy">YYYY/MM/DD</option>
                            </select>
                        </div>
                    </div>
                    : ''}
        </div>
    )
}
