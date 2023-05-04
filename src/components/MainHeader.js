import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/main_header.png";

const MainHeader = () => {
	return (
		<header className="main__header">
			<div className="container main__header-container">
				<div className="main__header-left">
					<h4>#100DaysOfWorkout</h4>
					<h1>Join The Legends of the Fitness World</h1>
					<p>
						SHIV's Gym Fitness Institute is the only Advanced Personal Trainer program, 
						which offers you low-cost tuition, fast test results and complete career development. 
						Becoming a SHIV's Gym Fitness Institute certified Advanced Personal trainer is your foundation for success. 
						It offers you complete approach to fitness, wellness and business skills. Make an investment in yourself and 
						become a SHIV's Gym Fitness Institute certified personal trainer.
					</p>
					<Link to="/plans" className="btn lg">
						Get Started
					</Link>
				</div>
				<div className="main__header-right">
					<div className="main__header-circle"></div>
					<div className="main__header-image">
						<img src={Image} alt="MainHeaderImage" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default MainHeader;
