import React, {Component} from 'react'
import uniqid from 'uniqid'
import SkillItem from './SkillItem'

class Skills extends Component{
  constructor(){
    super()
    this.state = {
      skill: '',
      skills: [],
      activeForm: false,
      activeButton: true
    }
  }

  handleAdd = () => {
    this.toggleForm()
  }

  handleCancel = (e) => {
    e.preventDefault()
    this.toggleForm()
    this.resetForm()
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  hadleSubmit = (e) => {
    e.preventDefault()

    this.setState({
      skills: [...this.state.skills, this.state.skill]
    })

    this.toggleForm()
    this.resetForm()
  }

  toggleForm = () => {
    this.setState({
      activeForm: !this.state.activeForm,
      activeButton: !this.state.activeButton
    })
  }

  resetForm = () => {
    this.setState({
      skill: ''
    })
  }

  handleDelete = (id) => {
    const filteredSkills = this.state.skills.filter(skill => {
      return skill !== id
    })

    this.setState({
      skills: filteredSkills
    })
  }

  render(){
    let hiddenForm = this.state.activeForm ? "skill-form" : "skill-form hidden"
    let hiddenButton = this.state.activeButton ? "add-item" : "add-item hidden"

    const displaySkill = this.state.skills.map((skill) => {
      return <SkillItem skill={skill} key={uniqid()} handleDelete={this.handleDelete}/>
    })

    return(
      <div className="skills">
        <h3>Skills</h3>

        <div className="skills-list">
          {displaySkill}
        </div>

        <form className={hiddenForm} onSubmit={this.handleSubmit}>
          <div className="form-control">
            <label for="skill">Show off your skills:</label>
            <input
              type="text"
              name="skill"
              placeholder="Enter skill"
              value={this.state.skill}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-control buttons">
            <button className="submit"><i className="fa fa-plus-circle"></i> Save</button>
            <button className="cancel" onClick={this.handleCancel}><i className="fa fa-ban"></i> Cancel</button>
          </div>
        </form>

        <button className={hiddenButton} onClick={this.handleAdd}><i className="fa fa-plus-circle"></i> Add</button>
        </div>
    )
  }
}

export default Skills
