// App.js
import React, { useRef } from "react";
import Chromedownload from "./component/chdownload/Chromedownload";
import Header from "./component/header/header";
import Slider from "./component/slider/slider";
import Fast from "./component/Fast/fast";
import PerformanceContainer from "./component/performanceContainer/performanceContainer";

function App() {
  const fastRef = useRef(null);

  const scrollToFast = () => {
    if (fastRef.current) {
      fastRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header />
      <Chromedownload onFastTabClick={scrollToFast} />
      <Slider />
      <div ref={fastRef}>
        <Fast />
        <PerformanceContainer></PerformanceContainer>
      </div>
      <div style={{ height: "100vh" }}></div>
    </div>
  );
}

export default App;
