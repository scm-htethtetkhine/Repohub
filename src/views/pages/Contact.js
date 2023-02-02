import Img from '../../assets/img/img.png';
import { Helmet } from "react-helmet";

const Contact = props => {
  return (
    <div>

      <Helmet>
        <title>Contact | RepoHub</title>
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

      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <section className="container">
              <div className="row">
                <div className="col-12">
                  <h2><span className="fw-normal">Wazup there</span><br />We’re here for you, drop as a line</h2>
                  <ul className="row text-secondary border-bottom p-0 col-lg-6 col-xs-12 mt-5 pb-4">
                    <li className="col list-unstyled">New Business</li>
                    <li className="col list-unstyled text-end"><i className="fa-solid fa-arrow-right-long"></i></li>
                  </ul>
                  <ul className="row text-secondary border-bottom p-0 col-lg-6 col-xs-12 pb-4">
                    <li className="col list-unstyled">Send a message</li>
                    <li className="col list-unstyled text-end"><i className="fa-solid fa-arrow-right-long"></i></li>
                  </ul>
                  <ul className="row text-secondary border-bottom p-0 col-lg-6 col-xs-12 pb-4">
                    <li className="col list-unstyled">Careers</li>
                    <li className="col list-unstyled text-end"><i className="fa-solid fa-arrow-right-long"></i></li>
                  </ul>
                  <div className="row my-5 py-5">
                    <div className="col-md-4 col-xs-12">
                      <span className="fs-14 text-secondary fw-normal">General inquiries —</span>
                      <p className="fs-20 fw-bold mb-0 pt-2">Quick chat</p>
                      <span className="fs-14"><i class="fa-brands fa-facebook-messenger"></i>Message on facebook</span>
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <span className="fs-14 text-secondary fw-normal">New business —</span>
                      <p className="fs-20 fw-bold mb-0 pt-2">hi@repohub.co</p>
                      <span className="fs-14">+95 9 888 777 666</span>
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <span className="fs-14 text-secondary fw-normal">Office —</span>
                      <p className="fs-20 fw-bold mb-0 pt-2">Yangon</p>
                      <span className="fs-14">Yangon, Myanmar</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;