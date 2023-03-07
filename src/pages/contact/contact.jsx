import Footer from '../component/footer/footer';
import Header from '../component/header/header';
const Contact =() =>{
    return(
  
        <div classNameName="contact">
               <Header/>
            <div className="support">
        <p className="text-1">WE ARE HERE FOR YOU</p>
        <p className="description-contact">
          At Luxury Hotels, we take our customers seriously. Do you have any
          enquiries, compaints or requests, please forward it to our support desk
          and we will get back to you as soon as possible.
        </p>
      </div>
      <div className="m-5 p-lg-1 feedback">
        <div className="row feedback">
          <div className="col-md-6 description">
            <p className="about-hotel">497 Evergreen Rd. Roseville, CA 95673</p>
            <p className="arrow">
            <span>View map</span> 
            <img src="./images/arrow.png" alt="arrow.png"/>
            </p>
            <p className="about-hotel">Phone: +44 345 678 903</p>
            <p className="about-hotel">Email: luxury_hotels@gmail.com</p>
          </div>
  
          {/* <!-- form  --> */}
          <div className="col-md-6">
            <form method="get" action="#">
              
              <div className="form-group">
                <label for="exampleInputPassword1">Name</label>
                
                <input type="text" className="form-control" id="name" name="password" />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
              </div>
              <div className="form-group">
                <label for="exampleInputMessage">Message</label>
                <textarea name="message" id="message" cols="50" rows="7" className="form-control"></textarea>
              </div>
              <button type="submit" className="btn btn-submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
        </div>
    );
}
export default Contact;