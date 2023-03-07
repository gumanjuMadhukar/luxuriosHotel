

const Facilities = () => {
  return (
    <div className="facilities">
      <div className="banner">
        <div class="text-left">
          <p class="home-desc1">WELCOME TO</p>
          <p class="home-desc2">LUXURY</p>
          <p class="home-desc3">HOTELS</p>
          <p class="home-desc4">
            Book your stay and enjoy Luxury redefined at the most affordable
            rates.
          </p>
        </div>
        <div class="btn-buttom">
          <button
            type="submit"
            class="input-group-text booknow-btn"
            id="basic-addon1"
          >
            Book Now
          </button>
        </div>
      </div>

      <div class="container">


      <div class="content">
        <p class="facilities-title">Facilities</p>
        <p class="facilities-text">We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so 
          that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure
          and our modern luxury resort facilities will help you enjoy the best of all. </p>
      </div>
    </div>

<div class="container">
    
      <span class="facilities-images">
        <img  src="./images/the-gym.png" alt="the-gym"  class="center"/>
      </span>
      <span class="facilities-images">
        <img src="./images/poolside-bar.PNG" alt="the-gym" class="center"/>
      </span>
      <span class="facilities-images">
        <img src="./images/the-spa.PNG" alt="the-gym"  class="center"/>
      </span>
      <span class="facilities-images">
        <img src="./images/the-spa.PNG" alt="the-gym"  class="center"/>
      </span>
      <span class="facilities-images">
        <img src="./images/swimming-pool.PNG" alt="the-gym" class="center"/>
      </span>

   
  </div>


    <div clas="testimonial">
      {/* <!--testimonials--> */}
      <p class="testimonials">Testimonials</p>

    {/* <!--Caroussel --> */}
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="true"
    >
      
      <div class="carousel-inner">
        <div class="carousel-item active">
          <p class="carousel-description">
            "Calm, Serene, Retro – What a way to relax and enjoy"
          </p>
          <p class="carousel-writer">Mr and Mrs.Baxter, UK</p>
          
        </div>
        <div class="carousel-item">
          <p class="carousel-description">
            "Excellent View point with quality services!"
          </p>
          <p class="carousel-writer">Madhukar Gumanju</p>
        
        </div>
        <div class="carousel-item">
          <p class="carousel-description">
            "Hospitality should have no other nature than love."
          </p>
          <p class="carousel-writer">Henrietta Mears</p>
         
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden carousel-btn">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden carousel-btn">Next</span>
      </button>
    </div>
  </div>



    </div>
  );
};


export default Facilities;