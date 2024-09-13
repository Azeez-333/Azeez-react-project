import React from 'react'
import eyeIcon from '../../assets/svg/eye.svg';
import editIcon from '../../assets/svg/edit.svg';
import deleteIcon from '../../assets/svg/delete.svg';

const Table = ({ studentData, setStudentData, showStudent, editStudent , openNewStudent, setOpenNewStudent }) => {

  

const handleDeleteStudent = (id) => {
  
  const student = studentData.filter((student) => student.id !== id )
  const newData = student.map((student, i) => ({
    id: i + 1,
    name: student.name,
    address: student.address,
    city: student.city,
    country: student.country,
  }));
  setStudentData(newData)
}

const handleShowStudent = (id)=> {
  showStudent(id)
}

const handleEditStudent = (id) => {
  editStudent(id)
}

  return (
    <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead>
        <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Country</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
      {studentData.map((student, i) =>(
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{student.name}</td>
          <td>{student.address}</td>
          <td>{student.city}</td>
          <td>{student.country}</td>
          <td>
            <div className="table-icons">
            <img src={eyeIcon} alt="Eye Icon" width="20" height="20" onClick={()=> handleShowStudent(student.id)} />
            <img src={editIcon} alt="Edit Icon" width="20" height="20" onClick={()=> handleEditStudent(student.id)} />
            <img src={deleteIcon} alt="Delete Icon" width="20" height="20" onClick={()=> handleDeleteStudent(student.id)} />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
</table>
  )
}

export default Table



