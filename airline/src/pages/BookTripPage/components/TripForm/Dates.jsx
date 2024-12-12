import { MdMonetizationOn } from "react-icons/md";
import Calendar from "../calendar";
import { useState } from "react";

//queremos alterar o calendario com o tripType
//startdate, setstartdate estou passando como variavel pq ele veio do form
function Dates({tripType, startDate, setStartDate, endDate, setEndDate}){

    const [isOpen, setIsOpen] = useState(false)

    const handleToggleModal = () => {
        console.log('Toggle modal')
        setIsOpen(!isOpen)
    }

    return(
        <>
        <fieldset className="field-container" onClick={handleToggleModal}>
            <div className="input-wrappper">
                <label htmlFor="">
                    Dates
                </label>
                <input type="text" placeholder="Sat, Nov 09, Nov 12"/>
            </div>
            <div><MdMonetizationOn size={24} /></div>
        </fieldset>
        {isOpen && 
            <div className='modal' >
                <div onClick={handleToggleModal}>X</div>
                <Calendar tripType={tripType} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
                <button onClick={handleToggleModal}>Done</button>
            </div>
        }
        </>
    )
}

export default Dates