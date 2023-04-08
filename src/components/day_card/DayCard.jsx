import "./DayCard.css"

function DayCard(props) {

    // props.addExpense(20);

    return ( 
        <div className="day-card card ms-1 me-1 mb-2 d-inline-flex">
            <div className="card-header">
                {props.date.toDateString()}
            </div>
            <div className="card-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit voluptates consectetur aperiam labore dolore tenetur earum recusandae quidem cupiditate nam! Accusantium obcaecati iusto laboriosam temporibus tenetur vel quam perspiciatis voluptate!
                <button className="btn" onClick={() => props.setUsedBudget(props.usedBudget + 20)}>Press Me</button>
            </div>
        </div>
     );
}

export default DayCard;