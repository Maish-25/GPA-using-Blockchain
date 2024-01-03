///https://github.com/NageshMandal/Evergreen-Foundation/blob/main/index.html

import React, { useState, useEffect } from "react";
import "./CrowdfundingInterface.css"; // Import your CSS file here


const CrowdfundingInterface = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Load Razorpay script when the component mounts
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    
    <html lang="en">
      <div className={`navbar ${darkMode ? "dark-mode" : ""}`}></div>
      <head>
        <meta charset="UTF-8" />
        <meta
          http-equiv="X-UA-Compatible"
          content="IE=edge"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link
          rel="stylesheet"
          href="style.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootsstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script src="https://kit.fontawesome.com/c4254e24a8.js"></script>
        <script
          src="https://kit.fontawesome.com/739255457e.js"
          crossorigin="anonymous"
        ></script>
        <title>Evergreen</title>
      </head>
      <body>
        <div className={`navbar ${darkMode ? "dark-mode" : ""}`}>
          <header>
            <img
              className="logo"
              src="./images/logo.png"
              alt="Logo"
            />
            <nav>
              <ul className="nav__links">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Gallery</a>
                </li>
                <li>
                  <a href="#">Chat</a>
                </li>
              </ul>
            </nav>
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <a className="cta" href="/script.js">
              Donate
            </a>
          </header>
        </div>
        <div className="col-2">
          <div className="img-1">
            <img src="./images/img1.jpg" alt="" />
            <div className="para-1">
              <p>
                “Be kind, for everyone <br />
                you meet is fighting a<br /> hard battle.”
                Ian Maclaren
              </p>
            </div>
          </div>
          <div className="heading">
            <p className="hed">
              EVER<span>GREEN</span>
            </p>
            <div className="para">
              <p>
                “We make a living by what we get, <br />
                but we make a life by what we give.”
                – Winston Churchill.
              </p>
              <p className="p2">
                “Change will not come if we wait for some
                other person, <br />sor if we wait for
                some other time. We are the ones we’
                <br />ve been waiting for. We are the
                change that we seek.” Barack Obama
              </p>
            </div>
            <div className="btn">
              <form>
              <div
                  className="razorpay-embed-btn"
                  data-url="https://pages.razorpay.com/pl_KSbSHCvzORt14U"
                  data-text="Donate Now"
                  data-color="#FF3D00"
                  data-size="large"
                >
                  <script
                    async
                    type="text/javascript"
                    src="https://cdn.razorpay.com/static/embed_btn/bundle.js"
                  ></script>
                </div>
              </form>
              <p className="p3">
                “Giving is not just about making a
                donation. <br />
                It is about making a difference.”
                Kathy Calvin
              </p>
            </div>
          </div>
          <div className="img">
            <img
              src="/images/image1.png"
              alt=""
              width="374px"
            />
          </div>
        </div>
        <div className="col-3">
          <div className="img-3">
            <img src="/images/image3.jpg" alt="" />
          </div>
          <div className="para-3">
            <p>
              “At the end of the day it’s not about
              what you have or even what you’<br />
              ve accomplished… it’s about who you’ve
              lifted up, who you’<br />
              ve made better. It’s about what you’ve
              given back.” <br />
              Denzel Washington
            </p>
          </div>
        </div>
        <footer>
          <div className="col-4">
            <div className="about">
              <p>
                Made With ❤️ By{" "}
                <a href="">Maish</a>
              </p>
            </div>
            <div className="contact">
              <i className="tweet fa-brands fa-twitter"></i>
              <i className="insta fa-brands fa-instagram"></i>
              <i className="git fa-brands fab fa-github"></i>
              <i className="in fa-brands fa-linkedin"></i>
              <i className="tele fa-brands fa-telegram"></i>
            </div>
          </div>
        </footer>
        <div className="btn-p">
          <img
            className="btn-2"
            src="../images/Crowdfunding-1-1024x458.png"
            alt=""
          />
          <a
            className="btn-1"
            href="/mobilescreen/phone.html"
          >
            Let's Go
          </a>
        </div>
      </body>
    </html>
  );
};

export default CrowdfundingInterface;
