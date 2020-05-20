import React from "react";
import ReactDOM from "react-dom";
import NYCMap from "./NYCMap";
import axios from "axios";
import customData from "../nyc.json"
import "./styles.css";

function App() {
    const [mapData, setMapData] = React.useState(null);
    React.useEffect(() => {
        setMapData(customData)
    }, []);

    return mapData ? <NYCMap mapData={mapData.features} /> : null;
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);