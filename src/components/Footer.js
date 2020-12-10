import React from 'react'
import { MDBNavLink } from "mdbreact";

const Footer = () => {
    return (
        <div>
            <footer>
             <div class="container-fluid">
                <div id="margin_space2" class="row">
                    <div class="col-md-3">
                      <div className="footer_section">
                        <h5 class="mt-3 mb-4">Product</h5>
                            <ul class="list-unstyled">
                            <li>
                               <MDBNavLink to="/">Home</MDBNavLink>
                            </li>
                            <li>
                                <MDBNavLink to="/About">About</MDBNavLink>
                            </li>
                            <li>
                                <MDBNavLink to="/Contact">Contact</MDBNavLink>
                            </li>
                            </ul>
                      </div>
                    </div>
                    <div class="col-md-3">
                        <div className="footer_section">
                            <h5 class="mt-3 mb-4">Resources</h5>
                                <ul class="list-unstyled">
                                <li>
                                  <MDBNavLink to="/FAQs">FAQs</MDBNavLink>
                                </li>
                                <li>
                                  <MDBNavLink to="/">Blog</MDBNavLink>
                                </li>
                                <li>
                                  <MDBNavLink to="/">Investment Calculator</MDBNavLink>
                                </li>
                                
                                </ul>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div className="footer_section">
                          <h5 class="mt-3 mb-4">Legal</h5>
                            <ul class="list-unstyled">
                            <li>
                              <MDBNavLink to="/TermsandConditions">Terms and Conditions</MDBNavLink>
                            </li>
                            <li>
                               <MDBNavLink to="/CookiesPolicy">Cookies Policy</MDBNavLink>
                            </li>
                            <li>
                              <MDBNavLink to="/AMLPolicy">AML Policy</MDBNavLink>
                            </li>
                            <li>
                              <MDBNavLink to="/WebDisclaimer">Website Disclaimer</MDBNavLink>
                            </li>
                            </ul>
                        </div>
                    
                    </div>
                    <div class="col-md-3">
                    <div className="footer_section">
                        <h5 class="mt-3 mb-4">Contact</h5>
                        <p>10B Layi Yusuf Crescent, Off Admiralty Way,  Lekki Phase 1, Lagos, Nigeria.</p>
                            <ul class="list-unstyled">
                            <li>
                                <a href="#/">info@comerciopartners.com</a>
                            </li>
                            <li>
                                <a href="#/">+234 (0) 1 712 0263</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="footer_space" class="row">
                    <div class="col-md-5 col-lg-4 ml-lg-0">
                        <div class="text-md-left">
                        <ul class="list-unstyled list-inline">
                            <li class="list-inline-item">
                            <a  href="https://www.facebook.com/ComercioPartners/" rel="noopener noreferrer" target="_blank" class="btn-floating btn-sm rgba-white-slight mx-1">
                                <img src="images/icons8 facebook.svg" alt="facebook"/>
                            </a>
                            </li>
                            <li class="list-inline-item">
                            <a href="https://www.instagram.com/comerciopartners/" rel="noopener noreferrer" target="_blank" class="btn-floating btn-sm rgba-white-slight mx-1">
                              <img src="images/icons8-instagram (1).svg" alt="instagram"/>
                            </a>
                            </li>
                            <li class="list-inline-item">
                            <a  href="https://ng.linkedin.com/company/comercio-partners" rel="noopener noreferrer" target="_blank" class="btn-floating btn-sm rgba-white-slight mx-1">
                                <img src="images/icons8 linkedin.svg" alt="linkedin"/>
                            </a>
                            </li>
                            <li class="list-inline-item">
                            <a  href="https://twitter.com/comerciopartner?lang=en" rel="noopener noreferrer" target="_blank" class="btn-floating btn-sm rgba-white-slight mx-1">
                                <img src="images/icons8 twitter.svg" alt="twitter"/>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div class="col-md-7 col-lg-8 Copyright">
                        <p class="text-md-right">© 2020 Copyright <a href="https://www.comerciopartners.com/" rel="noopener noreferrer" target="_blank">Comercio Partners </a>|| Designed & Developed By 
                        <a href="http://thebulb.africa/" rel="noopener noreferrer" target="_blank">
                            <strong> Thebulb.africa</strong>
                        </a>
                        </p>
                    </div>
                </div>
            </div>
            </footer>
        </div>
    )
}



export default Footer
