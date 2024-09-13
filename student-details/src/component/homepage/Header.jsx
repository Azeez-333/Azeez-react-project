import React, { useState } from 'react'

const Header = ({ studentData, setStudentData, showId, setOpenNewStudent, openNewStudent, editId ,setEditId,setShowId}) => {

  const [ newStudent, setNewStudent ] = useState({
    "name": "",
    "address": "",
    "city": "",
    "country": ""
  })


 const handleAddStudent = () => {
  // console.log("sd")
  setNewStudent({
    "name": "",
    "address": "",
    "city": "",
    "country": ""
  })
  setOpenNewStudent(true)
 }

 const onClose = () => {
  setEditId('')
  setShowId('')
  setOpenNewStudent(false)
  

 }

 const handleModalClick = (e) => {
  e.stopPropagation();
};

const handleAddInput = (e) => {
  const { name, value } = e.target;
  setNewStudent( {
    ...newStudent, [name]: value
  } )
}

const handleAddNewStudent = () => {
  setStudentData( [
    ...studentData, { id: studentData.length + 1, ...newStudent }
  ] )
  setNewStudent({
    "name": "",
    "address": "",
    "city": "",
    "country": ""
  })
  setOpenNewStudent(false)
}
  return (
    <div>
    <div className='header'>
        <input type="text" placeholder='Student Name' className='search'/>
        <h1 className='title'>STUDENTS DETAILS</h1>
        <button className='button' onClick={handleAddStudent}>Add New Student</button>
    </div>
    
    {openNewStudent ?  
    <div className="modal-backdrop" onClick={(e)=>onClose(e)}>
          <div className="modal" onClick={handleModalClick}>
            <h2>Add New Student</h2>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={showId ? studentData[showId - 1].name : editId ? studentData[editId - 1].name : newStudent.name}
                placeholder="Enter name"
                onChange={(e)=> handleAddInput(e)}
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={showId ? studentData[showId - 1].address : editId ? studentData[editId - 1].address : newStudent.address}
                placeholder="Enter address"
                onChange={(e)=> handleAddInput(e)}
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={showId ? studentData[showId - 1].city : editId ? studentData[editId - 1].city : newStudent.city}
                placeholder="Enter city"
                onChange={(e)=> handleAddInput(e)}
              />
            </div>
            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                name="country"
                value={showId ? studentData[showId - 1].country : editId ? studentData[editId - 1].country : newStudent.country}
                placeholder="Enter country"
                onChange={(e)=> handleAddInput(e)}
              />
            </div>
            <div className="modal-buttons">
            {!showId &&
              <button onClick={handleAddNewStudent}>Add Record</button>
            }
            <button onClick={(e)=>onClose(e)}>Close</button>
            </div>
      </div>
      </div>  :  ""}
   
    </div>
  )
}

export default Header
