import { MdMonetizationOn } from "react-icons/md";

function PromoCode(){


    return(
        <fieldset className="field-container">
            <div className="input-wrappper">
                <label htmlFor="">code</label>
                <input type="text" placeholder="Optional"/>
            </div>
            <div><MdMonetizationOn size={24} /></div>
        </fieldset>
    )
}

export default PromoCode