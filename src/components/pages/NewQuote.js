import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import QuoteForm from "../quotes/QuoteForm";
import useHttp from "../../hooks/use-http";
import { addQuote } from "../../lib/api";

const NewQuote = () => {
	const navigate = useNavigate();
	const { sendRequest, status } = useHttp(addQuote);

	useEffect(() => {
		if (status === "completed") {
			//history.push("/quotes");
			navigate("/quotes");
		}
	}, [status, navigate]);

	const addQuoteHandler = (quoteData) => {
		console.log(quoteData);
		sendRequest(quoteData);
	};
	return <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
