import "./styles.css";

import { useReducer } from "react";

export default function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "printName":
        return { printName: action.payload };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, { printName: "" });
  return (
    <div className="App">
      <input
        type="text"
        placeholder="ENTER TEXT"
        value={state.printName}
        onChange={(e) =>
          dispatch({ type: "printName", payload: e.target.value })
        }
      />
      {state.printName}
    </div>
  );
}
