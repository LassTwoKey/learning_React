import React, { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

import HighlightedQuote from "../quotes/HighlightedQuote";
import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteDetail = () => {
	const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);
	const loaction = useLocation();
	const { quoteId } = useParams();
	//const quote = ALL_QOUTES.find(quote => quote.id === quoteId);

	useEffect(() => {
		sendRequest(quoteId);
	}, [sendRequest, quoteId]);

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
	if (!loadedQuote.text) {
		return <p>No quote found</p>;
	}

	return <div>
		<HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
		<div className="centered">
			<Link className="btn--flat" to={`${loaction.pathname}/comments`}>Load comments</Link>
		</div>
	</div>;
};

export default QuoteDetail;
