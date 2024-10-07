import React, { useEffect, useState } from "react";
import "./styles.css";

/* Currently count state variable increases uncontrollably, even if you
haven't typed anything into the input. That's an infinite loop.
See if you can fix it. */

export default function CountInputChanges() {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(-1);

  useEffect(() => setCount(count + 1), [value]);
  // only increment count if value changes

  const onChange = ({ target }) => setValue(target.value);

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <div>Number of changes: {count}</div>
    </div>
  );
}
