import React from "react";
import "./styles.css"
import profileImage from "./images/images.js";
import Typed from "typed.js";


const HomeSection = () =>{


    const firstElement = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(firstElement.current, {
            strings: ['Developer.', 'Gamer'],
            typeSpeed: 70,
            smartBackspace: true,
            backSpeed: 50,
            loop: true,
            loopCount: Infinity,
            shuffle: false,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);



    return(
        <section className="home" id="home">

                <div className="home-content">
                    <h3>Hi, My Name is</h3>
                    <h1>Rakshith H Y</h1>
                    <h3>And I'm a <span ref={firstElement}></span></h3>


                    {/* SOCIA MEDIA ICONS */}

                    <div className="social-media">
                        <a href='https://github.com/raxy0' target="_blank" rel="noreferrer"><i className="bx bxl-github"></i></a>
                        
                        <a href='https://www.linkedin.com/in/rakshith-hy-a1b420247/' target="_blank" rel="noreferrer"><i className="bx bxl-linkedin-square"></i> </a>
                        <a href='https://twitter.com/HyRakshith?t=bQiYcKk66ygxee2868iWEQ&s=09' target="_blank" rel="noreferrer"><i className="bx bxl-twitter"></i> </a>
                    </div>
                    {/* RESUME LINK  */}
                    <a href='https://drive.google.com/file/d/1jiXTrIrz9zKzpQrv4VZpgHfKJAP_Adpl/view?usp=drive_link' className="float-btn btn">Download Resume</a>


                </div>


                {/* SACHIN DSILVA's IMAGE */}
                <div className="home-image">
                    <img src={profileImage} alt=""/>
                </div>
            </section>
    );
}

export default HomeSection;
