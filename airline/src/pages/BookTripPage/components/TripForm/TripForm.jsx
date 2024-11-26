import TripType from '../TripType/TripType'
import FromTo from './FromTo'
import Dates from './Dates'
import Travelers from './Travelers'
import PromoCode from './PromoCode'
import ShowFares from './ShowFares'
import './TripForm.css'

function TripForm(){


    return(
        <div className='trip-form-wrapper'>
            <div className='trip-form-container'>
                <TripType/>
                <FromTo/>
                <Dates/>
                <Travelers/>                
                <PromoCode/>
                <ShowFares/>
            </div>
            <button className='search-btn'>Search</button>
        </div>
    )
}

export default TripForm