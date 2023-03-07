const Rooms =() =>{
    return(
        <>
         <div class="container">
      {/* <!-- rooms-1  --> */}
      <div class="card w-75">
        <img src="./images/devon-janse-van-rensburg-_WEDFTZV0qU-unsplash.png" class="card-img-top" alt="devon-janse-van-rensburg-_WEDFTZV0qU-unsplash" />
        <div class="card-header">
          <p class="text-center">SINGLE ROOM</p>
        </div>
        <div class="card-body d-flex justify-content-between ms-5 me-5">
          <a href="#" class="add">
            <img src="./images/add.png" alt="" class="add-btn" />
            <span class="text-black">VIEW ROOM DETAILS</span>
          </a>
          <a href="#" class="btn btn-warning price-btn">$147 Avg/night</a>
        </div>
      </div>

      {/* <!-- rooms-2  --> */}
      <div class="card w-75">
        <img src="./images/double-room1.png" class="card-img-top" alt="double-room1" />
        <div class="card-header">
          <p class="text-center">DOUBLE ROOM</p>
        </div>
        <div class="card-body d-flex justify-content-between ms-5 me-5">
          <a href="#" class="add">
            <img src="./images/add.png" alt="" class="add-btn" />
            <span class="text-black">VIEW ROOM DETAILS</span>
          </a>
          <a href="#" class="btn btn-warning price-btn">$155 Avg/night</a>
        </div>
      </div>

      {/* <!-- rooms-3  --> */}
      <div class="card w-75">
        <img src="./images/fred-kleber-gTbaxaVLvsg-unsplash.png" class="card-img-top" alt="fred-kleber-gTbaxaVLvsg-unsplash" />
        <div class="card-header">
          <p class="text-center">TWIN ROOM</p>
        </div>
        <div class="card-body d-flex justify-content-between ms-5 me-5">
          <a href="#" class="add">
            <img src="./images/add.png" alt="" class="add-btn" />
            <span class="text-black">VIEW ROOM DETAILS</span>
          </a>
          <a href="#" class="btn btn-warning price-btn">$155 Avg/night</a>
        </div>
      </div>
    </div>

    <div>
      {/* <!--testimonials--> */}
      <p class="testimonials">Testimonials</p>
    </div>

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
        <span class="carousel-control-prev-icon" aria-hidden="false"></span>
        <span class="carousel-btn">{"<"}</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="false"></span>
        <span class="carousel-btn">{">"}</span>
      </button>
    </div>
        </>
    )
}

export default Rooms;