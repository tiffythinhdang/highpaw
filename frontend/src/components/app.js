import React from 'react';

import '../stylesheets/index.scss';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch , Route} from 'react-router-dom';
import NavBar from './nav/navbar';
import SignUpContainer from "./auth/signup_container";
import SignInContainer from "./auth/signin_container"
import MainPage from './main/main_page';
import Footer from './footer/footer';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={SignInContainer} />
      <AuthRoute exact path="/signup" component={SignUpContainer} />

    </Switch>
    <Footer />
  </div>
);

export default App;