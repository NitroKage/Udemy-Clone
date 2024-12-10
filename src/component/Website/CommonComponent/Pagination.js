import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination';
const Paginationfn = ({page,count,handlechange}) => {
    console
    return (
        <>
            <div className='Paginations d-flex justify-content-center my-5'>
                <Pagination variant="outlined" shape="rounded"
                    page={page}
                    count={count}
                    onChange={handlechange} />
            </div>
        </>
    )
}
export default Paginationfn;
