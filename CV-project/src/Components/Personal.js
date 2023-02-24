import React from 'react'
import EditableLabel from './EditableLabel'

const Personal = () => {
  return (
    <div className="personal">
      <div className="personal-info">
        <EditableLabel value='First Name' tag='h1' />
        <EditableLabel value='Last Name' tag='h1' />
        <EditableLabel value='Occupation' tag='h5' />

      </div>

      <div className="contact">
        <EditableLabel value='Address Line 1' tag='p' />
        <EditableLabel value='Address Line 2' tag='p' />
        <EditableLabel value='Town/City' tag='p' />
        <EditableLabel value='Country' tag='p' />
        <EditableLabel value='Post Code' tag='p' />
        <EditableLabel value='Phone' tag='p' />
        <EditableLabel value='Email' tag='p' />

      </div>
    </div>
  )
}

export default Personal
