import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Services = () => {
  const options = {
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  };


  return (
    <>
      {/*Services Section*/}
      <section className="services-section-two">
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
        <div className="faded-text style-two light">
          <div className="f-text">
            <span>services</span>
          </div>
        </div>
        <div className="auto-container">
          <div className="sec-title style-three light centered">
            <div className="sub-title">services</div>
            <h2>what we do</h2>
          </div>
          <OwlCarousel className="owl-theme" {...options}>
            {/*Block*/}
            <div className="service-block-two">
              <div className="inner-box">
                <div className="count">
                  <span>01</span>
                </div>
                <div className="icon-box">
                <span className="" >
                    <img src="assets\images\icons\services\cash-flow.png" className="image" alt="" width= "40%;"/>
                  </span>
                </div>
                <h3>Financial Management</h3>
                <div className="features">
                  <ul>
                    <li>Print Related Items</li>
                    <li>Brain Stroming</li>
                    <li>Motion Graphic</li>
                    <li>Sketch Works</li>
                    <li>UI/UX Design</li>
                  </ul>
                </div>
              </div>
            </div>
            {/*Block*/}
            <div className="service-block-two padd-top">
              <div className="inner-box">
                <div className="count">
                  <span>02</span>
                </div>
                <div className="icon-box">
                  <span className="" >
                    <img src="assets\images\icons\services\transfer.png" className="image" alt="" width= "40%;"/>
                  </span>
                </div>
                <h3>Transfer Pricing</h3>
                <div className="features">
                  <ul>
                    <li>Print Related Items</li>
                    <li>Brain Stroming</li>
                    <li>Motion Graphic</li>
                    <li>Sketch Works</li>
                    <li>UI/UX Design</li>
                  </ul>
                </div>
              </div>
            </div>
            {/*Block*/}
            <div className="service-block-two">
              <div className="inner-box">
                <div className="count">
                  <span>03</span>
                </div>
                <div className="icon-box">
                <span className="" >
                    <img src="assets\images\icons\services\growth.png" className="image" alt="" width= "40%;"/>
                  </span>
                </div>
                <h3>Revenue Modelling</h3>
                <div className="features">
                  <ul>
                    <li>Print Related Items</li>
                    <li>Brain Stroming</li>
                    <li>Motion Graphic</li>
                    <li>Sketch Works</li>
                    <li>UI/UX Design</li>
                  </ul>
                </div>
              </div>
            </div>
            {/*Block*/}
            <div className="service-block-two padd-top">
              <div className="inner-box">
                <div className="count">
                  <span>04</span>
                </div>
                <div className="icon-box">
                 <span className="" >
                    <img src="assets\images\icons\services\reengineering.png" className="image" alt="" width= "40%;"/>
                  </span>
                </div>
                <h3>Process Reengineering</h3>
                <div className="features">
                  <ul>
                    <li>Print Related Items</li>
                    <li>Brain Stroming</li>
                    <li>Motion Graphic</li>
                    <li>Sketch Works</li>
                    <li>UI/UX Design</li>
                  </ul>
                </div>
              </div>
            </div>
            {/*Block*/}
            <div className="service-block-two">
              <div className="inner-box">
                <div className="count">
                  <span>05</span>
                </div>
                <div className="icon-box">
                <span className="" >
                    <img src="assets\images\icons\services\tax.png" className="image" alt="" width= "40%;"/>
                  </span>
                </div>
                <h3>Tax Structuring</h3>
                <div className="features">
                  <ul>
                    <li>Print Related Items</li>
                    <li>Brain Stroming</li>
                    <li>Motion Graphic</li>
                    <li>Sketch Works</li>
                    <li>UI/UX Design</li>
                  </ul>
                </div>
              </div>
            </div>
            {/*Block*/}
            <div className="service-block-two padd-top">
              <div className="inner-box">
                <div className="count">
                  <span>06</span>
                </div>
                <div className="icon-box">
                <span className="" >
                    <img src="assets\images\icons\services\value-chain.png" className="image" alt="" width= "40%;"/>
                  </span>
                </div>
                <h3>Cost Optimization</h3>
                <div className="features">
                  <ul>
                    <li>Print Related Items</li>
                    <li>Brain Stroming</li>
                    <li>Motion Graphic</li>
                    <li>Sketch Works</li>
                    <li>UI/UX Design</li>
                  </ul>
                </div>
              </div>
            </div>
            
          </OwlCarousel>
        </div>
      </section>
    </>
  );
};

export default Services;
