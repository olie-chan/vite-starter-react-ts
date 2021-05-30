import * as React from "react";

const Button = (): JSX.Element => {
  const [count, setCount] = React.useState(0);

  return (
    <button
      className="rounded bg-red-400 p-1"
      onClick={() => setCount(count + 1)}
    >
      Count: {count}
    </button>
  );
};

export default Button;
