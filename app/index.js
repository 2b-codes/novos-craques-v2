import React from "react";
import ReactDom from "react-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "./store";
import module from "./module";
import AsyncComponent from "./AsyncComponent";

import "./stylesheets/app.styl";
import { Component as Application } from "./modules/application";

const register = module(store);
const home = () => register("home", import(/* webpackChunkName: "home" */ "./modules/home/index"));
// const login = () => register("login", import(/* webpackChunkName: "login" */ "./modules/login/index"));

ReactDom.render(
	<Provider store={store}>
		<Router>
			<Application>
				<Route path="/" exact component={() => <AsyncComponent moduleProvider={home} />} />
				{/* <Route path="/entrar" component={() => <AsyncComponent moduleProvider={login} />} /> */}
			</Application>
		</Router>
	</Provider>,
	document.getElementById("root")
);

