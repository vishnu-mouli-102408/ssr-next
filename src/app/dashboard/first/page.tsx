import React from "react";
import ClientComponent from "./client";

function wait(ms: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

const FirstPage = async () => {
	await wait(4000);
	return (
		<div>
			<div>FirstPage</div>
			<ClientComponent />
		</div>
	);
};

export default FirstPage;
