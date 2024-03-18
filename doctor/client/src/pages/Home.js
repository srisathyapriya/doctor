import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faUserMd } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faProcedures } from '@fortawesome/free-solid-svg-icons';
import { faHospital } from '@fortawesome/free-solid-svg-icons';
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import { faAmbulance } from '@fortawesome/free-solid-svg-icons';
import { faPills } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import Login from '../pages/Login';
import Register from '../pages/Register';



function Home() {
    return (
        <>


            <header className="header">
                <a href="#" className="logo"><FontAwesomeIcon icon={faHeartbeat} />Selfcare.</a>
                <nav className="navbar">
                    <a href="#home">home</a>
                    <a href="#services">services</a>
                    <a href="#about">about</a>
                    <a href="#doctors">doctors</a>
                    <a href="#book">book</a>
                    <button className="btn" onClick={() => window.location.href = 'http://localhost:3000/login'}>Login</button>
                    <button className="btn" onClick={() => window.location.href = 'http://localhost:3000/register'}>Register</button>



                </nav>

                <div id="menu-btn"><FontAwesomeIcon icon={faBars} /></div>

            </header>
            <section className="home" id="home">
                <div className="image">
                    <img src="https://t3.ftcdn.net/jpg/02/92/83/26/360_F_292832654_TTlDOQ0rntu8cXy1b5DWb9WRaX36oWU8.jpg" alt="" />
                </div>
                <div className="content">
                    <h3>stay safe, stay healthy</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur minus dolorum deserunt? Earum culpa obcaecati laborum quod? Illum ratione obcaecati quo nemo adipisci, velit quibusdam asperiores! Quos repellat laudantium dolorem?</p>
                    <a href="#footer" className="btn">contact us<span> <FontAwesomeIcon icon={faChevronRight} /></span> </a>
                </div>
            </section>

            <section className="icons-container">
                <div className="icons">
                    <FontAwesomeIcon icon={faUserMd} className="user-md-icon" />
                    <h3>140+</h3>
                    <p>doctors at work</p>
                </div>
                <div className="icons">
                    <FontAwesomeIcon icon={faUsers} className="users-icon" />
                    <h3>1040+</h3>
                    <p>satisfied patients</p>
                </div>
                <div className="icons">
                    <FontAwesomeIcon icon={faProcedures} className="procedures-icon" />
                    <h3>500+</h3>
                    <p>bed facility</p>
                </div>
                <div className="icons">
                    <FontAwesomeIcon icon={faHospital} className="hospital-icon" />
                    <h3>80+</h3>
                    <p>available hospitals</p>
                </div>



            </section>

            <section className="services" id="services">
                <h1 className="heading">our <span>services</span></h1>
                <div className="box-container">
                    <div className="box">
                        <FontAwesomeIcon icon={faNotesMedical} className="notes-medical-icon" />
                        <h3>free checkups</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quos reprehenderit eius, </p>
                        <a href="#" className="btn">learn more<span><FontAwesomeIcon icon={faChevronRight} /></span></a>
                    </div>

                    <div className="box">
                        <FontAwesomeIcon icon={faAmbulance} className="ambulance-icon" />
                        <h3>ambulances</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quos reprehenderit eius, </p>
                        <a href="#" className="btn">learn more<span><FontAwesomeIcon icon={faChevronRight} /></span></a>
                    </div>

                    <div className="box">
                        <FontAwesomeIcon icon={faUserMd} className="user-md-icon" />
                        <h3>expert doctors</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quos reprehenderit eius, </p>
                        <a href="#" className="btn">learn more<span><FontAwesomeIcon icon={faChevronRight} /></span></a>
                    </div>

                    <div className="box">
                        <FontAwesomeIcon icon={faPills} className="pills-icon" />
                        <h3>medicines</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quos reprehenderit eius, </p>
                        <a href="#" className="btn">learn more<span><FontAwesomeIcon icon={faChevronRight} /></span></a>
                    </div>

                    <div className="box">
                        <FontAwesomeIcon icon={faProcedures} className="procedures-icon" />
                        <h3>bed facility</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quos reprehenderit eius,  </p>
                        <a href="#" className="btn">learn more<span><FontAwesomeIcon icon={faChevronRight} /></span></a>
                    </div>

                    <div className="box">
                        <FontAwesomeIcon icon={faHeartbeat} className="heartbeat-icon" />
                        <h3>total cloudflare</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quos reprehenderit eius,</p>
                        <a href="#" className="btn">learn more<span><FontAwesomeIcon icon={faChevronRight} /></span></a>
                    </div>


                </div>
            </section>

            <section className="about" id="about">
                <h1 className="heading"><span>about</span>us</h1>
                <div className="row">
                    <div className="image">
                        <img src="https://media.istockphoto.com/id/1221362151/video/doctors-and-nurses-team.jpg?s=640x640&k=20&c=1AvxQUGRLpRNEmfgXJyfzfyEgh-cFkaMJesLvifEuKs=" alt="" />
                    </div>
                    <div className="content">
                        <h3>we take care of your healthy life</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem itaque asperiores corporis, quis vero placeat atque dolore aspernatur, rerum sed, esse similique explicabo impedit perspiciatis inventore. Soluta ut odio quos!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facilis non corporis voluptate praesentium debitis consequuntur exercitationem quia error nesciunt!</p>
                        <a href="#" className="btn">learn more<span><FontAwesomeIcon icon={faChevronRight} /></span></a>
                    </div>
                </div>
            </section>

            <section className="doctors" id="doctors">
                <h1 className="heading">our<span> doctors</span></h1>
                <div className="box-container">
                    <div className="box">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyf16vtTOv5LWcUjoB919c45IIxSO9LP2UnCTvJzacUUDE9d__qosLgWbpGFqUGaz6Xk&usqp=CAU" alt="" />
                        <h3>Varshini</h3>
                        <span>expert doctor</span>
                        <div className="share">
                            <a href="#"> <FontAwesomeIcon icon={faFacebookF} className="fab fa-facebook-f" /></a>
                            <a href="#"> <FontAwesomeIcon icon={faTwitter} className="fab fa-twitter" /></a>
                            <a href="#" > <FontAwesomeIcon icon={faInstagram} className="fab fa-instagram" /></a>
                            <a href="#" ><FontAwesomeIcon icon={faLinkedin} className="fab fa-linkedin" /></a>
                        </div>
                    </div>
                    <div className="box">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyf16vtTOv5LWcUjoB919c45IIxSO9LP2UnCTvJzacUUDE9d__qosLgWbpGFqUGaz6Xk&usqp=CAU" alt="" />
                        <h3>Sathya</h3>
                        <span>expert doctor</span>
                        <div className="share">
                            <a href="#"> <FontAwesomeIcon icon={faFacebookF} className="fab fa-facebook-f" /></a>
                            <a href="#"> <FontAwesomeIcon icon={faTwitter} className="fab fa-twitter" /></a>
                            <a href="#" > <FontAwesomeIcon icon={faInstagram} className="fab fa-instagram" /></a>
                            <a href="#" ><FontAwesomeIcon icon={faLinkedin} className="fab fa-linkedin" /></a>
                        </div>
                    </div>
                    <div className="box">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyf16vtTOv5LWcUjoB919c45IIxSO9LP2UnCTvJzacUUDE9d__qosLgWbpGFqUGaz6Xk&usqp=CAU" alt="" />
                        <h3>Sandhiya</h3>
                        <span>expert doctor</span>
                        <div className="share">
                            <a href="#"> <FontAwesomeIcon icon={faFacebookF} className="fab fa-facebook-f" /></a>
                            <a href="#"> <FontAwesomeIcon icon={faTwitter} className="fab fa-twitter" /></a>
                            <a href="#" > <FontAwesomeIcon icon={faInstagram} className="fab fa-instagram" /></a>
                            <a href="#" ><FontAwesomeIcon icon={faLinkedin} className="fab fa-linkedin" /></a>
                        </div>
                    </div>
                    <div className="box">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyf16vtTOv5LWcUjoB919c45IIxSO9LP2UnCTvJzacUUDE9d__qosLgWbpGFqUGaz6Xk&usqp=CAU" alt="" />
                        <h3>Sakthi</h3>
                        <span>expert doctor</span>
                        <div className="share">
                            <a href="#"> <FontAwesomeIcon icon={faFacebookF} className="fab fa-facebook-f" /></a>
                            <a href="#"> <FontAwesomeIcon icon={faTwitter} className="fab fa-twitter" /></a>
                            <a href="#" > <FontAwesomeIcon icon={faInstagram} className="fab fa-instagram" /></a>
                            <a href="#" ><FontAwesomeIcon icon={faLinkedin} className="fab fa-linkedin" /></a>
                        </div>
                    </div>
                    <div className="box">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyf16vtTOv5LWcUjoB919c45IIxSO9LP2UnCTvJzacUUDE9d__qosLgWbpGFqUGaz6Xk&usqp=CAU" alt="" />
                        <h3>Saritha</h3>
                        <span>expert doctor</span>
                        <div className="share">
                            <a href="#"> <FontAwesomeIcon icon={faFacebookF} className="fab fa-facebook-f" /></a>
                            <a href="#"> <FontAwesomeIcon icon={faTwitter} className="fab fa-twitter" /></a>
                            <a href="#" > <FontAwesomeIcon icon={faInstagram} className="fab fa-instagram" /></a>
                            <a href="#" ><FontAwesomeIcon icon={faLinkedin} className="fab fa-linkedin" /></a>
                        </div>
                    </div>
                    <div className="box">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyf16vtTOv5LWcUjoB919c45IIxSO9LP2UnCTvJzacUUDE9d__qosLgWbpGFqUGaz6Xk&usqp=CAU" alt="" />
                        <h3>Ranjani</h3>
                        <span>expert doctor</span>
                        <div class="share">
                            <a href="#"> <FontAwesomeIcon icon={faFacebookF} className="fab fa-facebook-f" /></a>
                            <a href="#"> <FontAwesomeIcon icon={faTwitter} className="fab fa-twitter" /></a>
                            <a href="#" > <FontAwesomeIcon icon={faInstagram} className="fab fa-instagram" /></a>
                            <a href="#" ><FontAwesomeIcon icon={faLinkedin} className="fab fa-linkedin" /></a>
                        </div>
                    </div>
                </div>
                <span />
            </section>

            <section className="book" id="book">
                <h1 className="heading"> <span>book</span> now </h1>
                <div className="row">
                    <div className="image">
                        <img src="https://t3.ftcdn.net/jpg/02/60/79/68/360_F_260796882_QyjDubhDDk0RZXV9z7XBEw9AKnWCizXy.jpg" alt="" />
                    </div>
                    <form action="">
                        <h3>book appointment</h3>
                        <input type="text" placeholder="Your Name" className="box" />
                        <input type="number" placeholder="Your Number" className="box" />
                        <input type="email" placeholder="Your email" className="box" />
                        <input type="date" className="box" />
                        <input type="submit" value="booknow" className="btn" />
                    </form>
                </div>
            </section>

            <section className="footer" id="footer">
                <div className="box-container">
                    <div className="box">
                        <h3>qick links</h3>
                        <a href="#"> <FontAwesomeIcon icon={faChevronRight} />home </a>
                        <a href="#"><FontAwesomeIcon icon={faChevronRight} /> services </a>
                        <a href="#"><FontAwesomeIcon icon={faChevronRight} />about </a>
                        <a href="#"><FontAwesomeIcon icon={faChevronRight} /> doctors </a>
                        <a href="#"><FontAwesomeIcon icon={faChevronRight} /> book </a>

                    </div>
                    <div class="box">
                        <h3>our services</h3>
                        <a href="#"><FontAwesomeIcon icon={faChevronRight} /> dental care</a>
                        <a href="#"><FontAwesomeIcon icon={faChevronRight} /> message therapy</a>
                        <a href="#"><FontAwesomeIcon icon={faChevronRight} />cardioloty </a>
                        <a href="#"><FontAwesomeIcon icon={faChevronRight} />diagnosis </a>
                        <a href="#"><FontAwesomeIcon icon={faChevronRight} /> ambulance service </a>
                    </div>
                    <div class="box">
                        <h3>contact info</h3>
                        <a href="#"><FontAwesomeIcon icon={faPhone} className="fab fa-phone" /> +123-456-789</a>
                        <a href="#"><FontAwesomeIcon icon={faPhone} className="fab fa-phone" /> +111-222-333</a>
                        <a href="#"><FontAwesomeIcon icon={faEnvelope} className="fab fa-envelope" />sandhiya.r2022ece@sece.ac.in</a>
                        <a href="#"><FontAwesomeIcon icon={faEnvelope} className="fab fa-envelope" />srisathyapriya.r2022ece@sece.ac.in</a>
                        <a href="#"><FontAwesomeIcon icon={faEnvelope} className="fab fa-envelope" />srisivasakthi.r2022ece@sece.ac.in</a>
                        <a href="#"><FontAwesomeIcon icon={faMapMarkedAlt} className="fab fa-map-marked-alt" />Tamil Nadu, india-010101</a>
                    </div>
                    <div class="box">
                        <h3>follow us</h3>
                        <a href="#"><FontAwesomeIcon icon={faFacebookF} className="fab fa-facebook-f" /> facebook</a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} className="fab fa-twitter" /> twitter</a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} className="fab fa-instagram" />instagram</a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedin} className="fab fa-linkedin" />linkedin</a>
                        <a href="#"><FontAwesomeIcon icon={faWhatsapp} className="fab fa-whatsapp" />whatsapp</a>
                        <a href="#"><FontAwesomeIcon icon={faPinterest} className="fab fa-pinterest" />pinterest</a>
                    </div>
                </div>

            </section >
        </>
    );
};

export default Home