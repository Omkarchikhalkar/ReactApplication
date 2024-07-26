import React, { useState, useContext } from "react";
const employeeContext=React.createContext();

function UsecontextHook(){

  const [employee,setEmployee]=useState({Id:101,Name:'KP',
                                Location:'Sweden',Salary:12345, HRA:123, Basic:234});
  return(
    <div>
      <center>
        <h1>React Hooks - useContext</h1>
      </center>
                                    <employeeContext.Provider value={employee}>
                                        <Employee></Employee>
                                    </employeeContext.Provider>      
    </div>
  );
}

function Employee(){
  let context=useContext(employeeContext);

  return(
    <div>
      <h2>Employee Details</h2>
      <p>
        <label>Employee ID : <b>{context.Id}</b></label>
      </p>
      <p>
        <label>Employee Name : <b>{context.Name}</b></label>
      </p>
      <p>
        <label>Employee Location : <b>{context.Location}</b></label>
      </p>
      <Salary></Salary>
    </div>
  );
}

function Salary(){
  let context=useContext(employeeContext);

  return(
    <div>
      <h2>Salary Details</h2>
      <p>
        <label>Employee ID : <b>{context.Id}</b></label>
      </p>
      <p>
        <label>Employee Salary : <b>{context.Salary}</b></label>
      </p>
      <Salarybreakup></Salarybreakup>
    </div>
  );
}

function Salarybreakup(){
    let context=useContext(employeeContext);

    return(
      <div>
        <h2>Salary Breakup Details</h2>
        <p>
          <label>Employee ID : <b>{context.Id}</b></label>
        </p>
        <p>
          <label>Employee Salary : <b>{context.Salary}</b></label>
        </p>
        <p>
          <label>Employee Salary Basic: <b>{context.Basic}</b></label>
        </p>
        <p>
          <label>Employee Salary HRA: <b>{context.HRA}</b></label>
        </p>
      </div>
    );
  }

export default UsecontextHook;




const employeeUpdateContext=React.createContext();

export function UpdateStateUsecontextHook(){

  const [employee,setEmployee]=useState({Id:101,Name:'KP',Type:'Contract',
                                Location:'Sweden',Salary:12345, EmploymentType:'Contract'});
  return(
    <div>
      <center><h1>React Hooks - useContext with State update</h1></center>
      <employeeUpdateContext.Provider value={{data:employee,updateEmployee:setEmployee}}>
          <Employees></Employees>
      </employeeUpdateContext.Provider>           
    </div>
  );
}

function Employees(){
  let context=useContext(employeeUpdateContext);

  function changeEmploymentType(){
    context.updateEmployee({...context.data,EmploymentType:'Permanent'});
  }
  return(
    <div>
      <h2>Employee Details</h2>
      <p>
        <label>Employee ID : <b>{context.data.Id}</b></label>
      </p>
      <p>
        <label>Employee Name : <b>{context.data.Name}</b></label>
      </p>  
      <p>
        <label>Employee Salary : <b>{context.data.Salary}</b></label>
      </p>    
      <p>
        <label>Employee Employeement Type : <b>{context.data.EmploymentType}</b></label>
      </p>
      <employeeUpdateContext.Consumer>
        {value=>value.data.EmploymentType==='Permanent'?
              <Permanent></Permanent>:<Contract></Contract>}
      </employeeUpdateContext.Consumer>

        

      <button onClick={changeEmploymentType}>Make Permanent</button>
      <EmployeeSalary></EmployeeSalary>
    </div>
  );
}
function EmployeeSalary(){
  let context=useContext(employeeUpdateContext);

  function updateSalary(){
    context.updateEmployee({...context.data,Salary:15000});
  }
  return(
    <div>
      <h2>Salary Details</h2>
      <p>
        <label>Employee ID : <b>{context.data.Id}</b></label>
      </p>
      <p>
        <label>Employee Salary : <b>{context.data.Salary}</b></label>
      </p>

      <button onClick={updateSalary}>Update</button>
    </div>
  );
}

function Permanent(){
    let context=useContext(employeeUpdateContext);
  return (
    <div>
      <h2>Permanent Employee</h2>
      <p>
        <label>Employee Employeement Type : <b>{context.data.EmploymentType}</b></label>
      </p>
      <p>
        <label>Employee Salary : <b>{context.data.Salary}</b></label>
      </p>
    </div>
  );
}

function Contract(){
    let context=useContext(employeeUpdateContext);
  return(
    <div>
      <h2>Contract Employee</h2>
      <p>
        <label>Employee Employeement Type : <b>{context.data.EmploymentType}</b></label>
      </p>
      <p>
        <label>Employee Salary : <b>{context.data.Salary}</b></label>
      </p>
    </div>
  )
}
