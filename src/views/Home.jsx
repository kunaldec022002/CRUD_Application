import React, { useEffect, useState } from "react";
import { EmployeeData } from "../Data/EmployeeData";

const Home = () => {
  const [data, setData] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [id, setId] = useState(0);
  const [isupdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setData(EmployeeData);
  }, []);

  const handleEdit = (id) => {
    const dt = data.filter((item) => item.id === id);
    if (dt !== undefined) {
      setIsUpdate(true);
      setId(id);
      setFirstName(dt[0].firstName);
      setLastName(dt[0].lastName);
      setAge(dt[0].age);
    }
  };

  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("are you sure to delete this item")) {
        const dt = data.filter((item) => item.id !== id);
        setData(dt);
      }
    }
  };

  const handleSave = () => {};

  const handleUpdate = () => {
    const index = data
      .map((item) => {
        return item.id;
      })
      .indexOf(id);

    const dt = [...data];
    dt[index].firstName = firstName;
    dt[index].lastName = lastName;
    dt[index].age = age;

    setData(dt);
    handleClear();
  };

  const handleClear = () => {
    setId(0);
    setFirstName("");
    setLastName("");
    setAge("");
    setIsUpdate(false);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "10px" }}>CRUD APPLICATION</h1>

      <div style={{ display: "flex", justifyContent: "center",margin:"10px" }}>
        <div>
          <label>
            first Name:
            <input
              type="text"
              placeholder="enter first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Last Name:
            <input
              type="text"
              placeholder="enter last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            age:
            <input
              type="text"
              placeholder="enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
        </div>

        <div style={{ marginLeft: "5px" }}>
          {!isupdate ? (
            <button className="btn btn-success" onClick={() => handleSave()}>
              Save
            </button>
          ) : (
            <button className="btn btn-success" onClick={() => handleUpdate()}>
              Update
            </button>
          )}
          &nbsp;
          <button className="btn btn-danger" onClick={() => handleClear()}>
            Clear
          </button>
          &nbsp;
        </div>
      </div>

      <table className="table table-success table-striped-columns">
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
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
