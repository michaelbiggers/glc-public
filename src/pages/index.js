import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import TeamBar from "../components/team-bar";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
	return (
		<main className="main">
			<Layout>
				<Hero />
				<TeamBar />
				<section class="container-fluid testimonial p0">
					<div className="row center-xs middle-xs bg--pattern">
						<div className="col-xs-12 col-sm-6 p0">
							<StaticImage
								src="../images/bg.jpg"
								transformOptions={{ fit: "cover", cropFocus: "attention" }}
								layout= "fullWidth"
								height= {600}
								duotone={{
									highlight: "#004400", // Specify the highlight color
									shadow: "#440044", // Specify the shadow color
								}}
							/>
						</div>
						<div className="col-xs-12 col-sm-6">
							<div className="testimonial__content">
								<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
								<h4>Laura, child tested for autism</h4>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</main>
	)
}

export const Head = () => <title>Home Page</title>

export default IndexPage