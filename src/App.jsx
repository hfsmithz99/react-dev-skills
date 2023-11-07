import { useState } from 'react'
import Header from './header'
import SkillList from './SkillList'
import NewSkillForm from './NewSkillForm'
import './App.css'

function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);


  return (
    <>
      <Header />
      <SkillList skills={skills}/>
      <hr />
      <NewSkillForm />
    </>
  )
}

export default App
