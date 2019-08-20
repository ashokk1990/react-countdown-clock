import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Countdown from "./components/Countdown";

const App = () => {
    const currentDate = new Date();
    return (
        <div className="App">
            <h1>Countdown Clock</h1>
            <Countdown date={`${currentDate.getFullYear()}-10-24T00:00:00`} />
            <h3 className="title">
                My Birthday is coming soon (Midnight of 23rd to 24th Oct,{" "}
                {currentDate.getFullYear()}):
            </h3>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
