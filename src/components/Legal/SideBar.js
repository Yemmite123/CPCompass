import React from 'react'
import {
     MDBNavLink } from "mdbreact";
    

const SideBar = () => {
    return (
        <div>
            <div className="tandc_legal">
                <h1>LEGAL</h1>
                <ul className="list-unstyled">
                    <li className=""><MDBNavLink  exact activeClassName="sidebar_main_active" to="/TermsandConditions"> <span><img src="images/lock-4.svg" alt="lock"/> </span> Terms and Conditions</MDBNavLink></li>
                    <li className=""><MDBNavLink  exact activeClassName="sidebar_main_active" to="/WebDisclaimer"> <span><img src="images/disclaimer.svg" alt="lock"/> </span> Website Disclaimer</MDBNavLink></li>
                    <li className=""><MDBNavLink  exact activeClassName="sidebar_main_active" to="/CookiesPolicy"> <span><img src="images/eye.svg" alt="lock"/></span> Cookies Policy</MDBNavLink></li>
                    <li className=""><MDBNavLink  exact activeClassName="sidebar_main_active" to="/AMLPolicy"> <span><img src="images/note.svg" alt="lock"/></span> AML Policy</MDBNavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar
