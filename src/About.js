import { Component, useState } from "react";
import UserContext from "./utils/UserContext";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";
const About=(props)=> {
  const [count,setCount]=useState(0)
    // constructor(props){
    //     super(props)
    //     this.state={
    //       count:0
    //     }
      
    //     console.log('about constructor')
    // }
    // componentDidMount() {
    //   console.log('about componentDidMount')

    //     // clearInterval(this.setIntervalID);
    //   }
    // componentDidUpdate(){
    //   console.log('about componentDidUpdate')

    // }
    // componentWillUnmount(){
    //   console.log('about componentWillUnmount')

    // }
    const dispatch=useDispatch()
    function countItem(){
      setCount(count+1)
      dispatch(addItem(setCount(count+1)))
    }
  // render() {
    const {name,location}=props
    console.log('about render')

    return (
      <div className="m-4 p-4 bg-gray-100 rounded-lg w-[200px] hover:bg-gray-200">
        <h1>Count : {count}</h1>
        <div>
        Logged In User:
        <UserContext.Consumer>{({loggedIn})=>
         <h1 >{loggedIn}</h1>
        }</UserContext.Consumer>
        </div>
        <h1>Name:{name}</h1>
        <h2>Address:{location}</h2>
        <h3>Contect:asfi@gmail.com</h3>
        <hr/>
        <button className="p-2 m-2 text-white rounded-lg bg-gray-400"
        type="button"
        onClick={countItem.bind(this)}
      >
        Stop count
      </button>
      </div>
    );
  // }
}

export default About;
