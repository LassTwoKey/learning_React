import React, { useEffect } from "react";

import QouteList from "../quotes/QuoteList";
import LoadingSpinner from "../UI/LoadingSpinner";
import useHttp from "../../hooks/use-http";
import { getAllQuotes } from "../../lib/api";
import NoQuotesFound from "../quotes/NoQuotesFound";

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
