import React from 'react'
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

const About = () => {
  return (
    <>
    <Navbar/>
    {/* Banner Section */}
    <section className="page-banner">
      <div
        className="image-layer"
        style={{ backgroundImage: "url(images/background/banner-image-1.jpg)" }}
      />
      <div className="banner-inner">
        <div className="faded-text light">
          <div className="f-text">
            <span>About</span>
          </div>
        </div>
        <div className="auto-container">
          <div className="inner-container clearfix">
            <h1>About us</h1>
            <div className="page-nav">
              <ul className="bread-crumb clearfix">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">About us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*End Banner Section */}
    {/*Welcome Section*/}
    <section className="welcome-section">
      <div className="auto-container">
        <div className="content">
          <div className="icon-box">
            <img src="images/icons/about-icon.png" alt="" />
          </div>
          <div className="sub-title">25 years of experience</div>
          <h2>Hello welcome to our website.</h2>
          <div className="lower-text">
            We harness the strength of our multi-disciplinary teams to craft the
            perfect solutions. Diverse range of work for our esteemed clients
            worldwide is our main target.
          </div>
          <div className="links">
            <a href="about.html" className="theme-btn btn-style-two">
              <span className="btn-title">
                <span className="icon flaticon-briefcase" /> hire us
              </span>
            </a>
            <a href="contact.html" className="theme-btn btn-style-one">
              <span className="btn-title">contact us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    {/*Counter Section*/}
    <section className="counter-section-two">
      <div className="auto-container">
        <div className="row clearfix">
          {/* Counter Block */}
          <div className="counter-block-three col-lg-3 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="graph-outer">
                <input
                  type="text"
                  className="dial"
                  data-fgcolor="#ff6000"
                  data-bgcolor="#06303d"
                  data-width={200}
                  data-height={200}
                  data-linecap="normal"
                  defaultValue={73}
                  data-thickness="0.07"
                />
                <div className="icon-box">
                  <span className="pe-7s-arc" />
                </div>
              </div>
              <div className="inner-text count-box">
                <span className="count-text" data-stop={73} data-speed={2000} />
                <span className="sign">%</span>
              </div>
              <div className="title">Client Satifaction</div>
            </div>
          </div>
          {/* Counter Block */}
          <div className="counter-block-three col-lg-3 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="graph-outer">
                <input
                  type="text"
                  className="dial"
                  data-fgcolor="#ff6000"
                  data-bgcolor="#06303d"
                  data-width={200}
                  data-height={200}
                  data-linecap="normal"
                  defaultValue={65}
                  data-thickness="0.07"
                />
                <div className="icon-box">
                  <span className="pe-7s-diamond" />
                </div>
              </div>
              <div className="inner-text count-box">
                <span className="count-text" data-stop={65} data-speed={2000} />
                <span className="sign">%</span>
              </div>
              <div className="title">ux coverage</div>
            </div>
          </div>
          {/* Counter Block */}
          <div className="counter-block-three col-lg-3 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="graph-outer">
                <input
                  type="text"
                  className="dial"
                  data-fgcolor="#ff6000"
                  data-bgcolor="#06303d"
                  data-width={200}
                  data-height={200}
                  data-linecap="normal"
                  defaultValue={56}
                  data-thickness="0.07"
                />
                <div className="icon-box">
                  <span className="pe-7s-magic-wand" />
                </div>
              </div>
              <div className="inner-text count-box">
                <span className="count-text" data-stop={56} data-speed={2000} />
                <span className="sign">%</span>
              </div>
              <div className="title">cup of coffee</div>
            </div>
          </div>
          {/* Counter Block */}
          <div className="counter-block-three col-lg-3 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="graph-outer">
                <input
                  type="text"
                  className="dial"
                  data-fgcolor="#ff6000"
                  data-bgcolor="#06303d"
                  data-width={200}
                  data-height={200}
                  data-linecap="normal"
                  defaultValue={39}
                  data-thickness="0.07"
                />
                <div className="icon-box">
                  <span className="pe-7s-world" />
                </div>
              </div>
              <div className="inner-text count-box">
                <span className="count-text" data-stop={39} data-speed={2000} />
                <span className="sign">%</span>
              </div>
              <div className="title">country cover</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Services Section*/}
    <section className="services-section-four">
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
      <div className="faded-text">
        <div className="f-text">
          <span>services</span>
        </div>
      </div>
      <div className="auto-container">
        <div className="sec-title centered">
          <div className="sub-title">services</div>
          <h2>What We Do</h2>
        </div>
        <div className="tabs-box services-tabs">
          <div className="tab-buttons">
            <div className="row clearfix">
              <div className="col-lg-2 col-md-4 col-md-4 col-sm-6">
                <div className="btn-inner tab-btn active-btn" data-tab="#tab-1">
                  <span className="icon-bg pe-7s-target" />
                  <span className="icon pe-7s-target" />
                  <span className="txt">ux/ui design</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-md-4 col-sm-6">
                <div className="btn-inner tab-btn" data-tab="#tab-2">
                  <span className="icon-bg pe-7s-star" />
                  <span className="icon pe-7s-star" />
                  <span className="txt">web design</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-md-4 col-sm-6">
                <div className="btn-inner tab-btn" data-tab="#tab-3">
                  <span className="icon-bg pe-7s-science" />
                  <span className="icon pe-7s-science" />
                  <span className="txt">marketing</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-md-4 col-sm-6">
                <div className="btn-inner tab-btn" data-tab="#tab-4">
                  <span className="icon-bg pe-7s-disk" />
                  <span className="icon pe-7s-disk" />
                  <span className="txt">consultancy</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-md-4 col-sm-6">
                <div className="btn-inner tab-btn" data-tab="#tab-5">
                  <span className="icon-bg pe-7s-joy" />
                  <span className="icon pe-7s-joy" />
                  <span className="txt">gaming</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-md-4 col-sm-6">
                <div className="btn-inner tab-btn" data-tab="#tab-6">
                  <span className="icon-bg pe-7s-portfolio" />
                  <span className="icon pe-7s-portfolio" />
                  <span className="txt">24/7 support</span>
                </div>
              </div>
            </div>
          </div>
          <div className="tabs-content">
            {/*Tab*/}
            <div className="tab active-tab" id="tab-1">
              <div className="tab-inner">
                <div className="featured-service">
                  <div className="row clearfix">
                    {/* Image Column */}
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                      <div className="inner">
                        <div className="image-box">
                          <img
                            src="images/resource/featured-image-16.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    {/* Text Column */}
                    <div className="text-column col-lg-6 col-md-12 col-sm-12">
                      <div className="inner">
                        <div className="sec-title left-aligned">
                          <div className="sub-title">UX/UI Design</div>
                          <h2>diverse range of kind work.</h2>
                        </div>
                        <div className="text">
                          We harness the strength of our multi-disciplinary teams
                          to craft the perfect solutions. Diverse range of work
                          for our esteemed clients worldwide is our main target.
                        </div>
                        <div className="link-box clearfix">
                          <a
                            href="portfolio-single.html"
                            className="theme-btn btn-style-two"
                          >
                            <span className="btn-title">
                              <span className="icon fa fa-dollar-sign" /> 500.00
                            </span>
                          </a>
                          <a
                            href="portfolio-single.html"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-title">contact us</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Tab*/}
            <div className="tab" id="tab-2">
              <div className="tab-inner">
                <div className="featured-service">
                  <div className="row clearfix">
                    {/* Image Column */}
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                      <div className="inner">
                        <div className="image-box">
                          <img
                            src="images/resource/featured-image-16.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    {/* Text Column */}
                    <div className="text-column col-lg-6 col-md-12 col-sm-12">
                      <div className="inner">
                        <div className="sec-title left-aligned">
                          <div className="sub-title">Web Design</div>
                          <h2>diverse range of kind work.</h2>
                        </div>
                        <div className="text">
                          We harness the strength of our multi-disciplinary teams
                          to craft the perfect solutions. Diverse range of work
                          for our esteemed clients worldwide is our main target.
                        </div>
                        <div className="link-box clearfix">
                          <a
                            href="portfolio-single.html"
                            className="theme-btn btn-style-two"
                          >
                            <span className="btn-title">
                              <span className="icon fa fa-dollar-sign" /> 500.00
                            </span>
                          </a>
                          <a
                            href="portfolio-single.html"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-title">contact us</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Tab*/}
            <div className="tab" id="tab-3">
              <div className="tab-inner">
                <div className="featured-service">
                  <div className="row clearfix">
                    {/* Image Column */}
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                      <div className="inner">
                        <div className="image-box">
                          <img
                            src="images/resource/featured-image-16.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    {/* Text Column */}
                    <div className="text-column col-lg-6 col-md-12 col-sm-12">
                      <div className="inner">
                        <div className="sec-title left-aligned">
                          <div className="sub-title">Marketing</div>
                          <h2>diverse range of kind work.</h2>
                        </div>
                        <div className="text">
                          We harness the strength of our multi-disciplinary teams
                          to craft the perfect solutions. Diverse range of work
                          for our esteemed clients worldwide is our main target.
                        </div>
                        <div className="link-box clearfix">
                          <a
                            href="portfolio-single.html"
                            className="theme-btn btn-style-two"
                          >
                            <span className="btn-title">
                              <span className="icon fa fa-dollar-sign" /> 500.00
                            </span>
                          </a>
                          <a
                            href="portfolio-single.html"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-title">contact us</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Tab*/}
            <div className="tab" id="tab-4">
              <div className="tab-inner">
                <div className="featured-service">
                  <div className="row clearfix">
                    {/* Image Column */}
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                      <div className="inner">
                        <div className="image-box">
                          <img
                            src="images/resource/featured-image-16.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    {/* Text Column */}
                    <div className="text-column col-lg-6 col-md-12 col-sm-12">
                      <div className="inner">
                        <div className="sec-title left-aligned">
                          <div className="sub-title">Consultancy</div>
                          <h2>diverse range of kind work.</h2>
                        </div>
                        <div className="text">
                          We harness the strength of our multi-disciplinary teams
                          to craft the perfect solutions. Diverse range of work
                          for our esteemed clients worldwide is our main target.
                        </div>
                        <div className="link-box clearfix">
                          <a
                            href="portfolio-single.html"
                            className="theme-btn btn-style-two"
                          >
                            <span className="btn-title">
                              <span className="icon fa fa-dollar-sign" /> 500.00
                            </span>
                          </a>
                          <a
                            href="portfolio-single.html"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-title">contact us</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Tab*/}
            <div className="tab" id="tab-5">
              <div className="tab-inner">
                <div className="featured-service">
                  <div className="row clearfix">
                    {/* Image Column */}
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                      <div className="inner">
                        <div className="image-box">
                          <img
                            src="images/resource/featured-image-16.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    {/* Text Column */}
                    <div className="text-column col-lg-6 col-md-12 col-sm-12">
                      <div className="inner">
                        <div className="sec-title left-aligned">
                          <div className="sub-title">Gaming</div>
                          <h2>diverse range of kind work.</h2>
                        </div>
                        <div className="text">
                          We harness the strength of our multi-disciplinary teams
                          to craft the perfect solutions. Diverse range of work
                          for our esteemed clients worldwide is our main target.
                        </div>
                        <div className="link-box clearfix">
                          <a
                            href="portfolio-single.html"
                            className="theme-btn btn-style-two"
                          >
                            <span className="btn-title">
                              <span className="icon fa fa-dollar-sign" /> 500.00
                            </span>
                          </a>
                          <a
                            href="portfolio-single.html"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-title">contact us</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Tab*/}
            <div className="tab" id="tab-6">
              <div className="tab-inner">
                <div className="featured-service">
                  <div className="row clearfix">
                    {/* Image Column */}
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                      <div className="inner">
                        <div className="image-box">
                          <img
                            src="images/resource/featured-image-16.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    {/* Text Column */}
                    <div className="text-column col-lg-6 col-md-12 col-sm-12">
                      <div className="inner">
                        <div className="sec-title left-aligned">
                          <div className="sub-title">24/7 support</div>
                          <h2>diverse range of kind work.</h2>
                        </div>
                        <div className="text">
                          We harness the strength of our multi-disciplinary teams
                          to craft the perfect solutions. Diverse range of work
                          for our esteemed clients worldwide is our main target.
                        </div>
                        <div className="link-box clearfix">
                          <a
                            href="portfolio-single.html"
                            className="theme-btn btn-style-two"
                          >
                            <span className="btn-title">
                              <span className="icon fa fa-dollar-sign" /> 500.00
                            </span>
                          </a>
                          <a
                            href="portfolio-single.html"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-title">contact us</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Testimonial Section*/}
    <section className="testimonial-section">
      <div
        className="image-layer"
        style={{ backgroundImage: "url(images/background/image-1.jpg)" }}
      />
      <div className="auto-container">
        <div className="testimonial-carousel owl-theme owl-carousel">
          <div className="slide-item">
            <div className="testimonial-block">
              <div className="inner-box">
                <div className="content">
                  <div className="image">
                    <img
                      src="images/resource/author-image-1.jpg"
                      alt=""
                      title=""
                    />
                    <div className="icon-box">
                      <span className="flaticon-left-quote" />
                    </div>
                  </div>
                  <div className="info">
                    <h4>Rosalina D. WIlliam</h4>
                    <div className="designation">founder, kilix co.</div>
                  </div>
                  <div className="text">
                    It's difficult to find quality Agency work and it's very
                    expensive in uk. Engaging example was a masterstroke as I'm
                    getting solutions.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-item">
            <div className="testimonial-block">
              <div className="inner-box">
                <div className="content">
                  <div className="image">
                    <img
                      src="images/resource/author-image-14.jpg"
                      alt=""
                      title=""
                    />
                    <div className="icon-box">
                      <span className="flaticon-left-quote" />
                    </div>
                  </div>
                  <div className="info">
                    <h4>Jikiliki Boruna</h4>
                    <div className="designation">Developer, kilix co.</div>
                  </div>
                  <div className="text">
                    It's difficult to find quality Agency work and it's very
                    expensive in uk. Engaging example was a masterstroke as I'm
                    getting solutions.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-item">
            <div className="testimonial-block">
              <div className="inner-box">
                <div className="content">
                  <div className="image">
                    <img
                      src="images/resource/author-image-15.jpg"
                      alt=""
                      title=""
                    />
                    <div className="icon-box">
                      <span className="flaticon-left-quote" />
                    </div>
                  </div>
                  <div className="info">
                    <h4>Hilix Drawnik</h4>
                    <div className="designation">Manager, kilix co.</div>
                  </div>
                  <div className="text">
                    It's difficult to find quality Agency work and it's very
                    expensive in uk. Engaging example was a masterstroke as I'm
                    getting solutions.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </>
  

  )
}

export default About