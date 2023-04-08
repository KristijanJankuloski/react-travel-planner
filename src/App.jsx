import "./App.css";
import flight_takeoff from "./assets/img/flight_takeoff.svg";
import flight_land from "./assets/img/flight_land.svg";
import dollar from "./assets/img/dollar_circle.svg"
import Header from "./components/header/Header";
import DayCard from "./components/day_card/DayCard";
import { useState, useEffect } from "react";

function App() {
  const today = new Date();
  const nextDay = new Date();
  nextDay.setDate(today.getDate() + 1);
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(nextDay);
  const [budget, setBudget] = useState(0);
  const [usedBudget, setUsedBudget] = useState(0);
  const [validDateRange, setValidDateRange] = useState(true);
  const [validBudget, setValidBudget] = useState(false);
  const [datesArray, setDatesArray] = useState([]);

  function spreadDates(){
    const dates = [];
    let tempDate = new Date(startDate);
    while(tempDate <= endDate){
      dates.push(new Date(tempDate));
      tempDate.setDate(tempDate.getDate() + 1);
    }
    setDatesArray(dates);
  }

  // function addExpense(amount){
  //   setUsedBudget(usedBudget + amount);
  // }

  useEffect(() => {
    if(endDate <= startDate){
      setValidDateRange(false);
      return;
    }
    setValidDateRange(true);
    if(validDateRange && validBudget){
      spreadDates();
    }
  }, [startDate, endDate]);

  useEffect(() => {
    if(budget <= 0){
      setValidBudget(false);
      return;
    }
    setValidBudget(true);
  }, [budget]);

  return (
    <>
      <Header></Header>
      <div className="container pt-3 pb-3">
        <form className="d-flex flex-wrap">
          <div className="form-group ps-1 pe-1">
            <label htmlFor="departure-date">Departure <img src={flight_takeoff} className="small-img" alt="departure"/></label>
            <input className="form-control" type="date" name="departure-date" id="departure-date" onChange={e => setStartDate(new Date(e.target.value))} />
          </div>
          <div className="form-group ps-1 pe-1">
            <label htmlFor="return-date">Return <img src={flight_land} className="small-img" alt="return" /></label>
            <input className={validDateRange? "form-control" : "form-control border-danger"} type="date" name="return-date" id="return-date" onChange={e => setEndDate(new Date(e.target.value))} />
          </div>
          <div className="form-group ps-1 pe-1">
            <label htmlFor="budget-input">Budget <img src={dollar} className="small-img" alt="$" /></label>
            <input className="form-control" type="number" name="budget-input" id="budget-input" value={budget} onChange={e => setBudget(parseInt(e.target.value))} />
          </div>
          {/* <div className="form-group ps-1 pe-1 d-flex flex-column justify-content-end">
            <button type="button" className={(validBudget && validDateRange)? "btn btn-primary": "btn btn-primary disabled"} onClick={() => spreadDates()}>Start planning</button>
          </div> */}
          <div className="form-group ps-1 pe-1 d-flex flex-column justify-content-end">
            <h5>Remaining budget: <span className={(budget - usedBudget) < 0? "text-danger": ""}>{budget - usedBudget}</span></h5>
          </div>
        </form>
      </div>
      <div className="ps-3 pe-3">
        {datesArray.map((item, i) => <DayCard key={i} date={item} usedBudget={usedBudget} setUsedBudget={setUsedBudget} />)}
      </div>
    </>
  );
}


export default App;
