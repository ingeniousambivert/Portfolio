import React from "react";
import Meta from "../containers/meta";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import About from "../containers/about";
import Skills from "../containers/skills";
import Work from "../containers/work";
import Contact from "../containers/contact";

import { randomQuote } from "../utils";

export default function Main({ githubData, quote }) {
	return (
		<div>
			<Meta />
			<div className="flex justify-center flex-col min-h-screen font-modern">
				<main className="flex-grow">
					<div className="mx-auto my-4 md:my-10 px-4 md:px-12">
						<Header />
						<About />
						<Skills />
						<Work githubData={githubData} />
						<Contact />
						<Footer quote={quote} />
					</div>
				</main>
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	// const response = await fetch(
	// 	`https://api.github.com/users/ingeniousambivert/repos?per_page=300&sort=created:desc&client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET}`,
	// 	{
	// 		method: "GET",
	// 		headers: {
	// 			Accept: "application/vnd.github.mercy-preview+json",
	// 		},
	// 	}
	// );
	const githubData = []; //await response.json();
	const quote = randomQuote();

	return {
		props: {
			githubData,
			quote,
		},
	};
}
