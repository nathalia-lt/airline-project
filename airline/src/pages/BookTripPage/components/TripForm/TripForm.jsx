import FromTo from './FromTo'
import Dates from './Dates'
import Travelers from './Travelers'
import PromoCode from './PromoCode'
import ShowFares from './ShowFares'
import './TripForm.css'

function TripForm(){


    return(
        <div>
            {/* 
                */}
                <FromTo/>
                <Dates/>
                <Travelers/>                
                <PromoCode/>
                <ShowFares/>
            <button className='search-btn'>Search</button>
        </div>
    )
}

export default TripForm