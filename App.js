//import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  Routes,
  NavLink,
} from "react-router-dom";
import "./CSS/SidebarCSS.css";
import Default from "./Default";
import DemoComponent from "./Props_State/Democomponent";
import Component, { Stateexample } from "./Props_State/Component";
import Employeedetails from "./Props_State/Employeedetails";
import EmployeeComponent from "./Component/EmployeeComponent";
import Parent from "./Props_State/Parent";
import Employee, { Employee1 } from "./Component/Employee";
import Superconstrutor, { Header } from "./Lifecycle/Superconstrutor";
import { Componentlifecycle } from "./Lifecycle/Superconstrutor";
import UseStateHook, { Carinfo, LoginUsingUseStateHook } from "./Hooks/Usestate";
import UseEffectHook, { UseEffectHookforEmployees } from "./Hooks/Useeffect";
import Sidebar from "./CSS/Sidebar";
import UsecontextHook from "./Hooks/Usecontext";
import { UpdateStateUsecontextHook } from "./Hooks/Usecontext"; 
import UserefHook from "./Hooks/Useref";
import UsereducerHook from "./Hooks/Usereducer";
import CustomHooksWithAPI from "./Hooks/Customehook";
import NPMCustomHook from "./Hooks/NPMcustomHooks";
//import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          {/* <div className="sidenav" style={{ display: "flex", height: "100vh" }}>
            <Sidebar>
              <Menu>
                <MenuItem className="menu1" component={<Link to="/" />}>
                  <h2>React JS</h2>
                </MenuItem>
                <MenuItem>
                  <Link to="/fn/fn1">Functional Component</Link>
                </MenuItem>
                <MenuItem className="menuItem" component={<Link to="/fn/fn2" />}> Logout </MenuItem>

                <MenuItem> Invoices </MenuItem>
                <MenuItem element={<Link to="/fn/fn1" />}>
                  {" "}
                  Documentation
                </MenuItem>
                <MenuItem element={<Link to="/fn/fn2" />}> Calendar</MenuItem>
                <MenuItem element={<Link to="/Class-Component" />}>
                  {" "}
                  E-commerce
                </MenuItem>
                <SubMenu label="Charts" className="menuItem">
                  <MenuItem> Timeline Chart </MenuItem>
                  <MenuItem> Bubble Chart </MenuItem>
                </SubMenu>
                <SubMenu label="Wallets">
                  <MenuItem>Current Wallet</MenuItem>
                  <MenuItem>Savings Wallet</MenuItem>
                </SubMenu>
                <MenuItem> Transactions </MenuItem>
                <SubMenu label="Settings">
                  <MenuItem> Account </MenuItem>
                  <MenuItem> Privacy </MenuItem>
                  <MenuItem> Notifications </MenuItem>
                </SubMenu>
                <MenuItem> Logout </MenuItem>
              </Menu>
            </Sidebar>
          </div> */}

          {/* <div className="sidenav">
            
            <Link to="fn">Functional Component</Link>
            <Link to="fn1">Functional Component - 1</Link>
            <Link to="clscomp">Class Component</Link>
            <Link to="/props">Props</Link>
            <NavLink to="/props1">Props in Heirarchy</NavLink>
            <NavLink to="/state">State</NavLink>
            <NavLink to="/state1">State 1</NavLink>
            <NavLink to="/state_props">Flow of State and Props</NavLink>
            <NavLink to="/superconstructor">Super() vs Super(props)</NavLink>
            <NavLink to="/componentlifecycle">Component Life Cycle</NavLink>
            <NavLink to="/usestate">Hooks - useState</NavLink>
            <NavLink to="/multiusestate">Hooks - Multiple useState</NavLink>
            <NavLink to="/loginform">Login form useState</NavLink>
            <NavLink to="/useEffectHook">Hooks - useEffect</NavLink>
            <NavLink to="/useEffectHookAPI">Hooks - useEffect with API</NavLink>
          </div> */}
          {/* <div className="main"> */}

          <Sidebar/>
          <div className="main">
            <Routes>
              <Route path="/" element={<Default />} />
              <Route
                path="/fn/fn1"
                element={<Employee name="KP" salary="123456789" />}
              />
              <Route
                path="/fn/fn2"
                element={<Employee1 name="KP" salary="123456789" />}
              />
              <Route
                path="/Class-Component"
                element={<EmployeeComponent name="KP" />}
              />
              <Route
                path="/Props/props"
                element={<DemoComponent user="React" />}
              ></Route>
              <Route
                path="/Props/props-in-multilevelclass"
                element={<Parent Name="12" Location="34" />}
              />
              <Route path="/State/state" element={<Stateexample />}></Route>
              <Route
                path="/State/state&counter"
                element={<Component />}
              ></Route>
              <Route
                path="/State/Flow of State and Props"
                element={
                  <Employeedetails
                    Id="101"
                    Name="KP"
                    Location="Pune"
                    Salary="50000"
                    BasicSalary="25000"
                    HRA="10000"
                    SpecialAllowance="15000"
                    SalaryBreak="0.1"
                  ></Employeedetails>
                }
              ></Route>
              <Route
                path="/Component-LifeCycle/Constructor"
                element={<Superconstrutor name="KP" />}
              />
              <Route
                path="/Component-LifeCycle/Life-Cycle-Phases"
                element={<Componentlifecycle color="Red" />}
              />
              <Route
                path="/Hooks-useState/useState"
                element={<UseStateHook />}
              />
              <Route
                path="/Hooks-useState/multiuseEffect"
                element={<Carinfo />}
              />
              <Route
                path="/Hooks-useState/Login-form-useState"
                element={<LoginUsingUseStateHook />}
              />
              <Route
                path="/Hooks-useEffect/useEffect"
                element={<UseEffectHook />}
              />
              <Route
                path="/Hooks-useEffect/useEffectInAPI"
                element={<UseEffectHookforEmployees />}
              />
              <Route
                path="/Hooks-usecontext/usecontext"
                element={<UsecontextHook />}
              />
              <Route
                path="/Hooks-useContext/updtae-state-with-useContext"
                element={<UpdateStateUsecontextHook />}
              />
              <Route
                path="/Hooks-useRef/useRef"
                element={<UserefHook />}
              />
              <Route
                path="/Hooks-useReducer/useReducer"
                element={<UsereducerHook />}
              />
              <Route
                path="/customhooks/customhooks"
                element={<CustomHooksWithAPI />}
              />
              <Route
                path="/customhooks/NPM-custom-hook"
                element={<NPMCustomHook />}
              />
            </Routes>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
