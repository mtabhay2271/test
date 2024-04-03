import React from "react";

function TextError(props) {
  return (
    <div className="text-error mt-2 text-danger text-left">
      {props.children}
    </div>
  );
}

export default TextError;
