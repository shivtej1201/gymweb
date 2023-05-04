import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
	return (
		<footer>
			<div className="container footer__container">
				<article>
					<Link to="/" className="logo">
						<img src={Logo} alt="Footer Logo" />
					</Link>
					<p>
						SHIV's Gym Fitness Institute was started on World Health Day on 12 th January 2002. 
						It's been more than a decade of educating people in fitness. Every year 1000+ students pass out of the institute.
						SHIV's Gym Fitness Institute offers the most exciting and up-to-date curriculum as well as ongoing training in all aspects
						of the fitness industry.
					</p>
					<div className="footer__socials">
						<a
							href=""
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaLinkedin />
						</a>
						<a
							href=""
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaFacebookF />
						</a>
						<a
							href=""
							target="_blank"
							rel="noreferrer noopener"
						>
							<AiOutlineTwitter />
						</a>
						<a
							href=""
							target="_blank"
							rel="noreferrer noopener"
						>
							<AiFillInstagram />
						</a>
					</div>
				</article>
				<article>
					<h4>Permalinks</h4>
					<Link to="/about">About</Link>
					<Link to="/plans">Plans</Link>
					<Link to="/trainers">Trainers</Link>
					<Link to="/gallery">Gallery</Link>
					<Link to="/contact">Contact</Link>
				</article>
				<article>
					<h4>Insights</h4>
					<Link to="/s">Blog</Link>
					<Link to="/s">Events</Link>
					<Link to="/s">Communities</Link>
					<Link to="/s">FAQs</Link>
				</article>
				<article>
					<h4>Get In Touch</h4>
					<Link to="/plans">Plans</Link>
					<Link to="/trainers">Trainers</Link>
				</article>
			</div>
			<div className="footer__copyright">
				<small> &copy; 2023 SHIV's Gym.in. All Rights Reserved. </small>
			</div>
		</footer>
	);
};

export default Footer;
