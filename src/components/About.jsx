import React, { useState } from "react";
import Modal from "./Modal";

const About = () => {
    const [change, setchange] = useState("mohamed")
    const [showmodal, setshowmodal] = useState(false)
  return (
    <div>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita ullam
        assumenda inventore praesentium dignissimos sed dolores, pariatur aut
        voluptatum. Minus ipsa est optio rem dolores temporibus, neque unde
        earum vel?
      </p>
      <button onClick={()=>setchange("ahmed")} >{change}</button>
      <button onClick={()=>setshowmodal(true)} >Show modal</button>
      {showmodal?<Modal setshowmodal={setshowmodal} />:null}
     
    </div>
  );
};

export default About;
