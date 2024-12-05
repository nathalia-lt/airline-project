import './TripType.css'

//esta recebendo informacoes da mae.
//a letra minuscula signigfica que é a variavel
function TripType({setTripType, tripType}) {
    // const [variavel, metodo que altera o valor da variavel]
    

    const handleChangeTripType = (newType) => {
        //set é usado para trocar o valor da variavel
        setTripType(newType)
    }


    return (
        <div className="trip-type-container">
            <button 
                onClick={() => handleChangeTripType('round-trip')}         className={`trip-type-btn ${tripType == 'round-trip' ? 'active' : ''}`}
            >
                Round Trip
            </button>
            <button 
                onClick={() => handleChangeTripType('one-way')} 
                className={`trip-type-btn ${tripType == 'one-way' ? 'active' : ''}`}>One Way
            </button>
        </div>
    )
}

export default TripType