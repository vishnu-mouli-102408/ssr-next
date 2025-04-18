"use client";
import React from "react";

const ClientComponent = () => {
	const [response, setResponse] = React.useState(null);
	const fetchData = () => {
		console.log("Fetching data...");

		const data = fetch("https://jsonplaceholder.typicode.com/posts/1")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setResponse(data);
			})
			.catch((error) => console.error("Error fetching data:", error));

		return data;
	};

	React.useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<div>ClientComponent</div>
			<div>{JSON.stringify(response)}</div>
		</div>
	);
};

export default ClientComponent;
