import React, { useEffect, useState } from 'react'
import Header from './Header'
import Table from './Table'
import  { students } from '../.././studentsData'

const Homepage = () => {
  const [studentData, setStudentData] = useState([])
  const [ openNewStudent, setOpenNewStudent ] = useState(false)
  const [ showId, setShowId ] = useState('')
  const [ editId, setEditId ] = useState('')

  useEffect(()=>{
    setStudentData(students)
  }, [])

  const showStudent = (id)=> {
    setShowId(id)
    setOpenNewStudent(true)
  }

  const editStudent = (id) => {
    setEditId(id)
    setOpenNewStudent(true)
  }

  return (
    <div className='homepage'>
        <Header studentData={studentData} setStudentData={setStudentData} showId={showId} editId={editId} openNewStudent={openNewStudent} setOpenNewStudent={setOpenNewStudent} setShowId={setShowId} setEditId={setEditId}/>
        <Table studentData={studentData} setStudentData={setStudentData} showStudent={showStudent} editStudent={editStudent}  openNewStudent={openNewStudent} setOpenNewStudent={setOpenNewStudent} setShowId={setShowId} setEditId={setEditId}/>
    </div>
  )
}

export default Homepage

