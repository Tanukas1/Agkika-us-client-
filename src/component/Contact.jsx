import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'

const Contact = () => {
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
            <span>contact</span>
          </div>
        </div>
        <div className="auto-container">
          <div className="inner-container clearfix">
            <h1>contact us</h1>
            <div className="page-nav">
              <ul className="bread-crumb clearfix">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*End Banner Section */}
    {/*Contact Section*/}
    <section className="contact-section">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="form-column col-lg-6 col-md-12">
            <div className="inner">
              <div className="sec-title left-aligned">
                <div className="sub-title">get in touch</div>
                <h2>drop us a line with estimate</h2>
              </div>
              <div className="form-box">
                <div className="default-form contact-form">
                  <form
                    method="post"
                    action="https://t.commonsupport.com/callix/sendemail.php"
                    id="contact-form"
                    noValidate="novalidate"
                  >
                    <div className="service-select clearfix">
                      <div className="radio-block">
                        <input type="radio" name="service" id="radio-1" />
                        <label htmlFor="radio-1">Web Design</label>
                      </div>
                      <div className="radio-block">
                        <input
                          defaultChecked=""
                          type="radio"
                          name="service"
                          id="radio-2"
                        />
                        <label htmlFor="radio-2">UIx Design</label>
                      </div>
                      <div className="radio-block">
                        <input type="radio" name="service" id="radio-3" />
                        <label htmlFor="radio-3">Game Design</label>
                      </div>
                      <div className="radio-block">
                        <input type="radio" name="service" id="radio-4" />
                        <label htmlFor="radio-4">Icon Design</label>
                      </div>
                      <div className="radio-block">
                        <input type="radio" name="service" id="radio-5" />
                        <label htmlFor="radio-5">consultacny</label>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="field-inner">
                        <input
                          type="text"
                          name="username"
                          placeholder="Enter your name"
                          required=""
                          defaultValue=""
                        />
                        <div className="field-icon">
                          <span className="flaticon-people" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="field-inner">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          required=""
                          defaultValue=""
                        />
                        <div className="field-icon">
                          <span className="flaticon-envelope" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="field-inner">
                        <textarea
                          name="message"
                          placeholder="Type your message"
                          required=""
                          defaultValue={""}
                        />
                        <div className="field-icon">
                          <span className="flaticon-edit" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="btn-box">
                        <button type="submit" className="theme-btn btn-style-two">
                          <span className="btn-title">Submit Now</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="map-column col-lg-6 col-md-12">
            <div className="inner">
              {/*Map Box*/}
              <div className="map-box">
                <div
                  className="map-canvas"
                  data-zoom={12}
                  data-lat="-37.817085"
                  data-lng="144.955631"
                  data-type="roadmap"
                  data-hue="#ffc400"
                  data-title="Singapore"
                  data-icon-path="images/icons/map-marker.png"
                  data-content="Singapore VIC 3000, USA<br><a href='mailto:info@youremail.com'>info@youremail.com</a>"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Call To Section*/}
    <section className="call-to-section">
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
      <div className="auto-container">
        <div className="content">
          <div className="sub-title">Tell us about your project</div>
          <h2>Ready to work together?</h2>
          <div className="link-box">
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
    <Footer/>
  </>
  
  )
}

export default Contact