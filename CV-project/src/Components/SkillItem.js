import React from 'react'

const SkillItem = (props) => {
  return(
    <div className="skill-card">
      <div className="skill-name">
        <h1>{props.skill}</h1>
      </div>

      <div className="delete-container">
        <i className="fa fa-times-circle" onClick={() => {props.handleDelete(props.skill)}}></i>
      </div>
    </div>
  )
}

export default SkillItem
