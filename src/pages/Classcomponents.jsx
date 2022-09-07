import React from "react";
import BaseHoc from "../Hoc/BaseHoc";

class Classcomponent extends React.Component {
  render() {
    return <p>This is class component</p>;
  }
}
export default BaseHoc(Classcomponent);
