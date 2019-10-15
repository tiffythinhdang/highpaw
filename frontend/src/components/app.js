import React from 'react';

import '../stylesheets/index.scss';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch , Route} from 'react-router-dom';

import AboutPage from "./about/about_page";

import SignUpContainer from "./auth/signup_container";
import SignInContainer from "./auth/signin_container";
import UserShowContainer from "./users/user_show_container";
import EditUserContainer from "./users/edit_user_container";

import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import Footer from './footer/footer';

import CreateDogContainer from './dogs/create_dog_container';
import EditDogContainer from './dogs/edit_dog_container';
import DogShowContainer from './dogs/dog_show_container';


import WalksIndexContainer from '../components/walks/walks_index_container';
import WalksFormContainer from '../components/walks/walks_form_container';
import WalksShowContainer from '../components/walks/walks_show_container';
import ChatContainer from '../components/chat/chat_container';

import RequestShowContainer from '../components/request/request_show_container';
import RequestIndexContainer from '../components/request/request_index_container';


const App = () => (
  <div className="app">
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={SignInContainer} />
      <AuthRoute exact path="/signup" component={SignUpContainer} />

      <Route exact path="/about" component={AboutPage}/>

      <ProtectedRoute path="/users/:id/edit" component={EditUserContainer}/>
      <ProtectedRoute path="/users/:id" component={UserShowContainer}/>

      <ProtectedRoute exact path="/walks/create" component={WalksFormContainer} />
      <ProtectedRoute exact path="/walks/:id" component={WalksShowContainer} />
      <ProtectedRoute exact path="/walks" component={WalksIndexContainer} />

      <ProtectedRoute exact path="/requests" component={RequestIndexContainer} />
      <ProtectedRoute exact path="/requests/:requestId" component={RequestShowContainer} />
      <ProtectedRoute exact path="/requests/:requestId/chat" component={ChatContainer} />

      <ProtectedRoute path="/dogs/:id/edit" component={EditDogContainer} />
      <ProtectedRoute path="/dogs/:id" component={DogShowContainer} />
      <ProtectedRoute path="/dogs" component={CreateDogContainer} />
    </Switch>
    <Footer />
  </div>
);

export default App;