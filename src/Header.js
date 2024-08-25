import React from "react";
import Food from './food.jpeg'
import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";
const Header=()=>{
const [buttonVal,setButtonVal]=useState('Sign-in');
 const signOut=()=>{
  setButtonVal( buttonVal=='Sign-in'?'Sign-out':'Sign-in')

}
const {loggedIn}=useContext(UserContext)
const cartItem=useSelector((store)=>store.cart.item)
const navigate=useNavigate()
    return (
        <div className="flex justify-between border border-solid  shadow-lg p-4 bg-gray-400 rounded-2xl">
        <img src={Food} className="w-[100px]" />
          <ul className="flex justify-normal space-x-4 mt-10 text-white cursor-pointer">
          <li onClick={()=>{navigate('/')}}>Home</li>
          <li onClick={()=>{navigate('/about')}}>About</li>
          <li>Offers</li>
          <li>Help</li>
          <li className="font-bold text-xl text-black">Cart ({cartItem.length} item)</li>
          <button onClick={signOut} className="pb-8">{buttonVal}</button>
          <li>{loggedIn}</li>
          </ul>
        </div>
    )
}

export default Header