import React from "react";

function useStateCallback(data) {
  const [state, setState] = React.useState(data);

  const cbQueueRef = React.useRef([]);

  function setStateAndCallback(value, cb) {
    cbQueueRef.current = [...cbQueueRef.current, cb];

    setState(value);
  }

  React.useEffect(() => {
    if (cbQueueRef.current.length > 0) {
      cbQueueRef.current.forEach(fn => {
        if (typeof fn === "function") {
          fn(state);
          cbQueueRef.current.shift();
        }
      });
    }
  }, [state]);

  return [state, setStateAndCallback];
}

export { useStateCallback };
