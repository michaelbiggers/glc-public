import * as React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';

const ServicesPage = () => {
	return (
		<main>
			<Layout>
				<Hero
					heading="What We Offer"
				/>
			</Layout>
		</main>
	)
}
export const Head = () => <title>What We Offer</title>
export default ServicesPage