import { useState } from "react";
import "../CSS/login.css";

function UseStateHook() {
    const [counter, setCounter] = useState(0);
  
    return (
      <>
	  {console.log("uio")}
	  <center><h1>React Hooks - useState</h1></center>
        <h1>The Counter is {counter}! </h1>
        <p>{counter % 2 == 0 ? 'even!' : 'odd!'}</p>
        <button type="button" onClick={() => setCounter(counter+1)}>Increament</button>
        <button type="button" onClick={() => setCounter(counter-1)}>Decreament</button></>
    )
  }

  export default UseStateHook;



  export function Carinfo() {
    const [car, setCar] = useState({
        brand: "Tata",
        model: "Tiago",
        year: "2000",
        color: "red"
      });

      const updateColor = () => {
        setCar({color: "wheat"})     //Lost all other properties
        // setCar(previousState => {
        //     return { ...previousState, color: "wheat"}
        //   });
      }
      console.log(car);
  
    return (
      <div><center><h1>React Hooks - Multi useState Updation</h1></center>
        <h1>My {car.brand}</h1>
        <p style={{color:car.color}}>
          It is a {car.color} {car.model} from {car.year}.
        </p>
        <button
        type="button"
        onClick={updateColor}
      >Color Change</button>
      </div>
    )
  }


 
export function LoginUsingUseStateHook() {
	const [data, setData] = useState({
		username: '',
		password: ''
	});
	const [form, setForm] = useState({
		username: '',
		password: ''
	});
	const [submit, submitted] = useState(false);

	const printValues = e => {
		e.preventDefault();
		setForm({
			username: data.username,
			password: data.password
		});
		submitted(true);
	};

	const updateField = e => {
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};

	return (
		<div><center><h1>Login Form using useState Hooks</h1>
		
			<form onSubmit={printValues}>
            <br />
                <div>
				<label className="lbl">
					Username    :   
                    </label>
					<input
						value={data.username}
						name="username"
                        type="text"
						onChange={updateField}
					/>
                </div>
                <div>
				<label className="lbl">
					Password    :
                    </label>
					<input
						value={data.password}
						name="password"
						type="password"
						onChange={updateField}
					/>
                </div>
				<button>Submit</button>
				
			</form>

			<p>{submit ? form.username : null}</p>
			<p>{submit ? form.password : null}</p></center>
		</div>
	);
}

