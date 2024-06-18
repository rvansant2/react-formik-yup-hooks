import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';

import { Navigation } from './components/Navigation';
import Footer from './components/Footer/Footer';

import Signup from './pages/Signup';

const App = () => {
  return (
    <div>
      <AppBar color="primary" position="static">
        <Toolbar>
          <TypoGraphy variant="title" color="inherit">
            My header
          </TypoGraphy>
          <Navigation />
        </Toolbar>
      </AppBar>
      <Signup />
      <Footer />
      </div>
  )
}

export default App;
