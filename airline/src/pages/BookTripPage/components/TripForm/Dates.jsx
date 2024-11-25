import { MdMonetizationOn } from "react-icons/md";

function Dates(){


    return(
        <fieldset className="field-container">
            <div className="input-wrappper">
                <label htmlFor="">Dates</label>
                <input type="text" placeholder="Sat, Nov 09, Nov 12"/>
            </div>
            <div><MdMonetizationOn size={24} /></div>
        </fieldset>
    )
}

export default Dates