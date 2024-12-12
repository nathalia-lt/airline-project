import TripType from '../TripType/TripType'
import FromTo from './FromTo'
import Dates from './Dates'
import Travelers from './Travelers'
import PromoCode from './PromoCode'
import ShowFares from './ShowFares'
import './TripForm.css'
import {useState} from 'react'


//ele vai ser o detentor do status do usuario, e cada componente vai ter um aspecto
// trip form é a mae e manda no fromto e dates
//vamos passar os states para os componentes filhos, para eles poderem reagir ou alterar o status
function TripForm(){
    //eu mudei o tripTYpe pra ca, para ele poder controlar o TripType componente
    //passei esse estado para o triptype, como propriedade do triptype (round-tripo)
    const [tripType, setTripType] = useState('round-trip')
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    return(
        <div className='trip-form-wrapper'>
            <div className='trip-form-container'>
                <TripType setTripType={setTripType} tripType={tripType}/>
                <FromTo />
                <Dates tripType={tripType} setStartDate={setStartDate} startDate={startDate} setEndDate={setEndDate} endDate={endDate}/>
                <Travelers/>                
                <PromoCode/>
                <ShowFares/>
            </div>
            <button className='search-btn'>Search</button>
        </div>
    )
}

export default TripForm