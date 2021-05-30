import * as React from "react";
import Button from "@components/Button";

function App(): JSX.Element {
  return (
    <div>
      <div className="bg-blue-100 text-center">
        <h1 className="text-lg">Hello world</h1>
      </div>
      <Button />
    </div>
  );
}

export default App;
