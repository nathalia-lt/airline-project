import { useState } from "react";
import { MdMonetizationOn } from "react-icons/md";

const fareTypes = [
    {key: 'dollars', label: 'Dollars'},
    {key: 'points', label: 'Points'},
    {key: 'points_cash', label: 'Points + Cash'}
]

function ShowFares(){
    //use state cria uma variavel 
    const [selectedFareType, setSelectedFareType] = useState('dollars')

    const handleChangeFareType = (newFare) => {
        setSelectedFareType(newFare)
    }

    return(
        <>
            <p>Show Fares in</p>
            <div className="fare-type-container">
                {fareTypes.map(fare => (
                        <button
                        key={fare.key}    
                        onClick={() => handleChangeFareType(fare.key)} 
                        className={`fare-type-btn ${selectedFareType == fare.key ? 'active' : ''}`}
                        >
                            {fare.label}
                        </button>
                    )
                )}
            </div>
        </>
    )
}

export default ShowFares