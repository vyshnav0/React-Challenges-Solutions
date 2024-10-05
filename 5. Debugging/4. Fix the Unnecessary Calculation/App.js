import "./styles.css";

import { useState, useMemo } from "react";

/* Credits : dmitripavlutin

Instructions:
Every time you change the input value, the factorial is calculated
factorialOf(n) and 'factorialOf(n) called!' is logged to console.
On the other side, each time you click Re-render button, inc state value
is updated.
Updating inc state value triggers <CalculateFactorial /> re-rendering.
But, as a secondary effect, during re-rendering the factorial is
recalculated again — 'factorialOf(n) called!' is logged to console
See if there is any optimized way to fix it.

*/

/* The issue we have is that when we click button the factorial function is
called again. (check the console)
The inc state is just a counter that doesnt have any functionality excpet
to re-render the code each time it's changed.
So either we can remove the inc state thus preventing re-rendering or
make it so that each time button is clicked, the code will re-render only
if the value of number has changed
This can be done simply by using a useEffect(AltSol.js) or useMemo hook
*/

export default function CalculateFactorial() {
  const [number, setNumber] = useState(0);
  const [inc, setInc] = useState(0);

  /*useMemo is a React hook that allows you to optimize performance by
memoizing expensive calculations. It will recompute the memoized value
 only when one of the dependencies has changed.*/
  const factorial = useMemo(() => {
    const res = factorialOf(number);
    // some exprensive calc is done
    console.log(`Factorial of ${number} is calculated as ${res}`);
    return res;
    // return the res which is stored in const factorial
  }, [number]);

  const onChange = (event) => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setInc((i) => i + 1);

  return (
    <div>
      Factorial of
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
    </div>
  );
}

function factorialOf(n) {
  console.log("factorialOf(", n, ") called!");
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}
