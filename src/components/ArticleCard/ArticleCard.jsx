import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import "./ArticleCard.css"
import { Link } from 'react-router-dom'
const ArticleCard = ({ img }) => {
    return (
        <div className="article mb-4">
            <img className="img-fluid" src={img} alt={""} />
            <div className="art-details">
                <h5>Title here</h5>
                <p className="text-black-50">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                </p>
                <Link className="read-more" to="/cases/1">
                    Read more
                    <FaArrowRightLong />
                </Link>
            </div>
        </div>
    )
}

export default ArticleCard