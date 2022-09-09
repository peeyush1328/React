import React from "react";
import BaseHoc from "../Hoc/BaseHoc";

class Classcomponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "peeyush",
      age: 23,
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("component did mount");
  }
  render() {
    console.log("render");
    return (
      <div>
        <p>This is class component</p>
        <button
          onClick={() => {
            this.setState({
              ...this.state,
              name: this.state.name + " kumar",
            });
          }}
        >
          change name
        </button>
        <h1>{this.state.name}</h1>
        <h2>{this.state.age}</h2>
      </div>
    );
  }
}
export default BaseHoc(Classcomponent);
