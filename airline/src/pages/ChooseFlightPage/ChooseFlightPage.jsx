import './ChooseFlightPage.css'
import { MdFlightTakeoff } from "react-icons/md";



function ChooseFlightPage (){




    return(
        <div className="flight-conainer">
            <div>
            <p>Departs</p>
            <p className='time-departs'>11:15pm</p>
            <p>Las vegas (LAS)</p>
            </div>
            <div><MdFlightTakeoff /></div>
            <div>
            <p>Arrives</p>
            <p className='time-arrival'>12:01pm</p>
            <p>New York, NY-laguardia(LGA)</p>
            </div>
        </div>
    )

}

export default ChooseFlightPage