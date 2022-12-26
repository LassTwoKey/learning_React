import { Navigate, Route, Routes } from "react-router-dom";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import QuoteDetail from "./components/pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./components/pages/NotFound";
import Comments from "./components/comments/Comments";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Navigate to="/quotes" />} />
					<Route path="quotes" element={<AllQuotes />} />
					<Route path="quotes/:quoteId" element={<QuoteDetail />} />
					<Route path="quotes/:quoteId/comments" element={<Comments />} />

					<Route path="new-qoute" element={<NewQuote />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes >
		</>
	);
}

export default App;
