import { LIST_MENU } from './constent';
import { useState,useEffect } from "react";

const useGetListMenu=(id)=>{
    const [list,setList]=useState(null)
    useEffect(()=>{
        getDataForMenu()       
 
     })
  
     const getDataForMenu=async ()=>{
        const response=await fetch(LIST_MENU +id);
        const data=await response.json();
        
        setList(data?.data?.cards[2]?.card?.card?.info)
     }
    return list
}

export default useGetListMenu;