import React from "react";


export function Employee(data) {
  
	return <div><center><h1>Functional Component</h1></center>
    <p>Name : {data.name}</p>
	  <p>Salary : {data.salary}</p></div>;
  }


export const Employee1=(data)=> {
  console.log("12");
    return <div><center><h1>Functional Component Ex.</h1></center>
      <p>Name : {data.name}</p>
      <p>Salary : {data.salary}</p></div>
    }

export default Employee