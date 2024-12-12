import { MdMonetizationOn } from "react-icons/md";
import {useState} from "react";


function Travelers(){

    const [numberAdult, setNumberAdult] = useState(0)
    const [numberChildren, setNumberChildren] = useState(0)

    const [isOpen, setIsOpen] = useState(false)

    const handleToggleModal = () => {
        console.log('Toggle modal')
        setIsOpen(!isOpen)
    }


    return(
        <>
        <fieldset className="field-container" onClick={handleToggleModal}>
            <div className="input-wrappper">
                <label htmlFor="">Travelers</label>
                <input type="text" placeholder="1 Adult"/>
            </div>
            <div><MdMonetizationOn size={24} /></div>
        </fieldset>
        {isOpen && 
            <div className='modal-travelers' >
                <div>
                    <div className="close-btn" onClick={handleToggleModal}>X</div>
                    <div className="travelers-container">
                        <div className="traveler-type-card">
                            <div className="traveler-type">
                                <span>Adult</span>
                                <p>Ages 15 and up</p>
                            </div>
                            <div className="traveler-type-btn">
                                <button className="traveler-btn">-</button>
                                <span>1</span>
                                <button className="traveler-btn">+</button>
                            </div>
                        </div>
                        <div className="traveler-type-card">
                            <div className="traveler-type">
                                <span>Adult</span>
                                <p>Ages 15 and up</p>
                            </div>
                            <div className="traveler-type-btn">
                                <button className="traveler-btn">-</button>
                                <span>1</span>
                                <button className="traveler-btn">+</button>
                            </div>
                        </div>
                    </div>  
                </div>              
                <button onClick={handleToggleModal}>Save</button>
            </div>
        }
        </>
    )
}

export default Travelers