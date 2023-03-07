import Footer from "../component/footer/footer";
import Header from "../component/header/header";
import './home.css';

const Homepage = () => {
  return (
    <>
      <Header />

      <div className="container-front">
        <img className="home-image" src="img/gabriel-ghnassia.png" alt="" />
        <div className="text-left">
          <p className="home-desc1">WELCOME TO</p>

          <p className="home-desc2">LUXURY</p>
          <p className="home-desc3">HOTELS</p>
          <p className="home-desc4">
            Book your stay and enjoy Luxury redefined at the most affordable
            rates.
          </p>
        </div>
        <div className="btn-buttom">
          <button
            type="submit"
            className="input-group-text booknow-btn "
            id="basic-addon1"
          >
            Book Now
          </button>
          <div className="scroll">
            <h6>Scroll</h6>
            <img src="img/Subtraction2.png" alt="" />
          </div>
        </div>
      </div>

      <div className="content">
        <p>All our room types are including complementary breakfast</p>
      </div>

      <div className="container-fluid">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-sm-5">
              <div className="card-body">
                <h5 className="card-title">Luxury redefined</h5>
                <p className="card-text">
                  Our rooms are designed to transport you into an environment
                  made for leisure. Take your mind off the day-to-day of home
                  life and find a private paradise for yourself.
                </p>
                <a href="#" className="btn btn-primary btn-explore">
                  Explore
                </a>
              </div>
            </div>
            <div className="col-sm-7">
              <img
                className="card-img"
                src="img/steven-ungermann.png"
                alt="steven-ungermann"
              />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="row no-gutters">
            <div className="col-sm-5">
              <div className="card-body">
                <h5 className="card-title">Leave your worries in the sand</h5>
                <p className="card-text">
                  We love life at the beach. Being close to the ocean with
                  access to endless sandy beach ensures a relaxed state of mind.
                  It seems like time stands still watching the ocean.
                </p>
                <a href="#" className="btn btn-primary btn-explore">
                  Explore
                </a>
              </div>
            </div>
            <div className="col-sm-7">
              <img
                className="card-img"
                src="img/andrew-ruiz-fmz-B9At9iQ-unsplash.png"
                alt="andrew-ruiz-fmz-B9At9iQ-unsplash"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div>
          {/* <!--testimonials--> */}
          <p className="testimonials">Testimonials</p>
        </div>

        {/* <!--Caroussel --> */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <p className="carousel-description">
                "Calm, Serene, Retro – What a way to relax and enjoy"
              </p>
              <p className="carousel-writer">Mr and Mrs.Baxter, UK</p>
            </div>
            <div className="carousel-item">
              <p className="carousel-description">
                "Excellent View point with quality services!"
              </p>
              <p className="carousel-writer">Madhukar Gumanju</p>
            </div>
            <div className="carousel-item">
              <p className="carousel-description">
                "Hospitality should have no other nature than love."
              </p>
              <p className="carousel-writer">Henrietta Mears</p>
            </div>
          </div>
          <button
            className="carousel-control-prev "
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
            <span className="carousel-btn"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="carousel-btn"></span>
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Homepage;
