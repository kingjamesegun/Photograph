import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import ProfilePage from "./Pages/Profile";
import SavePage from "./Pages/Save";
import LoginPage from "./Pages/Login";
import Nav from "./components/Nav";
import ProgressProfile from "./Pages/ProgressProfile";
import ProgressProfile2 from "./Pages/ProgressProfile2";
import ProgressProfile3 from "./Pages/ProgressProfile3";
import ProgressProfile4 from "./Pages/ProgressProfile4";
import BookPage1 from "./Pages/BookPage1";

function App() {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route path='/' exact>
					<HomePage />
				</Route>

				<Route path='/profile'>
					<ProfilePage />
				</Route>

				<Route path='/save'>
					<SavePage />
				</Route>

				<Route path='/login'>
					<LoginPage />
				</Route>

				<Route path='/progress'>
					<ProgressProfile />
				</Route>

				<Route path='/desc'>
					<ProgressProfile2 />
				</Route>

				<Route path='/socials'>
					<ProgressProfile3 />
				</Route>

				<Route path='/confirm'>
					<ProgressProfile4 />
				</Route>

				<Route path='/book'>
					<BookPage1 />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
