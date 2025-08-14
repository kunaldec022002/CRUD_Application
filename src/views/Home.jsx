import React, { useEffect,useState } from 'react'
import {EmployeeData} from '../Data/EmployeeData'

const Home = () => {

  const [data, setData] = useState([]);

  useEffect(() =>{
    setData(EmployeeData)
  },[]);

  const handleEdit = (id) =>{
    alert(id);
  }

   const handleDelete = (id) =>{
    if (id > 0 ) {
      if(window.confirm("are you sure to delete this item")){
        const dt = data.filter(item => item.id !==id);
        setData(dt);
      }
    }
  }
  return (
    <div>
      <table className='table table-hover'>
        <thead>
          <tr>
            <td>Sr.No</td>
            <td>Id</td>
            <td>first Name</td>
            <td>Last Name</td>
            <td>Age</td>
            <td>Actions</td>
          </tr>
        </thead>

        <tbody>
          {
           data.map((item, index) =>{
            return(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>
                  <button className='btn btn-primary' onClick={()=> handleEdit(item.id)}>Edit</button>&nbsp;
                  <button className='btn btn-danger' onClick={()=> handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            )
           })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home
