import React from 'react'

const JobItem = (props) => {
  return (
    <div className="job-card">
      <div className="job-details">
        <h5>{props.data.company}</h5>
        <h6>{props.data.city}</h6>
        <p>{props.data.from} - {props.data.to}</p>
      </div>

      <div className="job-desc">
        <h5>{props.data.role}</h5>
        <p>{props.data.desc}</p>
      </div>

      <div className="delete-container">
        <i className="fa fa-times-circle" onClick={() => {props.handleDelete(props.data.id)}}></i>
      </div>
    </div>
  )
}

export default JobItem
