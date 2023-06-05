import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';
import DetailsPage from './pages/DetailsPage'

function App() {

  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        {authCtx.isLoggedIn && <Route path='/' exact>
          <HomePage />
        </Route>}
        {!authCtx.isLoggedIn && <Route path='/auth'>
          <AuthPage />
        </Route>}
        <Route path='/profile'>
          {authCtx.isLoggedIn && <UserProfile />}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route>
        {authCtx.isLoggedIn && <Route path="/:id">
          <DetailsPage />
        </Route>}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
