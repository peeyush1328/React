import React from "react";
import { useState, useEffect } from "react";
import BaseHoc from "../Hoc/BaseHoc";

function Functionalcomponent(prop) {
  const [number, setnumber] = useState(0);
  const [Name, setName] = useState("");
  const { name, setname } = prop;
  const subsfunction = () => {
    setnumber(number - 1);
  };
  useEffect(() => {
    console.log("component did mount?");
  }, []);
  useEffect(() => {
    console.log("props");
  }, [prop]);
  useEffect(() => {
    console.log("change name");
  }, [number]);
  return (
    <div>
      <p>This is function components.</p>
      <button onClick={() => setnumber(number + 1)}>add</button>
      <h1>{number}</h1>
      <button onClick={subsfunction}>sub</button>
      <h1>I am {name}</h1>
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setname(Name)}>change name</button>
    </div>
  );
}
export default BaseHoc(Functionalcomponent);
