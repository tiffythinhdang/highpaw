import React from 'react';

import '../stylesheets/index.scss';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch , Route} from 'react-router-dom';
import NavBar from './nav/navbar';
import SignUpContainer from "./auth/signup_container";
import SignInContainer from "./auth/signin_container"
import MainPage from './main/main_page';
import Footer from './footer/footer';
import CreateDogContainer from './dogs/create_dog_container';
import DogShowContainer from './dogs/dog_show_container';

import WalksIndexContainer from '../components/walks/walks_index_container';
import WalksFormContainer from '../components/walks/walks_form_container';
import WalksShowContainer from '../components/walks/walks_show_container';

// test
import { setAuthToken, login } from '../util/session_api_util';
import { getWalks, createWalk } from '../util/walk_api_util';


const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={SignInContainer} />
      <AuthRoute exact path="/signup" component={SignUpContainer} />
      <Route exact path="/walks/:id" component={WalksShowContainer} />
      <Route exact path="/walks" component={WalksIndexContainer} />
      <Route exact path="/walks/create" component={WalksFormContainer} />
      <Route path="/dogs/:id" component={DogShowContainer} />
      <Route path="/dogs" component={CreateDogContainer} />
    </Switch>
    <Footer />
  </div>
);

export default App;