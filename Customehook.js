import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return data;
}
function CustomHooksWithAPI() {
  console.log("CustomHooksWithAPI");
  const employees = useFetch("http://localhost:53353/api/Employee/");

  return (
    <div>
      <center>
        <h1>React Hooks - Custom Hooks</h1>
      </center>
      <h3>Employees Data</h3>
      <table id="employee">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Location</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.Id}>
              <td>{emp.Id}</td>
              <td>{emp.Name}</td>
              <td>{emp.Location}</td>
              <td>{emp.Salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <Department />
    </div>
  );
}

export default CustomHooksWithAPI;

function Department() {
  const departments = useFetch("http://localhost:53353/api/Department/");
  return (
    <div>
      <h3>Department Data</h3>
      <table id="employee">
        <thead>
          <tr>
            <th>Id</th>
            <th>Department Name</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((emp) => (
            <tr key={emp.Id}>
              <td>{emp.Id}</td>
              <td>{emp.DeptName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
