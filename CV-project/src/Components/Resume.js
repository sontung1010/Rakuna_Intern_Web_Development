import React from 'react'
import Personal from './Personal'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'

const Resume = () => {
  return (
    <main>
      <Personal />
      <hr />
      <Education />
      <hr />
      <Experience />
      <hr />
      <Skills />
    </main>
  )
}

export default Resume
