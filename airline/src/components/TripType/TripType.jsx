import {useState} from 'react'
import './TripType.css'

function TripType(){
    // const [variavel, metodo que altera o valor da variavel]
    const [selectedTripType, setSelectedTripType] = useState('round-trip')

    const handleChangeTripType = (newType) => {
        //set é usado para trocar o valor da variavel
        setSelectedTripType(newType)
    }


    return (
        <div className="trip-type-container">
            <button onClick={() => handleChangeTripType('round-trip')} className={`trip-type-btn ${selectedTripType == 'round-trip' ? 'active' : ''}`}>Round Trip</button>
            <button onClick={() => handleChangeTripType('one-way')} className={`trip-type-btn ${selectedTripType == 'one-way' ? 'active' : ''}`}>One Way</button>
        </div>
    )
}

export default TripType