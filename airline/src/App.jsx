
import './App.css'
import Header from './components/Header/Header'
import TripType from './components/TripType/TripType/'
import Footer from './components/Footer/Footer'




function App() {

  return (
      <div>
        <Header/>
        <div className="main-container">
          <TripType/>
        </div>
        <Footer/>
      </div>
  )
}

export default App
