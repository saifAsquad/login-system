import React from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Forget from "./components/Forget";

import {
	BrowserRouter,
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginForm />} />
					<Route path="/signup" element={<SignupForm />} />
					<Route path="/forget" element={<Forget />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
