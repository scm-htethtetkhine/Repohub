import { useState } from "react";
import { NavLink } from "react-router-dom";
import '../../assets/css/Cus.css';

const Navbar = props => {

   const [open, setOpen] = useState(false);

   const menu = () => {
    setOpen(!open)
   }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary z-1000">
                        <div className="container">
                            <a className="navbar-brand" href="#">
                                RepoHub
                            </a>
                            <div className={`${open ? "show" : ''} menu-icon`} onClick={menu} data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                                <span></span>
                                <span></span>
                            </div>
                            {/* <button className="btn border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Menu</button> */}
                        </div>
                    </nav>


                    <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                        <div className="offcanvas-header">
                            {/* <h5 className="offcanvas-title" id="offcanvasTopLabel">RepoHub</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
                        </div>
                        <div className="offcanvas-body">
                            <div className="row justify-content-center">
                                <ul className="list-group list-group-flush col-lg-9">
                                    <li className="list-group-item border-0">
                                        <NavLink to="/" className={({ isActive }) => isActive ? "text-danger h4 text-decoration-none" : "h4 text-decoration-none"}>Home</NavLink>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <NavLink to="/story" className={({ isActive }) => isActive ? "text-danger h4 text-decoration-none" : "h4 text-decoration-none"}>Story</NavLink>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <NavLink to="/services" className={({ isActive }) => isActive ? "text-danger h4 text-decoration-none" : "h4 text-decoration-none"}>Services</NavLink>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-danger h4 text-decoration-none" : "h4 text-decoration-none"}>Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;