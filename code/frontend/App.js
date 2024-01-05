import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoPage from './pages/TodoPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TodoPage} />
        {/* Add more routes here if necessary */}
      </Switch>
    </Router>
  );
};

export default App;