import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function Calendar({ tripType }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  console.log(tripType);

  const onChange = dateOrdates => {
    if (tripType === "one-way") {
      setStartDate(dateOrdates);
    } else {
      setStartDate(dateOrdates[0]);
      setEndDate(dateOrdates[1]);
    }
  }
 

  if (tripType === "one-way") {
    return (
      <DatePicker
        selected={startDate}
        onChange={(dateOrdates) => onChange(dateOrdates)}
        startDate={startDate}
  
        monthsShown={2}
        renderCustomHeader={({
          monthDate,
          customHeaderCount,
          decreaseMonth,
          increaseMonth,
        }) => (
          <div>
            <button
              aria-label="Previous Month"
              className={
                "react-datepicker__navigation react-datepicker__navigation--previous"
              }
              style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
              onClick={decreaseMonth}
            >
              <span
                className={
                  "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                }
              >
                {"<"}
              </span>
            </button>
            <span className="react-datepicker__current-month">
              {monthDate.toLocaleString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <button
              aria-label="Next Month"
              className={
                "react-datepicker__navigation react-datepicker__navigation--next"
              }
              style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
              onClick={increaseMonth}
            >
              <span
                className={
                  "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                }
              >
                {">"}
              </span>
            </button>
          </div>
        )}
        
      />
    )
  } else {
    return (
      <DatePicker
        selected={startDate}
        onChange={(dateOrdates) => onChange(dateOrdates)}
        startDate={startDate}
        endDate={endDate}
        popperPlacement="bottom-end"
        selectsRange
        inline
        monthsShown={2}
        renderCustomHeader={({
          monthDate,
          customHeaderCount,
          decreaseMonth,
          increaseMonth,
        }) => (
          <div>
            <button
              aria-label="Previous Month"
              className={
                "react-datepicker__navigation react-datepicker__navigation--previous"
              }
              style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
              onClick={decreaseMonth}
            >
              <span
                className={
                  "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                }
              >
                {"<"}
              </span>
            </button>
            <span className="react-datepicker__current-month">
              {monthDate.toLocaleString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <button
              aria-label="Next Month"
              className={
                "react-datepicker__navigation react-datepicker__navigation--next"
              }
              style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
              onClick={increaseMonth}
            >
              <span
                className={
                  "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                }
              >
                {">"}
              </span>
            </button>
          </div>
        )}
      />
    );
  }
}

export default Calendar;
