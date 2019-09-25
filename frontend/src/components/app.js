import React from 'react';

import '../stylesheets/index.scss';

// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch , Route} from 'react-router-dom';
import NavBar from './nav/navbar';

import MainPage from './main/main_page';
import Footer from './footer/footer';
import CreateDogContainer from './dogs/create_dog_container';
import DogShowContainer from './dogs/dog_show_container';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/dogs/:id" component={DogShowContainer} />
      <Route path="/dogs" component={CreateDogContainer} />
    </Switch>
    <Footer />
  </div>
);

export default App;