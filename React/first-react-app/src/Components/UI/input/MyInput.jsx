import React from "react";
import classes from "./MyInput.module.css";

const MyInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref} {...props} className={classes.myinput} />
    </div>
  );
});

export default MyInput;
