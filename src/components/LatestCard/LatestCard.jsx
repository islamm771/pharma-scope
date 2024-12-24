import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import "./LatestCard.css"

const LatestCard = ({ img }) => {
    return (
        <div className='latest-card'>
            <img className="img-fluid" src={img} alt={""} />
            <div className="card-details">
                <h5>Title here</h5>
                <p className="text-black-50">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                </p>
                <a className="read-more" href="#">
                    Read More
                    <FaArrowRightLong size={14} />
                </a>
            </div>
        </div>
    )
}

export default LatestCard