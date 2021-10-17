import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

const Infos = (props) => {
    const headIcon = <FontAwesomeIcon icon={faAddressBook} />
    // console.log(props.);
    const { name, img, gender, phone, balance } = props.AgentInfos;
    return (
        <div>
            <div class="col">
                <div class="card h-100">
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h2 class="card-title mb-3">{name}</h2>
                        <p class="card-text">
                            <h5>Gender: {gender}</h5>
                            <h5>Phone: {phone}</h5>
                            <h5 class="mb-5">Salary: {balance}</h5>
                            <button
                                onClick={() => props.handleAddToBill(props.AgentInfos)}
                            ><span className="btn">Add</span> </button> <span> {headIcon}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Infos;