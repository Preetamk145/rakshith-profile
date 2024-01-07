import React from "react";
import "./styles.css"
import  { projectImage1, projectImage2, projectImage3, projectImage4 } from "./images/images.js";
import HomeSection from "./Home";
import AboutSection from "./About";
import HeaderSection from "./Header";

const App = () => {





    // NAVBAR TRIGGER 'active' class on current section 

    var sections = document.querySelectorAll("section");

    var navLinks = document.querySelectorAll("header nav a");


    window.onscroll = () => {

        sections.forEach(section => {
            var top = window.scrollY;
            var offset = section.offsetTop - 150;
            var height = section.offsetHeight;

            let id = section.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove("active");
                    document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
                });
            };
        });
    }









    // -----------------------------------------







    


    // Hide navBar widget when link is clicked..


   // {/* SCROLL REVEAL JS  */ }



    // ScrollReveal({
    //     reset: true,
    //     distance: '70px',
    //     duration: 2000,
    //     delay: 200
    // });

    // ScrollReveal().reveal('.home-content, .heading', { origin: 'top', duration: 1000 })
    // ScrollReveal().reveal('.home-image, .project-box,.contact form', { origin: 'bottom', duration: 1000 })
    // ScrollReveal().reveal('.home-content h1, .about,.contact form', { origin: 'left', duration:1000 });








    return (
        <div>
            <HeaderSection />




            {/* HOME SECTION */}

            <HomeSection />



            {/* ABOUT SECTION */}

            <AboutSection />

            {/* EXPERIENCE SECTION */}

            {/* PENDING.... */}

            {/* <section className="experience" id="experience">

            </section> */}

            {/* PROJECT SECTION */}

            <section className="projects" id="projects">

                <h2 className="heading">Latest <span>Projects</span></h2>

                <div className="project-container">

                    {/* BOX 1 */}
                    <div className="project-box">
                        <img src={projectImage1} alt='project1.jpg' />

                        <div className="project-layer">
                            <h4>AyurEase: Ayurveda-Inspired Home Remedies</h4>
                            <p>Personalized medicine recommendations blending Ayurveda and modern healthcare for holistic wellness. Access via responsive web app.</p>
                        </div>

                    </div>


                    {/* BOX 3 */}
                    <div className="project-box">
                        <img src={projectImage3} alt='project1.jpg' />

                        <div className="project-layer">
                            <h4>Reverse Image Search Using Tensorflow</h4>
                            <p>Flutter app with reverse image search using TensorFlow: find similar images by analyzing visual features through deep learning</p>
                            <a href='https://github.com/raxy0/Reverse-Image-search-using-Tensorflow'  rel="noreferrer"  className="float-btn"><i className='bx bx-link-external' ></i></a>
                        </div>

                    </div>
                    {/* BOX 2 */}
                    <div className="project-box">
                        <img src={projectImage2} alt='project1.jpg' />

                        <div className="project-layer">
                            <h4>DJ system management</h4>
                            <p>DJ system DBMS project: Organize artists, tracks, playlists, events, bookings, and customer info for efficient music library and event management.</p>
                            <a href='https://github.com/raxy0/DJ-management-system' rel="noreferrer" target="_blank" className="float-btn"><i className='bx bx-link-external' ></i></a>
                        </div>

                    </div>

                    {/* BOX 4 */}
                    <div className="project-box">
                        <img src={projectImage4} alt='project1.jpg' />

                        <div className="project-layer">
                            <h4>Virtual Assistant</h4>
                            <p>This project is written in java programming language. It works on voice input and gives output through displays the text on the screen</p>
                            <a href='https://github.com/raxy0/voiceassistant-JAVA' target="_blank" rel="noreferrer" className="float-btn"><i className='bx bx-link-external' ></i></a>
                        </div>

                    </div>

                </div>
            </section>



            {/* CONTACT SECTION */}


            <section className="contact" id="contact">
                <h2 className="heading">Contact <span>Me</span></h2>

                <form>
                    <div className="input-box">
                        <input type='text' placeholder="First Name" />
                        <input type='text' placeholder="Last Name" />
                    </div>
                    <div className="input-box">
                        <input type='email' placeholder="Email Address" />
                        <input type='number' placeholder="Mobile Number" />
                    </div>

                    <textarea cols='30' rows='10' placeholder="Type something.." />
                    <input type='submit' value="Submit" className="btn" />
                </form>
            </section>



            {/* FOOTER SECTION  */}

            <footer className="footer">
                <div className="footer-text">
                    <p>Copyright &copy; 2023 | All rights are reserved.</p>
                </div>

                <div className="developer">
                    <p>Made with ❤ By <span><a href='https://github.com/raxy0'>Rakshith H Y.</a></span></p>
                </div>
                <div className="social-media">
                    <a href='https://github.com/raxy0' target="_blank" rel="noreferrer"><i className="bx bxl-github"></i></a>
                   
                    <a href='https://www.linkedin.com/in/rakshith-hy-a1b420247/' target="_blank" rel="noreferrer"><i className="bx bxl-linkedin-square"></i> </a>
                    <a href='https://twitter.com/HyRakshith?t=bQiYcKk66ygxee2868iWEQ&s=09' target="_blank" rel="noreferrer"><i className="bx bxl-twitter"></i> </a>
                </div>

                <div className="top-button">
                    <a href='#home'><i className='bx bx-chevron-up'></i></a>
                </div>
            </footer>









        </div>
    );
}

export default App;
