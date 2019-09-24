import React from 'react';

import '../stylesheets/index.scss';

// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch , Route} from 'react-router-dom';
import NavBar from './nav/navbar';

import MainPage from './main/main_page';
import Footer from './footer/footer';
import CreateDogContainer from './dogs/create_dog_container';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/dogs" component={CreateDogContainer} />
      {/* <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}

      {/* <ProtectedRoute exact path="/tweets" component={TweetsContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/new_tweet" component={TweetComposeContainer} /> */}
    </Switch>
    <Footer />
  </div>
);

export default App;