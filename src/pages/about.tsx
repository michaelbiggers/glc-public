import * as React from 'react';
import Hero from '../components/hero';
import BioLink from '../components/bio-link';
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout';

const AboutPage = ({ data }) => {
	return (
		<main>
			<Layout>
				<Hero
					heading= 'About Greenville Learning Collective'
					backgroundURL='../images/organic.svg'
					backgroundColor='#fbf6f3'
				/>
				<section>
					<div className='row center-xs middle-xs'>
						<ul>
							{
								data.allFile.nodes.map(node => (
									<li key={node.name}>
										{node.name}
									</li>
								))
							}
						</ul>
						<div className='col-xs-12 col-sm-5'>
							<BioLink
								name='Sunny Biggers, MDADD'
								title='Licensed Psychologist'
								photo='../images/sunny.jpg'
							/>
						</div>
						<div className='col-xs-12 col-sm-5'>
							<BioLink
								name='Jacie Curry'
								title='Speech Therapist'
								photo='../images/jacie.jpg'
							/>
						</div>
					</div>
				</section>


			</Layout>
		</main>
	)
}
export const Head = () => <title>About Me</title>
export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }`
export default AboutPage