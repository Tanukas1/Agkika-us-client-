import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
     {/*News Section*/}
     <section className="news-section-two">
        <div className="auto-container">
          <div className="sec-title-three left-aligned">
            <div className="sub-title">blog</div>
            <h2>News Feeds</h2>
          </div>
          <Slider {...settings}>
            {/*Block*/}
            <div className="news-block alternate">
              <div className="inner">
                <figure className="image-box">
                  <a href="blog-single.html">
                    <img src="assets/images/resource/news-image-1.jpg" alt="" />
                  </a>
                </figure>
                <div className="lower-box">
                  <div className="category">
                    <a href="#">business</a>
                  </div>
                  <h4>
                    <a href="blog-single.html">
                      Data Security with multiple business values
                    </a>
                  </h4>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incidi dunt ut labore et dolore magna.
                  </div>
                  <div className="post-meta">
                    <ul className="clearfix">
                      <li className="date">
                        <span className="icon flaticon-business" />{" "}
                        <a href="#">26th June, 2019</a>
                      </li>
                      <li className="author">
                        <span className="icon flaticon-user-3" />{" "}
                        <a href="#">By Admin</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*Block*/}
            <div className="news-block alternate">
              <div className="inner">
                <figure className="image-box">
                  <a href="blog-single.html">
                    <img src="assets/images/resource/news-image-2.jpg" alt="" />
                  </a>
                </figure>
                <div className="lower-box">
                  <div className="category">
                    <a href="#">Conference</a>
                  </div>
                  <h4>
                    <a href="blog-single.html">
                      Leverage the full spectrum of technology stacks
                    </a>
                  </h4>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incidi dunt ut labore et dolore magna.
                  </div>
                  <div className="post-meta">
                    <ul className="clearfix">
                      <li className="date">
                        <span className="icon flaticon-business" />{" "}
                        <a href="#">22nd June, 2019</a>
                      </li>
                      <li className="author">
                        <span className="icon flaticon-user-3" />{" "}
                        <a href="#">By Admin</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*Block*/}
            <div className="news-block alternate">
              <div className="inner">
                <figure className="image-box">
                  <a href="blog-single.html">
                    <img src="assets/images/resource/news-image-3.jpg" alt="" />
                  </a>
                </figure>
                <div className="lower-box">
                  <div className="category">
                    <a href="#">Search</a>
                  </div>
                  <h4>
                    <a href="blog-single.html">
                      Commercial apps multi- platform and multi-device
                    </a>
                  </h4>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incidi dunt ut labore et dolore magna.
                  </div>
                  <div className="post-meta">
                    <ul className="clearfix">
                      <li className="date">
                        <span className="icon flaticon-business" />{" "}
                        <a href="#">27th June, 2019</a>
                      </li>
                      <li className="author">
                        <span className="icon flaticon-user-3" />{" "}
                        <a href="#">By Admin</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*Block*/}
            <div className="news-block alternate">
              <div className="inner">
                <figure className="image-box">
                  <a href="blog-single.html">
                    <img src="assets/images/resource/news-image-1.jpg" alt="" />
                  </a>
                </figure>
                <div className="lower-box">
                  <div className="category">
                    <a href="#">business</a>
                  </div>
                  <h4>
                    <a href="blog-single.html">
                      Data Security with multiple business values
                    </a>
                  </h4>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incidi dunt ut labore et dolore magna.
                  </div>
                  <div className="post-meta">
                    <ul className="clearfix">
                      <li className="date">
                        <span className="icon flaticon-business" />{" "}
                        <a href="#">26th June, 2019</a>
                      </li>
                      <li className="author">
                        <span className="icon flaticon-user-3" />{" "}
                        <a href="#">By Admin</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*Block*/}
            <div className="news-block alternate">
              <div className="inner">
                <figure className="image-box">
                  <a href="blog-single.html">
                    <img src="assets/images/resource/news-image-2.jpg" alt="" />
                  </a>
                </figure>
                <div className="lower-box">
                  <div className="category">
                    <a href="#">Conference</a>
                  </div>
                  <h4>
                    <a href="blog-single.html">
                      Leverage the full spectrum of technology stacks
                    </a>
                  </h4>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incidi dunt ut labore et dolore magna.
                  </div>
                  <div className="post-meta">
                    <ul className="clearfix">
                      <li className="date">
                        <span className="icon flaticon-business" />{" "}
                        <a href="#">22nd June, 2019</a>
                      </li>
                      <li className="author">
                        <span className="icon flaticon-user-3" />{" "}
                        <a href="#">By Admin</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*Block*/}
            <div className="news-block alternate">
              <div className="inner">
                <figure className="image-box">
                  <a href="blog-single.html">
                    <img src="assets/images/resource/news-image-3.jpg" alt="" />
                  </a>
                </figure>
                <div className="lower-box">
                  <div className="category">
                    <a href="#">Search</a>
                  </div>
                  <h4>
                    <a href="blog-single.html">
                      Commercial apps multi- platform and multi-device
                    </a>
                  </h4>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incidi dunt ut labore et dolore magna.
                  </div>
                  <div className="post-meta">
                    <ul className="clearfix">
                      <li className="date">
                        <span className="icon flaticon-business" />{" "}
                        <a href="#">27th June, 2019</a>
                      </li>
                      <li className="author">
                        <span className="icon flaticon-user-3" />{" "}
                        <a href="#">By Admin</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Services;
