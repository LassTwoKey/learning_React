import React, { useEffect } from "react";

import QouteList from "../quotes/QuoteList";
import LoadingSpinner from "../UI/LoadingSpinner";
import useHttp from "../../hooks/use-http";
import { getAllQuotes } from "../../lib/api";
import NoQuotesFound from "../quotes/NoQuotesFound";

// const ALL_QOUTES = [
// 	{
// 		id: 'q1',
// 		author: 'Somebody',
// 		text: 'Do the job walk boldly!'
// 	},
// 	{
// 		id: 'q2',
// 		author: 'Eleanor Roosevelt',
// 		text: 'Life is fragile and temporary. The faces of today quickly become the faces of the past.'
// 	},
// 	{
// 		id: 'q3',
// 		author: 'W.E.B. Du Bois',
// 		text: 'The most important thing to remember is this: to be ready at any moment to give up what you are for what you might become.'
// 	},
// 	{
// 		id: 'q4',
// 		author: 'Christopher Reeve',
// 		text: 'The most important thing to remember is this: to be ready at any moment to give up what you are for what you might become.'
// 	}
// ];

const AllQuotes = () => {
	const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);

	useEffect(() => {
		sendRequest();
	}, [sendRequest]);

	if (status === "pending") {
		return (
			<div className="centered">
				<LoadingSpinner />
			</div>
		);
	}
	if (error) {
		return (
			<div className="centered">
				{error}
			</div>
		);
	}
	if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
		return (
			<div className="centered">
				<NoQuotesFound></NoQuotesFound>
			</div>
		);
	}

	return <div>
		<QouteList quotes={loadedQuotes} />
	</div>;
};

export default AllQuotes;
