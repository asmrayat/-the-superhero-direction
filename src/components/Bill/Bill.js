import React from 'react';
import './Bill.css'


const Bill = (props) => {

    const { Bill } = props;
    let total = 0;
    let Name = [];
    for (const AgentInfos of Bill) {
        total = total + AgentInfos.balance;
        Name.push(AgentInfos.name + ', ');
        console.log(Name);
    }
    return (
        <div>
            <h2 class="text-center">Total Bill</h2>
            <h3>Total Person: {Bill.length}</h3>
            <h3>Total bill: {total.toFixed(2)} </h3>
            <h4 class="text-center">Agents Name</h4>
            <h5 className="Name">{Name}</h5>


        </div>
    );
};

export default Bill;