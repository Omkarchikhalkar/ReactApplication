import React from "react";


class EmployeeComponent extends React.Component {

    render(){
      return <div><center><h1>Class Component</h1></center>
      <h2>Employee Details...</h2>
      <p>
        <label>Name : <b>{this.props.name}</b></label>
      </p>
      </div>;
    }
    }

export default EmployeeComponent;