import React from "react";
import "./about.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

const About = () => {
	return (
		<>
			<Header title="About us" image={HeaderImage}>
				SHIV's  <br />Gym Fitness Institute was started on World Health Day on 7 th April 2006.
			</Header>
			<section className="about__story">
				<div className="container about__story-container">
					<div className="about__section-image">
						<img src={StoryImage} alt="OurStoryImage" />
					</div>
					<div className="about__section-content">
						<h1>Our Story</h1>
						<p>
							It's been more than a decade of educating people in fitness.
							Every year 1000+ students pass out of the institute.
							SHIV's Gym Fitness Institute offers the most exciting and up-to-date curriculum as
							well as ongoing training in all aspects of the fitness industry.
						</p>
						<p>
							SHIV's Gym Fitness Institute is the only Advanced Personal Trainer program,
							which offers you low-cost tuition, fast test results and complete career development.
							Becoming a SHIV's Gym Fitness Institute certified Advanced Personal trainer is your foundation for success.
						</p>
						<p>
							It offers you complete approach to fitness, wellness and business skills.
							Make an investment in yourself and become a SHIV's Gym Fitness Institute certified personal trainer.
						</p>
					</div>
				</div>
			</section>

			<section className="about__vision">
				<div className="container about__vision-container">
					<div className="about__section-content">
						<h1>Our Vision</h1>
						<p>
							“To enhance the quality of life in the communities, we serve through our fitness philosophy,
							facilities, programs, and products and to instill in the lives of people everywhere the value of health and fitness.”
						</p>
						<p>
							Gyms and Personal trainers may use mission statements to connect with people of their
							community and build a positive reputation among clients and business partners.
						</p>
					</div>
					<div className="about__section-image">
						<img src={VisionImage} alt="VisionImage" />
					</div>
				</div>
			</section>

			<section className="about__mission">
				<div className="container about__mission-container">
					<div className="about__section-image">
						<img src={MissionImage} alt="VisionImage" />
					</div>
					<div className="about__section-content">
						<h1>Our Mission</h1>
						<p>
							At this point, you know why you need a mission statement and what not to make your mission
							statement sound like.Let's arm you with a few guidelines on what a powerful fitness company
							mission statement should be like and some tools that can help you come up with one.
						</p>
						<p>
							Remember, it's actually a bad thing for a mission statement to sound too “corporate” so you won't
							miss out on anything if you don't hire someone to stuff it with the latest industry buzz words and empty platitudes.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
