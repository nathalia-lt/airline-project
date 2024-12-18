
import './BookTripPage.css'
import Header from '../../components/Header/Header'
import Footer from './components/Footer/Footer'
import TripForm from './components/TripForm/TripForm/'


function BookTripPage() {

  return (
      <div>
        <Header/>
        <div className="main-container">
          <TripForm/>
        </div>
        <Footer/>
      </div>
  )
}

export default BookTripPage