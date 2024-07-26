import React from "react";


class Component extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	increment = () => {
		this.setState((prevState) => ({
			count: prevState.count + 1,
		}));
	};

	decrement = () => {
		this.setState((prevState) => ({
			count: prevState.count - 1,
		}));
	};

	render() {
		return (
			<div>
				<center><h1>State with Counter</h1></center>
				<h1>
					The current count is :{" "}
					{this.state.count}
				</h1>
				<button onClick={this.increment}>
					Increase
				</button>
				<button onClick={this.decrement}>
					Decrease
				</button>
			</div>
		);
	}
}

export default Component;

export class Stateexample extends React.Component {
  state = { counter: 0 };
  addEmployee = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <div>
        <center>
          <h1>State</h1>
        </center>
        <button onClick={this.addEmployee}>Add Employee</button>
        <p>
          <label>
            Add Employee Button is Clicked : <b>{this.state.counter}</b>
          </label>
        </p>
      </div>
    );
  }
}