import React from "react";

const Footer = () => {
  return (
    <>
      {/* Main Footer */}
      <footer className="main-footer style-two">
        <div className="auto-container">
          {/*Widgets Section*/}
          <div className="widgets-section">
            <div className="row clearfix">
              {/*Column*/}
              <div className="column col-lg-4 col-md-6 col-sm-12">
                <div className="footer-widget links-widget">
                  <h3>
                    Pages<span>.</span>
                  </h3>
                  <div className="widget-content">
                    <div className="row clearfix">
                      <div className="col-lg-5 col-md-6 col-sm-12">
                        <ul>
                          <li>
                            <a href="/">Home</a>
                          </li>
                          <li>
                            <a href="#">About</a>
                          </li>
                          <li>
                            <a href="#">Services</a>
                          </li>
                          <li>
                            <a href="#">Portfolio</a>
                          </li>
                          <li>
                            <a href="#">Contact</a>
                          </li>
                          <li>
                            <a href="#">Pricing</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-7 col-md-6 col-sm-12">
                        <ul>
                          <li>
                            <a href="#">Custor Orders</a>
                          </li>
                          <li>
                            <a href="#">Privacy &amp; Policy</a>
                          </li>
                          <li>
                            <a href="#">Support</a>
                          </li>
                          <li>
                            <a href="#">Terms &amp; Conditios</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Column*/}
              <div className="column col-lg-4 col-md-6 col-sm-12">
                <div className="footer-widget news-widget">
                  <h3>
                    News feeds<span>.</span>
                  </h3>
                  <div className="widget-content">
                    {/*News Post*/}
                    <div className="news-post">
                      <div className="post-thumb">
                        <a href="#">
                          <img src="assets/images/resource/post-thumb-1.jpg" alt="" />
                        </a>
                      </div>
                      <h5>
                        <a href="#">Commercial Apps Multi Platform</a>
                      </h5>
                      <div className="date">
                        <span className="icon flaticon-business" /> August 11,
                        2019
                      </div>
                    </div>
                    {/*News Post*/}
                    <div className="news-post">
                      <div className="post-thumb">
                        <a href="#">
                          <img src="assets/images/resource/post-thumb-2.jpg" alt="" />
                        </a>
                      </div>
                      <h5>
                        <a href="#">Leverage Spectrum Technologies</a>
                      </h5>
                      <div className="date">
                        <span className="icon flaticon-business" /> July 25,
                        2019
                      </div>
                    </div>
                    {/*News Post*/}
                    <div className="news-post">
                      <div className="post-thumb">
                        <a href="#">
                          <img src="assets/images/resource/post-thumb-3.jpg" alt="" />
                        </a>
                      </div>
                      <h5>
                        <a href="#">Efficient &amp; Mesaurable Benefits</a>
                      </h5>
                      <div className="date">
                        <span className="icon flaticon-business" /> 12th June
                        2020
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Column*/}
              <div className="column col-lg-4 col-md-6 col-sm-12">
                <div className="footer-widget newsletter-widget">
                  <h3>
                    Newsletter<span>.</span>
                  </h3>
                  <div className="widget-content">
                    <div className="newsletter-form">
                      <form
                        method="post"
                        action="https://t.commonsupport.com/callix/contact.html"
                      >
                        <div className="form-group clearfix">
                          <span className="input-icon fa flaticon-envelope" />
                          <input
                            type="email"
                            name="email"
                            defaultValue=""
                            placeholder="Enter email address"
                            required=""
                          />
                          <button
                            type="submit"
                            className="theme-btn newsletter-btn"
                          >
                            Subscribe Now
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="get-link">
                      <a href="#">Get every single offers</a>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom-two">
          <div className="auto-container">
            <div className="copyright">Copyright By@Example - 2020</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
