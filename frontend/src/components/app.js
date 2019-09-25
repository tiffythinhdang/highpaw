import React from 'react';

import '../stylesheets/index.scss';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch , Route} from 'react-router-dom';
import NavBar from './nav/navbar';

import MainPage from './main/main_page';
import Footer from './footer/footer';

import WalksIndexContainer from '../components/walks/walks_index_container';
import WalksFormContainer from '../components/walks/walks_form_container';

// test
import { setAuthToken, login } from '../util/session_api_util';
import { getWalks, createWalk } from '../util/walk_api_util';


const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/walks" component={WalksIndexContainer} />
      <Route exact path="/walks/create" component={WalksFormContainer} />
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}

      {/* <ProtectedRoute exact path="/tweets" component={TweetsContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/new_tweet" component={TweetComposeContainer} /> */}
    </Switch>
    <Footer />
  </div>
);

export default App;