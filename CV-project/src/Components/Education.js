import React, {Component} from 'react'
import uniqid from 'uniqid'
import QualItem from './QualItem'

class Education extends Component{
	constructor(){
		super()
		this.state = {
			default: {
				id: uniqid(),
				school: '',
				from: '',
				to: '',
				qualification: '',
				grade: ''
			},
			activeForm: false,
			activeButton: true,
			quals: []
		}
	}

	toggleForm = () => {
		this.setState({
			activeForm: !this.state.activeForm,
			activeButton: !this.state.activeButton
		})
	}

	handleAdd = () => {
		this.toggleForm()
	}

	handleChange = (e) => {
		const {name, value} = e.target
		
		this.setState({
			default: {...this.state.default, [name]: value}
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.setState({
			quals: [...this.state.quals, this.state.default]
		})

		this.resetForm()
		this.toggleForm()
	}

	handleCancel = (e) => {
		e.preventDefault()
		this.toggleForm()
		this.resetForm()
	}

	resetForm = () => {
		this.setState({
			default: {...this.state.default,
				id: uniqid(),
				school: '',
				from: '',
				to: '',
				qualification: '',
				grade: ''
			}
		})
	}

	handleDelete = (id) => {
		const filteredQuals = this.state.quals.filter(qual => {
			return qual.id !== id
		})

		this.setState({
			quals: filteredQuals
		})
	}

	render(){

		let hiddenForm = this.state.activeForm ? "education-form" : "education-form hidden"
		let hiddenButton = this.state.activeButton ? "add-item" : "add-item hidden"

		const displayQual = this.state.quals.map((qual) => {
			return <QualItem data={qual} key={qual.id} handleDelete={this.handleDelete} />
		})

		return(
			<div className="education">
				<h3>Education</h3>

				{displayQual}

				<form className={hiddenForm} onSubmit={this.handleSubmit}>
					<div className="form-control">
						<label for="school">Name of University or School:</label>
						<input
							type="text"
							name="school"
							placeholder="Enter Here"
							onChange={this.handleChange}
							value={this.state.default.school}
						/>
					</div>

					<div className="form-control w-50">
						<label for="from">From:</label>
						<input
							type="text"
							name="from"
							placeholder="YYYY"
							onChange={this.handleChange}
							value={this.state.default.from}
						/>
					</div>

					<div className="form-control w-50">
						<label for="to">To:</label>
						<input
							type="text"
							name="to"
							placeholder="YYYY"
							onChange={this.handleChange}
							value={this.state.default.to}
						/>
					</div>

					<div className="form-control">
						<label for="qualification">Qualification/Degree:</label>
						<input
							type="text"
							name="qualification"
							placeholder="Enter Here"
							onChange={this.handleChange}
							value={this.state.default.qualification} 
						/>
					</div>

					<div className="form-control">
						<label for="grade">Grade:</label>
						<input
							type="text"
							name="grade"
							placeholder="Enter Here"
							onChange={this.handleChange}
							value={this.state.default.grade} 
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

export default Education
