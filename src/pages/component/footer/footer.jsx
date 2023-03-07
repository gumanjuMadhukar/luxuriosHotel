import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="union">
        <footer className="page-footer footer font-small blue pt-4">
          {/* <!-- Footer Links --> */}
          <div className="text-md-left">
            {/* Grid row  */}
            <div className="row">
              {/* <!-- Grid column --> */}
              <div className="col-md-3">
                {/* <!-- Content --> */}
                <h5 className="text-uppercase footer-luxury">Luxury</h5>
                <p className="footer-hotel">HOTELS</p>
                <span className="footer-hotel-address">
                  <p>497 Evergreen Rd. Roseville, CA 95673</p>
                  <p>+44 345 678 903</p>
                  <p>luxury_hotels@gmail.com</p>
                </span>
              </div>
              {/* <!-- Grid column --> */}

              <hr className="clearfix w-100 d-md-none pb-3" />

              {/* <!-- Grid column --> */}
              <div className="col-md-3 footer-link">
                {/* <!-- Links --> */}
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">About Us</a>
                  </li>
                  <li>
                    <a href="#!">Contact</a>
                  </li>
                  <li>
                    <a href="#!">Terms and Condition</a>
                  </li>
                </ul>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-3 footer-socialMedia">
                {/* <!-- Links --> */}
                <ul className="list-unstyled">
                  <li>
                    <img src="img/facebook.png" alt="" />
                    <a href="#!">Facebook</a>
                  </li>
                  <li>
                    <img src="img/twitter.png" alt="" />
                    <a href="#!">Twitter</a>
                  </li>
                  <li>
                    <img src="img/instagram.png" alt="" />
                    <a href="#!">Instagram</a>
                  </li>
                </ul>
              </div>
              {/* <!-- Grid column --> */}
              <div className="col-md-3">
                {/* <!-- Links --> */}

                {/* <!--subscribe form--> */}
                <form className="form-inline">
                  <label>Subscribe to Newsletter</label>
                  <div className="input-group subscribe-div">
                    <input
                      type="text"
                      className="form-control subscribe-form"
                      placeholder="Email Address"
                      aria-label="email"
                      aria-describedby="basic-addon1"
                    />

                    <div className="input-group-prepend subscribe-btn">
                      <button
                        className="subscribe-btn"
                        type="submit"
                        id="basic-addon1"
                      >
                        Ok
                      </button>
                    </div>
                    
                  </div>
                </form>
              </div>
            </div>
            {/* <!-- Grid row --> */}
          </div>
          {/* <!-- Footer Links --> */}
        </footer>
        {/* <!-- Footer --> */}
      </div>
    </div>
  );
};
export default Footer;
