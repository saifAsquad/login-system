import React, { useState, useRef } from "react";
import webAuth from "../utils/webauthConfig";

const dbConnection = "test-db";

const Forget = () => {
	const [success, setSuccess] = useState(false);

	// Dom email Element refernce
	const emailEl = useRef();

	// Submission Handler
	const formHandler = () => {
		const email = emailEl.current.value;

		webAuth.changePassword(
			{
				connection: dbConnection,
				email: email,
				redirectUri: "http://localhost:3000",
			},
			(er, res) => {
				if (er) {
					return setSuccess(false);
				}
				setSuccess(true);
				console.log("success");
			}
		);
	};
	return (
		<div>
			<div className="  bg-slate-600 mx-auto px-5">
				<input
					ref={emailEl}
					id="forgetEmail"
					className="py-3 px-4  bg-blue-200"
					type="email"
					placeholder="Email@example.com"
				/>
				<button
					className="w-24 py-3 ml-2 bg-blue-400 border  text-white"
					onClick={() => formHandler()}
					id="forget-btn"
				>
					Reset
				</button>
			</div>
			<div className={success ? "block" : "hidden"}>
				<h1>Please check your email</h1>
			</div>
		</div>
	);
};

export default Forget;
