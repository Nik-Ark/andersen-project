import { Switch, Route, Redirect } from 'react-router-dom';
import IsLoggedHead from './features/header/IsLoggedHead';
import NotLoggedHead from './features/header/NotLoggedHead';
import Signin from './features/authorization/Signin';
import Signup from './features/authorization/Signup';
import MainPage from './features/mainPage/MainPage';
import Favorites from './features/favorites/Favorites';
import History from './features/history/History';
import NotFound from './features/notFound/NotFound';
import ProtectedRoute from './auxiliary/routeWrappers/ProtectedRoute';
import AuthRoute from './auxiliary/routeWrappers/AuthRoute';
import { useSelector } from 'react-redux';

function App() {
	const { userIsLogged, userName } = useSelector(state => state.auth.user);

	return (
		<div className='container'>
			{userIsLogged ? <IsLoggedHead userName={userName} /> : <NotLoggedHead />}
			<Switch>
				<AuthRoute exact path='/signin' component={Signin} />
				<AuthRoute exact path='/signup' component={Signup} />
				<ProtectedRoute exact path='/' component={MainPage} />
				<ProtectedRoute exact path='/favorites' component={Favorites} />
				<ProtectedRoute exact path='/history' component={History} />
				<Route exact path='/404' component={NotFound} />
				<Redirect from='*' to='/404' />
			</Switch>
		</div>
	);
}

export default App;