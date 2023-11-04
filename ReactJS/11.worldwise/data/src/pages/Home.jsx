import { Link } from "react-router-dom";
import PageNav from "../components/PageNav.jsx";
import AppNav from "../components/AppNav.jsx";

function Home() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>WorldWise</h1>

      <Link to={"/app"}>Go to the App</Link>
    </div>
  );
}

export default Home;
