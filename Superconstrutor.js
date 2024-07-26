import React from "react";

class Superconstrutor extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props)
    } 
    render(){
        return(
        <div>
            <center><h1>Super() vs Super(props) constructor</h1></center>
        <p>props value is =
             {this.props.name}</p>

        </div>);
    }
}

export default Superconstrutor;

export class Componentlifecycle extends React.Component {
    constructor(props) {
      super(props);
      console.log("Constructor");
      // Initializing the state  
      this.state = {favoritecolor: this.props.color};
    }

    // =================Mounting Start========================
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        if(props.color == state.favoritecolor)
            return {favoritecolor: props.color };
        else
            return {favoritecolor: "yellow" };
    }

    componentDidMount() { 
  
        // Changing the state after 2 sec 
        // from the time when the component 
        // is rendered 
        console.log("componentDidMount");
        setTimeout(() => { 
          this.setState({ favoritecolor: 'white' }); 
        }, 2000); 
      } 
      // =================Mounting End========================
      
      
    render() {
        console.log("render");
        console.log(this.state.favoritecolor);
      return (
        <div>
            <center><h1>Component Life Cycle</h1></center>
            <h1 style={{ color: this.state.favoritecolor}} >My Favorite Color is {this.state.favoritecolor}</h1>
            <button type="button" onClick={this.changeColor}>Change color</button>
            <div id="div1"></div>
            <div id="div2"></div>
        </div>
      );
    }

    // =================Update Start========================
      //this changes the favorite color to Blue, but since the getDerivedStateFromProps() 
      //method is called, which updates the state with the color from the favcol attribute, 
      //the favorite color is still rendered as yellow:
      changeColor = () => {
        console.log("button click");
        this.setState({favoritecolor: "Red"});
      }
    
      shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;
      }

      getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
        "Before the update, the favorite was " + prevState.favoritecolor;
        //return prevState;
      }
      componentDidUpdate(prevProps, prevState, snapshot) {
        document.getElementById("div2").innerHTML =
        "The updated favorite is " + this.state.favoritecolor;
      }
      // =================Update End========================

      componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
      }
      
  }
  



