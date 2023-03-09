import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCard = () => {
  return (
    <div className='d-flex align-content-center justify-content-center'>
        <div className='p-5 '>
            <h3 className=' align-content-center mb-3'>Your Cart is Empty</h3>
            <Link to={"/"}>
                <button className='btn btn-outline-primary'>Go Shopping</button>
            </Link>
        </div>
    </div>
  )
}

export default EmptyCard