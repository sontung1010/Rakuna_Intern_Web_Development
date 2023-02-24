import React from 'react'

const QualItem = (props) => {
  return (
    <div className="qual-card">
      <div className="school-details">
        <h5>{props.data.school}</h5>
        <p>{props.data.from} = {props.data.to}</p>
      </div>

      <div className="qual-details">
        <h5>{props.data.qualification}</h5>
        <p>{props.data.grade}</p>
      </div>

      <div className="delete-container">
        <i className="fa fa-times-circle" onClick={() => {props.handleDelete(props.data.id)}}></i>
      </div>
    </div>
  )
}

export default QualItem
