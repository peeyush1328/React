import React from "react";

const BaseHoc =
  (Components) =>
  ({ ...props }) => {
    return (
      <div>
        <h1>This is nav bar</h1>
        <Components {...props} />
        <h1>This is footer</h1>
      </div>
    );
  };

export default BaseHoc;
