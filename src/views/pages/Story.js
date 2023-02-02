import Home_img_1 from "../../assets/img/Home-img-1.png";
import { Link, NavLink } from "react-router-dom";
import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";
import Img from '../../assets/img/img.png';
import { Helmet } from "react-helmet";

const Story = props => {

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
        <title>Story | RepoHub</title>
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
      <div className="border-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <section className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="my-5 py-5">
                      <h3 className="fw-light headline">Our Story</h3>
                      <h3 className="mb-5 headline Walone-Bold">We developer complex interface systems<br /> for Web, Mobile & Ar</h3>
                      <img src={Home_img_1} className="img-fluid headline pdf-rounded-xl" alt="Home-img" />
                      <div className="row mt-5 pt-3">
                        <div className="col-md-2">
                          <h2 className="fs-60">20</h2>
                          <span>Employers</span>
                        </div>
                        <div className="col-md-3">
                          <h2 className="fs-60">5</h2>
                          <span>years of Experiences</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/*Service*/}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="my-lg-5 py-lg-5">
              <Link to="/services" className="text-decoration-none text-secondary">
                <div className="text-center py-5 my-5 headline">
                  <p className="text-uppercase">next</p>
                  <h4 className="text-black">Our Services</h4>
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

export default Story;