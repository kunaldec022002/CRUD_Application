import React, { useEffect,useState } from 'react'
import {EmployeeData} from '../Data/EmployeeData'

const Home = () => {

  const [data, setData] = useState([]);

  useEffect(() =>{
    setData(EmployeeData)
  },[]);
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
                  <button className='btn btn-primary'>Edit</button>&nbsp;
                  <button className='btn btn-danger'>Delete</button>
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
