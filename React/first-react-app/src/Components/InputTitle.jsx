import React, { useState } from "react";

const InputTitle = () => {
  const [value, setValue] = useState("Текст в инпуте");
  return (
    <div className="inp_title_block">
      <h1 className="input__title">{value}</h1>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};

export default InputTitle;
