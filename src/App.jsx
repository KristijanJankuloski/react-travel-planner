import "./App.css";
import flight_takeoff from "./assets/img/flight_takeoff.svg";
import flight_land from "./assets/img/flight_land.svg";
import dollar from "./assets/img/dollar_circle.svg"
import Header from "./components/Header";
import { useState, useEffect } from "react";

function App() {
  const today = new Date();
  const nextDay = new Date();
  nextDay.setDate(today.getDate() + 1);
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(nextDay);
  const [budget, setBudget] = useState(0);
  const [validDateRange, setValidDateRange] = useState(true);

  useEffect(() => {
    if(endDate <= startDate){
      setValidDateRange(false);
      return;
    }
    setValidDateRange(true);
  }, [startDate, endDate])

  return (
    <>
      <Header></Header>
      <div className="container pt-3">
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
            <input className="form-control" type="number" name="budget-input" id="budget-input" onChange={e => setBudget(e.target.value)} />
          </div>
          <div className="form-group ps-1 pe-1 d-flex flex-column justify-content-end">
            <button className="btn btn-primary disabled">Start planning</button>
          </div>
        </form>
      </div>
    </>
  );
}


export default App;
