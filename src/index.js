import React from "react";
import ReactDOM from "react-dom";
import Routers from "./Routers"
import "./style.css"
import 'mapbox-gl/dist/mapbox-gl.css';
import {disableReactDevTools} from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === 'production') disableReactDevTools()
ReactDOM.render(<Routers />, document.getElementById("root"));
