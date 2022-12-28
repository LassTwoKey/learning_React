import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function Error() {
	const error = useRouteError();
	return (
		<>
			<main>
				<h1>An error occurred!</h1>
			</main>
		</>
	);
}

export default Error;
