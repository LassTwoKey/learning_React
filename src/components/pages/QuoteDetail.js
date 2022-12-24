import React, { useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteDetail = () => {
	const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);
	const match = useRouteMatch();
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
		<Route path={`${match.path}`} exact>
			<div className="centered">
				<Link className="btn--flat" to={`${match.url}/comments`}>Load comments</Link>
			</div>
		</Route>
		<Route path={`${match.path}/comments`}>
			<Comments />
		</Route>
	</div>;
};

export default QuoteDetail;
