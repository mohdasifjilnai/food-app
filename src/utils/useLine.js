import { useState } from "react";

const useLine = () => {
  const [isOnliine,setIsOnline]=useState(true)
  window.addEventListener("online", () => {
    setIsOnline(true)
  });
  window.addEventListener("offline", () => {
    setIsOnline(false)
  });
  return isOnliine;
};

export default useLine;
