import React from "react";


class Employeedetails extends React.Component{

    constructor({props}){
      super(props);
      this.state={updateSalary:null}
      console.log(this.props)
    }  

    getUpdatedSalary = (salary) => {
        this.setState({updatedSalary:salary});
        }

    render(){
        

      return <div>
      <center><h1>Flow of Props and State</h1></center>
      <div style={{ backgroundColor:"Gray", borderRadius:"40px", border:"3px solid red", padding:"10px"}}>
        <h3><u>Employee Personal Details</u></h3>
      <p>
          Id : <b>{this.props.Id}</b>
      </p>
        <p>
          Name : <b>{this.props.Name}</b>
      </p>
        <p>
          Location : <b>{this.props.Location}</b>
      </p>
        <p>
          Total Salary : <b>{this.props.Salary}</b>
      </p>
      <p>
        Updated Salary : <b>{this.state.updatedSalary}</b>
</p>
      <Salary BasicSalary={this.props.BasicSalary} HRA={this.props.HRA} SpecialAllowance={this.props.SpecialAllowance} SalaryBreak={this.props.SalaryBreak} onSalaryChanged={this.getUpdatedSalary}></Salary>
      

        </div>
        </div>
    }
  }
  
  class Salary extends React.Component{
    constructor(props){
        super(props);
        this.state={
          basic:this.props.BasicSalary,
          hra:this.props.HRA,
          sa:this.props.SpecialAllowance
        };
    }

    updateSalary=()=>{
        let salary = parseInt(this.refs.BasicSalary.value) + parseInt(this.refs.HRA.value) + parseInt(this.refs.SpecialAllowance.value);
        this.props.onSalaryChanged(salary);     //Callback for Parent
    }

    render(){
      return <div>
        <h3>Salary Details</h3>
  {/* <p>
          <label>Basic Salary : <b>{this.props.BasicSalary}</b></label>
      </p>
  <p>
          <label>HRA : <b>{this.props.HRA}</b></label>
      </p>
      <p>
          <label>Special Allowance : <b>{this.props.SpecialAllowance}</b></label>
      </p> */}

      <p>
        <label>Basic Salary :<input type="text" defaultValue={this.state.basic} ref="BasicSalary"/></label>
    </p>
<p>
        <label>HRA : <input type="text" defaultValue={this.state.hra} ref="HRA"/></label>
    </p>
    <p>
        <label>Special Allowance <input type="text" defaultValue={this.state.sa} ref="SpecialAllowance"/></label>
    </p>
    <button onClick={this.updateSalary}>Update</button>
      {/* <Salarybraekup SalaryBreak={this.props.SalaryBreak}></Salarybraekup> */}
        </div>
    }
  }

  class Salarybraekup extends React.Component{
    constructor(props){
      super(props);
      console.log("erty");
      console.log(this.props)
    }
    render(){
      return <div>
        <h3>Salary Break Details</h3>
        <p>
          <label>Salary Break Allowance : <b>{this.props.SalaryBreak}</b></label>
        </p>
        </div>
    }
  }

  export default Employeedetails