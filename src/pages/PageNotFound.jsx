import React from 'react'
import { FaSadCry } from 'react-icons/fa'
import { HiOutlineEmojiSad } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className='page-not-found'>
            <div className="container">
                <HiOutlineEmojiSad size={100} />
                <h1>404</h1>
                <h3>Page not found</h3>
                <p>
                    The page you are looking for doesn't exist or other error occurred. <br />
                    Go back and this will be fixed
                </p>
                <Link to="/" className="btn">Go to Homepage</Link>
            </div>
        </div>
    )
}

export default PageNotFound