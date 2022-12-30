import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function Error() {
  const error = useRouteError();
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occurred!</h1>
        <p>{error.message}</p>
      </main>
    </>
  );
}

export default Error;
