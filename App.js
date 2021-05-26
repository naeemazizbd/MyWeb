import logo from './logo.svg';
import './App.css';
// import img from '../Images/bg.svg'

function App() {
  return (
    <div className="">
      <div className="row container-bg" >
        <div className="col-md-8  py-5 ">


          <div className="my-5 px-4">
          <div className="bg-warning p-4 rounded ">
            <p>Enter parcel tracking number to track your parcel</p>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Parcel Tracking Number" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button class="btn btn-outline-secondary bg-dark px-5" type="button" id="button-addon2">Track</button>
            </div>
           

          </div>
          <div className="my-4">
          <h1>On Demand Delivery at Your Doorstep</h1>
            <p>Need to send something on an emergency basis? GHURI Parcel is what you need!</p>
            <button type="button" class="btn btn-warning p-3 m-2">
               <i class="fas fa-mobile-alt"></i> 
               <a className="text-decoration-none text-dark" href="https://play.google.com/store/apps/details?id=com.ghuriexpress.ghuri" target="_blank"> Download App </a> <i class="fas fa-angle-right"></i></button> <br/>
            <button type="button" class="btn btn-outline-dark p-3 m-2">
              <i class="fas fa-search-dollar"></i> 
              <a className="text-decoration-none " href="https://play.google.com/store/apps/details?id=ghuri.express.parcelfighter" target="_blank"> Earn With Ghuri </a>
              <i class="fas fa-angle-right"></i> </button>
          </div>
          </div>

        </div>
        <div className="col-md-4">



        </div>
      </div>
    </div>
  );
}

export default App;
