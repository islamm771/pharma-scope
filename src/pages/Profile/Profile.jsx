import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { FaArrowRight } from 'react-icons/fa6'
import moment from 'moment';
import "./Profile.css"
import Input from '../../components/Input/Input';

const Profile = () => {
    const currentDate = moment(new Date());
    const [isAsideShow, setIsAsideShow] = useState(false)

    return (
        <main className='d-flex gap-3'>
            <Sidebar isAsideShow={isAsideShow} setIsAsideShow={setIsAsideShow} />

            <article className="profile">
                <nav>
                    <div>
                        <h3>Welcome, Amada</h3>
                        <p>{currentDate.format("ddd, DD MMMM YYYY")}</p>
                    </div>
                </nav>
                <div>
                    <div className='top'></div>
                    <div className="user d-flex align-items-center justify-content-between">
                        <div className='d-flex align-items-center gap-3'>
                            <img className='user-img' src="/img/avatar.png" alt="User" />
                            <div className='user-details'>
                                <h5>Amada Smith</h5>
                                <p>Software Developer</p>
                            </div>
                        </div>
                        <div>
                            <button className='special-btn'>Edit</button>
                        </div>
                    </div>
                    <div className="form">
                        <div className="row">
                            <div className="col-md-6">
                                <Input
                                    label={"First Name"}
                                    type={"text"}
                                    id={"first-name"}
                                    placeholder={"Enter first name"}
                                />
                            </div>
                            <div className="col-md-6">
                                <Input
                                    label={"Family Name"}
                                    type={"text"}
                                    id={"family-name"}
                                    placeholder={"Enter family name"}
                                />
                            </div>
                            <div className="col-md-6">
                                <Input
                                    label={"Username"}
                                    type={"text"}
                                    id={"username"}
                                    placeholder={"Enter username"}
                                />
                            </div>
                            <div className="col-md-6">
                                <Input
                                    label={"Phone Number"}
                                    type={"text"}
                                    id={"phone-number"}
                                    placeholder={"Enter phone number"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </article>


            <button className="toggle-nav d-md-none" onClick={() => setIsAsideShow(prev => !prev)}>
                <FaArrowRight />
            </button>
        </main>
    )
}

export default Profile