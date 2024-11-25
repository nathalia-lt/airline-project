import { MdMonetizationOn } from "react-icons/md";

function Travelers(){


    return(
        <fieldset className="field-container">
            <div className="input-wrappper">
                <label htmlFor="">Travelers</label>
                <input type="text" placeholder="1 Adult"/>
            </div>
            <div><MdMonetizationOn size={24} /></div>
        </fieldset>
    )
}

export default Travelers