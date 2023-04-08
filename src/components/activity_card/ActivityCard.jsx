import { useEffect, useState } from "react";


function ActivityCard(props) {
    const [description, setDescription] = useState("");
    const [time, setTime] = useState("");
    const [cost, setCost] = useState(0);
    const [editMode, setEditMode] = useState(true);

    useEffect(() => {
        props.activity.description = description;
        props.activity.time = time;
        props.activity.cost = cost;
        props.editActivity(props.index, props.activity);
    },[description, time, cost]);

    return ( 
        <div className="card mb-2">
            <div className="card-header">
                {editMode? <div className="d-flex"><input className="form-control me-1" type="time" onChange={e => setTime(e.target.value)} /> <input className="form-control" type="number" onChange={e => setCost(parseInt(e.target.value))} defaultValue={props.activity.cost} /></div> :
                <div className="d-flex justify-content-between"><span>{props.activity.time}</span><span>Cost: {props.activity.cost}</span></div>}
            </div>
            <div className="card-body">
                {editMode? <textarea className="form-control" name="description" id="description" rows="3" onChange={e => setDescription(e.target.value)} defaultValue={props.activity.description}></textarea> :
                <p>{props.activity.description}</p>}
            </div>
            <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-sm btn-link text-danger" onClick={() => props.deleteCard(props.index)}>Delete</button>
                {editMode?<button className="btn btn-sm btn-success" onClick={() => setEditMode(false)}>Save</button>:<button className="btn btn-sm btn-info" onClick={() => setEditMode(true)}>Edit</button>}
            </div>
        </div>
     );
}

export default ActivityCard;