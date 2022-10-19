import React from 'react'
import './InProgress.css'
import { RiBookletLine } from 'react-icons/ri'

const InProgress = () => {
    return (
        <div className='InProgress'>
            <h3 className="InProgress-heading">In Progress (Assignments)</h3>
            <div className='container'>
                <div className="row InPorgress-row">
                    <div className="col-lg-2 InPorgress-col">Order ID</div>
                    <div className="col-lg-2 InPorgress-col">Assignment</div>
                    <div className="col-lg-2 InPorgress-col">Deadline</div>
                    <div className="col-lg-2 InPorgress-col">Subject</div>
                    <div className="col-lg-2 InPorgress-col">Status</div>
                    <div className="col-lg-2 InPorgress-col">WhatsApp Chat</div>
                </div>
            </div>
        </div>
    )
}

export default InProgress