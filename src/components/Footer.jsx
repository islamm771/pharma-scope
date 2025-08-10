import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <h2>
                            <a href="#" className="logo">MernWord</a>
                        </h2>
                        <p className="text-white-50">
                            Empowering <span>Pharmacists</span> with Knowledge
                        </p>
                        <ul className="list-unstyled d-flex gap-3 icons">
                            <li>
                                <a className="text-black p-2 rounded-circle bg-white" href="#">
                                    <FaFacebook
                                        className="facebook"
                                        size={18}
                                    />
                                </a>
                            </li>
                            <li>
                                <a className="text-black p-2 rounded-circle bg-white" href="#">
                                    <FaTwitter className='twitter' size={18} />
                                </a>
                            </li>
                            <li>
                                <a className="text-black p-2 rounded-circle bg-white" href="#">
                                    <FaInstagram className='instagram' size={18} />
                                </a>
                            </li>
                            <li>
                                <a className="text-black p-2 rounded-circle bg-white" href="#">
                                    <FaLinkedin className='youtube' size={18} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-3 ps-lg-5 pe-lg-5">
                        <h5>Menu</h5>
                        <ul className="list-unstyled menu">
                            <li>
                                <Link className="text-decoration-none text-white-50" to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/services/drug_id"} className="text-decoration-none text-white-50">
                                    Drug I.D.
                                </Link>
                            </li>
                            <li>
                                <Link to={"/services/drug_interactions"} className="text-decoration-none text-white-50">
                                    Drug Interactions
                                </Link>
                            </li>
                            <li>
                                <Link to={"/services/food_interactions"} className="text-decoration-none text-white-50">
                                    Food Interactions
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-3 ps-lg-5 pe-lg-5">
                        <h5>Help Center</h5>
                        <ul className="help list-unstyled">
                            <li>
                                <a className="text-decoration-none text-white-50" href="#">Help
                                    Center</a>
                            </li>
                            <li>
                                <a className="text-decoration-none text-white-50" href="#">Account
                                    Information</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 ps-lg-5 pe-lg-5">
                        <h5>Contact us</h5>
                        <ul className="contact list-unstyled">
                            <li className="text-white-50">
                                <i className="fa-solid fa-phone me-2"></i> +20 1272753203
                            </li>
                            <li className="text-white-50">
                                <i className="fa-solid fa-envelope me-2"></i> info@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="copy-right">
                    <p className="text-center m-0">
                        &copy; MernWord 2023. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer