import "./DayCard.css";
import ActivityCard from "../activity_card/ActivityCard";
import plusIcon from "../../assets/img/plus.svg";
import { useEffect, useState } from "react";

function DayCard(props) {
    const [activities, setActivities] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    function setTotal(){
        if(activities.length == 0){
            setTotalCost(0);
            return;
        }
        let newCost = 0;
        for(let item of activities){
            newCost+= item.cost;
        }
        setTotalCost(newCost);
    }

    useEffect(setTotal, [activities]);

    useEffect(() => {
    }, [totalCost]);

    function addActivity(activity){
        setActivities([...activities, activity]);
    }

    function deleteActivity(removeIndex){
        setActivities(activities.filter((value, index) => index != removeIndex));
        setTotal();
    }

    function editActivity(index, activity) {
        activities[index] = activity;
        setTotal();
    }

    return ( 
        <div className="day-card card ms-1 me-1 mb-2 d-inline-flex">
            <div className="card-header">
                {props.date.toDateString()}
            </div>
            <div className="card-body">
                {activities.map((item, index) => <ActivityCard key={index} deleteCard={deleteActivity} index={index} activity={item} editActivity={editActivity} />)}
            </div>
            <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-sm btn-primary d-flex align-items-center" onClick={() => addActivity({time:"00:00", date: props.date, description: "", cost:0})}><img src={plusIcon} alt="+" /><span className="ps-1">Add activity</span></button>
                <span>Total cost for day: {totalCost}</span>
            </div>
        </div>
     );
}

export default DayCard;