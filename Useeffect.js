import {useState, useEffect } from "react";
import '../CSS/table.css';

function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [txt, setTxt] = useState("");

  useEffect(() => {
    console.log(count);
    document.getElementById("lbl").innerHTML = `You clicked ${count} times`;
  }, [count]);

  function changeEmployeeInfo(e){
    setTxt([e.target.value]);
  }

  return (
    <div>
      <center>
        <h1>React Hooks - useEffect</h1>
      </center>
      <br />
      <br />
      <center>
        <label id="lbl"></label>
      </center>
      <br />
      <br />
      <br />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count} times{" "}
      </button>


      <p>
        <label>Employee Name : 
                <input type="text" name="Name" value={txt} 
                onChange={changeEmployeeInfo}></input>
        </label>
        Name is {txt}
      </p>
    </div>
  );
}

export default UseEffectHook;




export function UseEffectHookforEmployees() {
  const [employees, setEmployees] = useState([]);
  const [searchText, setSearchText]=useState('');
  const [employeeCount, setEmployeeCount]=useState(0);

  useEffect(() => {
    console.log("use effect");
    fetch("http://localhost:53353/api/Employee/"+ searchText)
      .then((res) => res.json())
      .then((result) => {
        setEmployees(result);
      });
  }, [searchText,employeeCount]);

  function onSearchTextChange(e){
    setSearchText(e.target.value);
  }

  

  return (
    <div>
        <center><h1>React Hooks - useEffect with API</h1></center>
        <br/>
      <h2>Employees Data </h2>
      <p>
        <label>Search By Name : <input type="text" value={searchText}
                                  onChange={onSearchTextChange}></input></label>
      </p>  
      <table id="employee">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Location</th>
            <th>Salary</th>
            <th>Permanent</th>
          </tr>
        </thead>
        <tbody>
          {console.log(employees.length)}
        {employees.length > 0 ?
          employees.map((emp) => (
            <tr key={emp.Id}>
              <td>{emp.Id}</td>
              <td>{emp.Name}</td>
              <td>{emp.Location}</td>
              <td>{emp.Salary}</td>
              <td>{emp.IsPermanent ? "Yes" : "No"}</td>
            </tr>
          )) : <tr><td colspan="5" style={{textAlign:"center"}}><b>Data not found !!</b></td></tr>}
        </tbody>
      </table>
    </div>
  );
}

