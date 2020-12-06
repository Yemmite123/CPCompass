import React, { Component } from 'react'
import AppDownlod from '../AppDownlod'

export class ContactUs extends Component {
    render() {
        return (
            <div>
                 <div id="contact" class="container-fluid">
                    <div id="margin_space3" class="row">
                        <div class="col-md-12"
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                            <div className="text-center contact_section">
                                <h1>We would love to hear from you!</h1>
                                <p>We are here to answer any questions you may have. Send us an email, chat us up, call or talk to us on our social media channels and we’ll respond as soon as we can.</p>
                            </div>
                                <div id="contact_container" class="row">
                                    <div class="col-md-6">
                                      <div className="contact_box">
                                        <div className="contact_con">
                                         <img src="images/thumbup.svg" alt=""/>
                                         <h1>Social media</h1>
                                         <p>Look us up on social media</p>
                                         <div class="text-md-left">
                                            <ul class="list-unstyled list-inline">
                                                <li class="list-inline-item">
                                                <a  href="#/" class="btn-floating btn-sm rgba-white-slight">
                                                    <img src="images/icons2 facebook.svg" alt="facebook"/>
                                                </a>
                                                </li>
                                                <li class="list-inline-item">
                                                <a href="#/" class="btn-floating btn-sm rgba-white-slight">
                                                <img src="images/icons2-instagram (1).svg" alt="instagram"/>
                                                </a>
                                                </li>
                                                <li class="list-inline-item">
                                                <a  href="#/" class="btn-floating btn-sm rgba-white-slight">
                                                    <img src="images/icons2 linkedin.svg" alt="linkedin"/>
                                                </a>
                                                </li>
                                                <li class="list-inline-item">
                                                <a  href="#/" class="btn-floating btn-sm rgba-white-slight">
                                                    <img src="images/icons2 twitter.svg" alt="twitter"/>
                                                </a>
                                                </li>
                                            </ul>
                                            </div>
                                      </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                      <div className="contact_box">
                                        <div className="contact_con">
                                         <img src="images/support.svg" alt=""/>
                                         <h1>For Support</h1>
                                         <p><a href="mailto:info@comerciopartners.com">info@comerciopartners.com</a></p>
                                         <p>+234 (0) 1 712 0263</p>
                                      </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <br/> <br/> <br/>

                <div class="container-fluid">
                    <div id="margin_space3" class="row">
                        <div class="col-md-5"
                            data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            <div className="address">
                                <h1 className="mb-5"><span className="location"><img src="images/location.svg" alt="marker"/></span>Our Corporate Address</h1>
                                <div id="map-container-google-1" class=" map-container">
                                    <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.655557095222!2d3.4532406148222177!3d6.438263525934417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf501fb178d33%3A0x48dccf34f25546a1!2s10%20Layi%20Yusuf%20Cresent%2C%20Lekki%20Phase%20I%2C%20Lekki!5e0!3m2!1sen!2sng!4v1606798800469!5m2!1sen!2sng"  frameborder="0"
                                        style={{'border':'0'}} allowfullscreen></iframe>
                                </div>
                                <p>10B Layi Yusuf Crescent Off Admiralty Way Lekki Phase 1, Lagos, Nigeria.</p>
                                <p><a href="#/">Get directions <span><img src="images/right-arrow.svg" alt="right-arrow"/></span></a></p>
                            </div>
                        </div>
                        <div class="col-md-2 ">
                             <div className="text-center vertical_line">
                                
                             </div>
                        </div>
                        <div class="col-md-5" 
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        >
                       
                            <form class="text-center  p-5 contact_form_inpt" action="#!">
                                <h1 class="mb-4">Shoot us a message </h1>
                                <input type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="Your name"/>
                                <input type="email" id="defaultContactFormEmail" class="form-control mb-4" placeholder="Email"/>
                                <input type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="Subject of message"/>
                                <div class="form-group">
                                    <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="5" placeholder="Your message"></textarea>
                                </div>
                                <button class="btn btn-block" type="submit">Send message</button>
                            </form>

                        </div>
                    </div>
                </div>
                <AppDownlod/>
            </div>
        )
    }
}

export default ContactUs
