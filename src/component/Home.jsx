import React from "react";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import ServicesSlider from './ServicesSlider';
import TeamSlider from './TeamSlider';
import BlogSlider from './BlogSlider';
const Home = () => {
  return (
    <>
    <Navbar />
      {/* End / Hidden Bar */}
      {/* Banner Section */}
      <section className="banner-section banner-five">
        <div className="hero-shape-one" />
        <div className="hero-shape-two" />
        <div className="hero-shape-three" />
        <div className="hero-shape-four" />
        <div className="hero-shape-five" />
        <div className="dotted-bubble-01" />
        <div className="dotted-bubble-02" />
        <div className="dotted-bubble-03" />
        <div
          className="left-shape-layer"
          style={{ backgroundImage: "url(assets/images/background/shape-1.png)" }}
        />
        <div className="auto-container">
          <div className="content-box">
            <div className="content clearfix">
              <div className="inner">
                <div className="sub-title">digital product maker</div>
                <h1>Creative Agency</h1>
                <div className="link-box clearfix">
                  <a href="contact.html" className="theme-btn btn-style-nine">
                    <span className="btn-title">Get A Quote</span>
                  </a>
                  <a href="about.html" className="theme-btn btn-style-five">
                    <span className="btn-title">learn More</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="scroll-down">
              <div className="scroll-to-target" data-target="#scroll-section">
                <span className="icon flaticon-right-arrow" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Banner Section */}
      {/*About Section*/}
      <section className="about-section-three" id="scroll-section">
        <div className="auto-container">
          <div className="row clearfix">
            {/*Text Column*/}
            <div className="text-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner">
                <div className="sec-title-three left-aligned">
                  <div className="sub-title">about us</div>
                  <h2 className="text-light">we will help you make profit.</h2>
                  <div className="lower-text">
                    Create your own Modern visual style on the other hand we
                    denounce with righteous indignation and dislike.
                  </div>
                </div>
                <div className="text-content">
                  <div className="text-block">
                    <div className="title">
                      <span className="count">01</span>
                      <h4 className="text-light">Our Mission</h4>
                    </div>
                    <div className="text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation.
                    </div>
                  </div>
                  <div className="text-block">
                    <div className="title">
                      <span className="count">02</span>
                      <h4 className="text-light">Our vision</h4>
                    </div>
                    <div className="text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Image Column*/}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner clearfix">
                <figure
                  className="image paroller"
                  data-paroller-factor="-0.07"
                  data-paroller-factor-lg="-0.07"
                  data-paroller-factor-md="-0.07"
                  data-paroller-factor-sm="-0.07"
                  data-paroller-type="foreground"
                  data-paroller-direction="horizontal"
                >
                  <img src="assets/images/resource/featured-image-10.jpg" alt="" />
                </figure>
                <figure
                  className="image paroller"
                  data-paroller-factor="-0.07"
                  data-paroller-factor-lg="-0.07"
                  data-paroller-factor-md="-0.07"
                  data-paroller-factor-sm="-0.07"
                  data-paroller-type="foreground"
                  data-paroller-direction="vertical"
                >
                  <img src="assets/images/resource/featured-image-11.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Skills Section*/}
      <section className="skills-section">
        <div className="auto-container">
          <div className="row clearfix">
            {/*Text Column*/}
            <div className="text-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner">
                <div className="sec-title-three left-aligned">
                  <div className="sub-title">our skills</div>
                  <h2 className="text-light">Experience True Business</h2>
                  <div className="lower-text">
                    Create your own Modern visual style on the other hand we
                    denounce with righteous indignation and dislike.
                  </div>
                </div>
                <div className="content">
                  <div className="counter-block-two">
                    <div className="inner">
                      <div className="graph-outer">
                        <input
                          type="text"
                          className="dial"
                          data-fgcolor="#39b87b"
                          data-bgcolor="none"
                          data-width={150}
                          data-height={150}
                          data-linecap="normal"
                          defaultValue={75}
                          data-thickness="0.075"
                        />
                        <div className="inner-text count-box">
                          <span
                            className="count-text"
                            data-stop={75}
                            data-speed={2000}
                          />
                          <span className="sign">%</span>
                        </div>
                      </div>
                      <h4 className="text-light">work done</h4>
                      <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </div>
                    </div>
                  </div>
                  <div className="counter-block-two">
                    <div className="inner">
                      <div className="graph-outer">
                        <input
                          type="text"
                          className="dial"
                          data-fgcolor="#ff6262"
                          data-bgcolor="none"
                          data-width={150}
                          data-height={150}
                          data-linecap="normal"
                          defaultValue={90}
                          data-thickness="0.075"
                        />
                        <div className="inner-text count-box">
                          <span
                            className="count-text"
                            data-stop={90}
                            data-speed={2000}
                          />
                          <span className="sign">%</span>
                        </div>
                      </div>
                      <h4 className="text-light">client satisfied</h4>
                      <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Image Column*/}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner">
                <figure className="image">
                  <img src="assets/images/resource/featured-image-12.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Services Section*/}
      <ServicesSlider/>
      {/*Team Section*/}
      <TeamSlider/>
      {/*News Section*/}
      <BlogSlider/>
      {/*Contact Section*/}
      <section className="info-section">
        <div className="bubble-dotted">
          <span className="dotted dotted-1" />
          <span className="dotted dotted-2" />
          <span className="dotted dotted-3" />
          <span className="dotted dotted-4" />
          <span className="dotted dotted-5" />
          <span className="dotted dotted-6" />
          <span className="dotted dotted-7" />
          <span className="dotted dotted-8" />
          <span className="dotted dotted-9" />
          <span className="dotted dotted-10" />
        </div>
        <div
          className="image-layer"
          style={{ backgroundImage: "url(assets/images/background/image-5.jpg)" }}
        />
        <div className="faded-text style-two light">
          <div className="f-text">
            <span>contact</span>
          </div>
        </div>
        <div className="auto-container">
          <div className="sec-title-three light centered">
            <div className="sub-title">contact</div>
            <h2>get in touch</h2>
          </div>
          <div className="info">
            <div className="row clearfix">
              {/*Info Block*/}
              <div className="info-box col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="inner hvr-bob">
                  <div className="icon-box">
                    <span className="flaticon-call" />
                  </div>
                  <h4>phone number</h4>
                  <ul>
                    <li>
                      <a href="tel:+8767676575498">+8767 6765 7549 8</a>
                    </li>
                    <li>
                      <a href="tel:+8767676575498">+8(098) 6765 7549 8</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*Info Block*/}
              <div className="info-box col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="inner hvr-bob">
                  <div className="icon-box">
                    <span className="flaticon-envelope" />
                  </div>
                  <h4>email address</h4>
                  <ul>
                    <li>
                      <a href="mailto:info@webmail.com">info@webmail.com</a>
                    </li>
                    <li>
                      <a href="mailto:example@mail.co">example@mail.co</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*Info Block*/}
              <div className="info-box col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="inner hvr-bob">
                  <div className="icon-box">
                    <span className="flaticon-worldwide-1" />
                  </div>
                  <h4>web address</h4>
                  <ul>
                    <li>
                      <a href="http://www.exapmple.com/">exapmple.com</a>
                    </li>
                    <li>
                      <a href="http://www.jobs.exapmple.com/">
                        jobs.exapmple.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*Info Block*/}
              <div className="info-box col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="inner hvr-bob">
                  <div className="icon-box">
                    <span className="flaticon-placeholder-3" />
                  </div>
                  <h4>office address</h4>
                  <ul>
                    <li>14/A, Kiroban City,</li>
                    <li>London, UK</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="call-to-box">
            <div className="sec-title-three light centered">
              <div className="sub-title">call to action</div>
              <h2>
                anything on your mind <br />
                let us know.
              </h2>
              <div className="link-box clearfix">
                <a href="contact.html" className="theme-btn btn-style-three">
                  <span className="btn-title">get a quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <Footer />
    </>
  );
};

export default Home;
