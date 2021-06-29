import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef]);

  return (
    <div className="app">
      <div className="isVisible">
        {isVisible ? "IN VIEWPORT" : "NOT IN VIEWPORT"}
      </div>
      <div className="section"></div>
      <div className="box" ref={containerRef}>
        Observe me
      </div>
    </div>
  );
};

export default App;
