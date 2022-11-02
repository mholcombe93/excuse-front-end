import React, { useEffect, useState } from "react";

function Excuse() {
  const [excuse, setExcuse] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [endPoint, setEndPoint] = useState("party")

  const fetchExcuse = async () => {
    try {
      const url = "https://api-project-production-f71e.up.railway.app";
      const response = await fetch(`${url}/${endPoint}`)
      const excuse = await response.json();
      console.log(excuse)
      setExcuse(excuse);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchExcuse()
  }, [toggle]) // makes componeents render AFTER api is called, toggle used to be able to click button more than once.

  const handleClick = (e) => {
    e.preventDefault()
    console.log(e.target.name)
    setEndPoint(e.target.name)
    setToggle(prev => !prev)
  }

  return (
    <div>
      <div className="Excuse_Text">
        <p>{excuse.excuse}</p>
      </div>
      <div className ='Button_Container'>
      <button className="Button" onClick={handleClick} name="family">Family Functions</button>
      <button className="Button" onClick={handleClick} name="office">Office Work</button>
      <button className="Button" onClick={handleClick} name="party">Party</button>
      <button className="Button" onClick={handleClick} name="children">Children</button>
      <button className="Button" onClick={handleClick} name="college">Party</button>
      <button className="Button" onClick={handleClick} name="funny">Funny</button>
      <button className="Button" onClick={handleClick} name="unbelievable">Unbelievable</button>
      <button className="Button" onClick={handleClick} name="developers">Developers</button>
      <button className="Button" onClick={handleClick} name="gaming">Gamers</button>
        </div>
    </div>
  )
  
}
export default Excuse

