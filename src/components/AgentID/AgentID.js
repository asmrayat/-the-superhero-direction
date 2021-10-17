import React, { useEffect, useState } from 'react';
import Bill from '../Bill/Bill';
import Infos from '../Infos/Infos';
import './AgentID.css'

const AgentID = () => {
    const [AgentInfo, setAgentInfo] = useState([]);
    const [bill, setbill] = useState([]);

    useEffect(() => {
        fetch('./agentInfo.json')
            .then(res => res.json())
            .then(data => setAgentInfo(data));
    }
        , [])


    const handleAddToBill = (AgentInfos) => {
        // console.log(AgentInfos.name);
        const newBill = [...bill, AgentInfos];
        setbill(newBill);
    }
    return (
        <div className="agent-container">
            <div className="agentinfo">
                <div class="row row-cols-1 row-cols-md-3 g-4 mt-5 mx-5">
                    {
                        AgentInfo.map(AgentInfos => <Infos
                            key={AgentInfos.key}
                            AgentInfos={AgentInfos}
                            handleAddToBill={handleAddToBill}

                        >

                        </Infos>)
                    }
                </div>
            </div>
            <div class="mt-5" className="totalbill">
                <Bill Bill={bill}></Bill>
            </div>
        </div>
    );
};

export default AgentID;