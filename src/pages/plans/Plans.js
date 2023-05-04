import React from "react";
import "./plans.css";
import { plans } from "../../data";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";
import { NavLink } from "react-router-dom";



const Plans = () => {
	return (
		<>
			<Header title="Membership Plans" image={HeaderImage}>
			“We are what we repeatedly do. Excellence then is not an act but a habit.”
			</Header>
			<section className="plans">
				<div className="container plans__container">
					{plans.map(({ id, name, desc, price, features }) => {
						return (
							<Card key={id} className="plan">
								<h3>{name}</h3>
								<small>{desc}</small>
								<h1>{`₹ ${price}`}</h1>
								<h2>/mo</h2>
								<h4>Features</h4>
								{features.map(({ feature, available, index }) => {
									return (
										<p key={index} className={available ? "" : "disabled"}>
											{feature}
										</p>
									);
								})}


							
								<NavLink to="/registation"><button className="btn lg">Choose Plan</button></NavLink>
						
							</Card>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Plans;