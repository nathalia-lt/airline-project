import { MdMonetizationOn } from "react-icons/md";

function ShowFares(){

    // const [selectedFareType, setSelectedFareType] = useState('Dollars')

    // conta handleChangeFareType = (newFare) => {
    //     setSelectedFareType(newFare)
    // }

    return(

        <div className="fare-type-container">
            <button className="fare-type-btn">Dollars</button>
            <button className="fare-type-btn">Points</button>
            <button className="fare-type-btn">Points + Cash</button>
        </div>
    )
}

export default ShowFares