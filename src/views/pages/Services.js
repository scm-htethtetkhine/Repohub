import Home_img_1 from "../../assets/img/Home-img-1.png";
import Service_1 from "../../assets/img/Service_01.png";
import Service_2 from "../../assets/img/Service_02.png";
import Service_3 from "../../assets/img/Service_03.png";
import Service_4 from "../../assets/img/Service_04.png";
import { Link, NavLink } from "react-router-dom";
import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";
import Img from '../../assets/img/img.png';
import { Helmet } from "react-helmet";

const Services = props => {

  useEffect(() => {
    ScrollReveal().reveal('.headline', {
      origin: 'bottom',
      distance: '40px',
      duration: 1200,
      interval: 200,
      scale: 0.9,
      viewFactor: 0.1
    });
  }, [])

  return (
    <div>

      <Helmet>
        <title>Services | RepoHub</title>
        <meta name="title" content="RepoHub" />
        <meta name="description" content="ကျောင်းသား/သူ များအတွက် Project" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="repohub.co" />
        <meta property="og:title" content="RepoHub" />
        <meta property="og:description" content="ကျောင်းသား/သူ များအတွက် Project" />
        <meta property="og:image" content={Img} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="repohub.co" />
        <meta property="twitter:title" content="RepoHub" />
        <meta property="twitter:description" content="ကျောင်းသား/သူ များအတွက် Project" />
        <meta property="twitter:image" content={Img} />
      </Helmet>

      {/* Home section */}
      {/* <div className="border-bottom"> */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <section className="container">
              <div className="row">
                <div className="col-12">
                  <div className="my-5 py-5">
                    <h3 className="fw-light headline">Services</h3>
                    <h3 className="mb-5 headline Walone-Bold">Our services extend to every aspect of<br /> the project development process</h3>
                    <img src={Home_img_1} className="img-fluid headline pdf-rounded-xl" alt="Home-img" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* </div> */}


      <div className="border-bottom pb-bottom pb-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <section className="container">
                <div className="row justify-content-center">
                  <div className="col-md-9">
                    <h3>Research & Analytics</h3>
                    <p>We immerse ourselves in the analytics of your business, in order<br /> to study all
                      the subtleties and determine target audience.</p>
                    <div className="mt-5 pt-3">
                      <h4 className="pb-2">What we do</h4>
                      <div className="row">
                        <ul className="col-md-5 list-unstyled">
                          <li className="pb-3">- Analyze cliente business</li>
                          <li className="pb-3">- Branding Strategy</li>
                          <li>- Research opportunities</li>
                        </ul>
                        <ul className="col list-unstyled">
                          <li className="pb-3">- Create information architecture</li>
                          <li className="pb-3">- Study the target audience</li>
                          <li className="pb-3">- Production planning</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <img src={Service_1} className="img-fluid" alt="service-01" />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="border-bottom pb-bottom pb-5">
        <div className="container pt-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <section className="container">
                <div className="row justify-content-center">
                  <div className="col-md-9">
                    <h3>Product design</h3>
                    <p>We know how to create complex and intuitive interface systems <br />
                      that are enjoyable to use.</p>
                    <div className="mt-5 pt-3">
                      <h4 className="pb-2">What we do</h4>
                      <div className="row">
                        <ul className="col-md-5 list-unstyled">
                          <li className="pb-3">- Interface design</li>
                          <li className="pb-3">- Visual Identity</li>
                          <li>- Corporate & Promo landings</li>
                        </ul>
                        <ul className="col list-unstyled">
                          <li className="pb-3">- UI Kits & Libraries</li>
                          <li className="pb-3">- E-commerce</li>
                          <li className="pb-3">- Apps for iOS & Android</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <img src={Service_2} className="img-fluid" alt="service-02" />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="border-bottom pb-bottom pb-5">
        <div className="container pt-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <section className="container">
                <div className="row justify-content-center">
                  <div className="col-md-9">
                    <h3>Development & Integration</h3>
                    <p>Our developer team easily subdue developments of any <br />
                      complexity. We dominate all the cycle of development.</p>
                    <div className="mt-5 pt-3">
                      <h4 className="pb-2">What we do</h4>
                      <div className="row">
                        <ul className="col-md-5 list-unstyled">
                          <li className="pb-3">- Front-end Development</li>
                          <li className="pb-3">- Development Consulting</li>
                          <li>- CMS Development</li>
                        </ul>
                        <ul className="col list-unstyled">
                          <li className="pb-3">- API</li>
                          <li className="pb-3">- Highload-systems</li>
                          <li className="pb-3">- Animations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <img src={Service_3} className="img-fluid" alt="service-03" />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="border-bottom pb-bottom pb-5">
        <div className="container pt-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <section className="container">
                <div className="row justify-content-center">
                  <div className="col-md-9">
                    <h3>Support</h3>
                    <p>We provide technical assistance, that will help you to improve,<br />
                      keep the quality and speed of the launched project like website,<br />
                      app or full product.</p>
                    <div className="mt-5 pt-3">
                      <h4 className="pb-2">What we do</h4>
                      <div className="row">
                        <ul className="col-md-5 list-unstyled">
                          <li className="pb-3">- Content Strategy & Research</li>
                          <li className="pb-3">- Branding Strategy</li>
                          <li>- Opportunity Analysis</li>
                        </ul>
                        <ul className="col list-unstyled">
                          <li className="pb-3">- Content Strategy</li>
                          <li className="pb-3">- Strategic Planning</li>
                          <li className="pb-3">- Production Planning</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <img src={Service_4} className="img-fluid" alt="service-04" />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/*Contact*/}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="my-lg-5 py-lg-5">
              <Link to="/contact" className="text-decoration-none text-secondary">
                <div className="text-center py-5 my-5 headline">
                  <p className="text-uppercase">next</p>
                  <h4 className="text-black">Our Contact</h4>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}

      <div className="border-top py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <section className="container">
                <div className="row">
                  <div className="col col-lg-auto col-md-10 headline">
                    <div className="small mb-4 mb-lg-0">
                      <NavLink to="/" className="text-decoration-none text-secondary me-4">Home</NavLink>
                      <NavLink to="/story" className="text-decoration-none text-secondary me-4">Story</NavLink>
                      <NavLink to="/services" className="text-decoration-none text-secondary me-4">Works</NavLink>

                      <NavLink to="/services" className="text-decoration-none text-secondary d-lg-none">Careers</NavLink>
                      <NavLink to="/contact" className="text-decoration-none text-secondary d-lg-none ms-4">Contact Us</NavLink>
                    </div>
                  </div>
                  <div className="col headline">
                    <div className="text-center text-md-end">
                      <h5 className="fw-bold">RepoHub</h5>
                    </div>
                  </div>
                  <div className="col d-none d-lg-block headline">
                    <div className="text-end small">
                      <NavLink to="/services" className="text-decoration-none text-secondary">Careers</NavLink>
                      <NavLink to="/contact" className="text-decoration-none text-secondary ms-4">Contact Us</NavLink>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;