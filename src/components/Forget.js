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
				console.log("success!");
			}
		);
	};
	return (
		<div className="flex justify-center items-center w-full py-12 px-4">
			<button
				id="menuBtn"
				className="rounded hidden px-6 py-2 leading-4 text-base text-white bg-blue-700 hover:bg-blue-600 focus:bg-blue-800"
			>
				Open
			</button>
			<div
				id="menu"
				className="relative py-6 px-4 md:p-14 w-full md:w-8/12 lg:w-7/12 xl:w-5/12 xl:w-4/12 bg-white rounded shadow flex flex-col justify-start items-start space-y-6"
			>
				<div className="flex justify-start items-start flex-col space-y-4">
					<p className="text-2xl md:text-3xl font-bold leading-7 text-gray-800">
						Welcome Back
					</p>
					<p className="text-sm leading-4 text-gray-500">
						Enter your Email to send Password reset email
						<a
							href="javascript:void(0)"
							className="hover:underline font-bold text-gray-800"
						></a>
					</p>
				</div>
				<div className={`text-center ${success ? "block" : "hidden"}`}>
					<h1 className="text-green-500 text-bold"> Please check your mail</h1>
				</div>

				<div className="w-full flex flex-col justify-start items-start space-y-4">
					<p className="text-base leading-4 text-gray-800">Email address</p>
					<div className="relative w-full flex justify-center items-center">
						<input
							ref={emailEl}
							className="pl-14 pr-6 w-full py-4 border rounded focus:outline border-gray-400 text-sm leading-4 text-gray-800 placeholder-gray-800"
							type="text"
							placeholder="Enter email here"
							name=""
						/>
						<svg
							className="absolute left-6"
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M3.33464 3.33398H16.668C17.5846 3.33398 18.3346 4.08398 18.3346 5.00065V15.0006C18.3346 15.9173 17.5846 16.6673 16.668 16.6673H3.33464C2.41797 16.6673 1.66797 15.9173 1.66797 15.0006V5.00065C1.66797 4.08398 2.41797 3.33398 3.33464 3.33398Z"
								stroke="#1F2937"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M18.3346 5L10.0013 10.8333L1.66797 5"
								stroke="#1F2937"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</div>
				<button
					onClick={() => formHandler()}
					className="py-4 w-full rounded bg-blue-700 hover:bg-blue-600 focus:bg-blue-800 text-base font-medium leading-none text-white"
				>
					Send Reset Email
				</button>
				<button className="absolute top-0 right-6">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g filter="url(#filter0_dd)">
							<path
								d="M18 6L6 18"
								stroke="black"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M6 6L18 18"
								stroke="black"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</g>
						<defs>
							<filter
								id="filter0_dd"
								x="-3"
								y="-2"
								width="30"
								height="30"
								filterUnits="userSpaceOnUse"
								colorInterpolationFilters="sRGB"
							>
								<feFlood floodOpacity="0" result="BackgroundImageFix" />
								<feColorMatrix
									in="SourceAlpha"
									type="matrix"
									values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
									result="hardAlpha"
								/>
								<feOffset dy="1" />
								<feGaussianBlur stdDeviation="1" />
								<feColorMatrix
									type="matrix"
									values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
								/>
								<feBlend
									mode="normal"
									in2="BackgroundImageFix"
									result="effect1_dropShadow"
								/>
								<feColorMatrix
									in="SourceAlpha"
									type="matrix"
									values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
									result="hardAlpha"
								/>
								<feOffset dy="1" />
								<feGaussianBlur stdDeviation="1.5" />
								<feColorMatrix
									type="matrix"
									values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
								/>
								<feBlend
									mode="normal"
									in2="effect1_dropShadow"
									result="effect2_dropShadow"
								/>
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="effect2_dropShadow"
									result="shape"
								/>
							</filter>
						</defs>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Forget;
