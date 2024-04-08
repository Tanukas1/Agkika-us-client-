import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Main Header */}
      <header className="main-header header-style-five">
        {/* Header Upper */}
        <div className="header-upper">
          <div className="auto-container clearfix">
            <div className="inner clearfix">
              {/*Logo*/}
              <div className="logo-box">
                <div className="logo">
                  <a
                    href="index.html"
                    title="Callix - Portfolio and Digital Agency HTML Template"
                  >
                    <img
                      src="assets/images/logo-two.png"
                      alt="Callix - Portfolio and Digital Agency HTML Template"
                      title="Callix - Portfolio and Digital Agency HTML Template"
                    />
                  </a>
                </div>
              </div>
              <div className="nav-content clearfix">
                <div className="nav-outer clearfix">
                  {/*Mobile Navigation Toggler*/}
                  <div className="mobile-nav-toggler">
                    <span className="icon flaticon-menu" />
                  </div>
                  {/* Main Menu */}
                  <nav className="main-menu navbar-expand-md navbar-light">
                    <div className="collapse navbar-collapse show clearfix">
                      <ul className="navigation clearfix">
                        <li className="current dropdown">
                          <a href="index.html">Home</a>
                          {/* <ul>
                            <li>
                              <a href="index.html">Homepage 01</a>
                            </li>
                            <li>
                              <a href="index-2.html">Homepage 02</a>
                            </li>
                            <li>
                              <a href="index-3.html">Homepage 03</a>
                            </li>
                            <li>
                              <a href="index-4.html">Homepage 04</a>
                            </li>
                            <li>
                              <a href="index-5.html">Homepage 05</a>
                            </li>
                          </ul> */}
                        </li>
                        <li className="dropdown">
                          <a href="about">About</a>
                          {/* <ul>
                            <li>
                              <a href="about.html">About Us</a>
                            </li>
                            <li>
                              <a href="team.html">Our Team</a>
                            </li>
                          </ul> */}
                        </li>
                        <li className="dropdown">
                          <a href="services">Services</a>
                          {/* <ul>
                            <li>
                              <a href="services.html">Services Type 01</a>
                            </li>
                            <li>
                              <a href="services-2.html">Services Type 02</a>
                            </li>
                          </ul> */}
                        </li>
                        <li className="dropdown">
                          <a href="blog">Blog</a>
                          {/* <ul>
                            <li>
                              <a href="portfolio.html">Portfolio Default</a>
                            </li>
                            <li>
                              <a href="portfolio-2.html">Portfolio Masonry</a>
                            </li>
                            <li>
                              <a href="portfolio-single.html">
                                Portfolio Single
                              </a>
                            </li>
                          </ul> */}
                        </li>
                        
                        <li>
                          <a href="contact">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              {/*Other Links*/}
              <div className="other-links clearfix">
                {/*Nav Toggler*/}
                <div className="max-nav-toggler">
                  <button className="theme-btn toggle-btn">
                    <span className="flaticon-menu-2" />
                  </button>
                </div>
                {/*Search Btn*/}
                <div className="search-btn">
                  <button type="button" className="theme-btn search-toggler">
                    <span className="icon flaticon-loupe-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
        {/* Mobile Menu  */}
        <div className="mobile-menu">
          <div className="menu-backdrop" />
          <div className="close-btn">
            <span className="icon flaticon-targeting-cross" />
          </div>
          <nav className="menu-box">
            <div className="nav-logo">
              <a href="index.html">
                <img src="assets/images/logo.png" alt="" title="" />
              </a>
            </div>
            <div className="menu-outer">
              {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
            </div>
            {/*Social Links*/}
            <div className="social-links">
              <ul className="clearfix">
                <li>
                  <a href="#">
                    <span className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-facebook-square" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-pinterest-p" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* End Mobile Menu */}
      </header>
      {/* End Main Header */}
      {/*Search Popup*/}
      <div id="search-popup" className="search-popup">
        <div className="close-search theme-btn">
          <span className="flaticon-targeting-cross" />
        </div>
        <div className="popup-inner">
          <div className="overlay-layer" />
          <div className="search-form">
            <form
              method="post"
              action="https://t.commonsupport.com/callix/index.html"
            >
              <div className="form-group">
                <fieldset>
                  <input
                    type="search"
                    className="form-control"
                    name="search-input"
                    defaultValue=""
                    placeholder="Search Here"
                    required=""
                  />
                  <input
                    type="submit"
                    defaultValue="Search Now!"
                    className="theme-btn"
                  />
                </fieldset>
              </div>
            </form>
            <br />
            <h3>Recent Search Keywords</h3>
            <ul className="recent-searches">
              <li>
                <a href="#">Finance</a>
              </li>
              <li>
                <a href="#">Idea</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Growth</a>
              </li>
              <li>
                <a href="#">Plan</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Hidden Navigation Bar */}
      <section className="hidden-bar right-align">
        <div className="hidden-bar-closer">
          <button>
            <span className="flaticon-letter-x" />
          </button>
        </div>
        {/* Hidden Bar Wrapper */}
        <div className="hidden-bar-wrapper">
          <div className="logo">
            <a href="index.html">
              <img src="assets/images/logo.png" alt="" />
            </a>
          </div>
          <div className="content-box">
            <h3>Get In Touch</h3>
            <div className="text">
              We must explain to you how all seds this mistakens idea off
              denouncing pleasures and praising pain was born and I will give
              you a completed accounts..
            </div>
            <a href="about.html" className="theme-btn btn-style-two">
              <div className="btn-title">Consultation</div>
            </a>
          </div>
          <div className="contact-info">
            <h2>Contact Info</h2>
            <ul className="list-style-two">
              <li>
                <span className="icon fa fa-map-marker-alt" />
                Sailing 26, Old Brozon Mall, Newyrok NY 10005
              </li>
              <li>
                <span className="icon fa fa-phone-alt" />
                <a href="tel:555626-0234">555 626-0234</a>
              </li>
              <li>
                <span className="icon fa fa-envelope-open" />{" "}
                <a href="mailto:support@sailing.com">support@sailing.com</a>
              </li>
              <li>
                <span className="icon fa fa-clock" />
                Week Days: 09.00 to 18.00 Sunday: Closed
              </li>
            </ul>
          </div>
        </div>
        {/* / Hidden Bar Wrapper */}
      </section>
    </>
  );
};

export default Navbar;
