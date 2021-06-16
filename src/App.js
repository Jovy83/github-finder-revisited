import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import NotFound from './components/pages/NotFound';

const App = () => {
  // this will load github users upon page load
  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   // Promise syntax
  //   // axios.get('https://api.github.com/users').then(res => console.log(res.data))

  //   // Async/await syntax (better)
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   this.setState({ users: res.data, loading: false });
  // }

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />

              <Switch>
                <Route exact path='/' component={Home} />

                <Route exact path='/about' component={About} />

                <Route exact path='/user/:login' component={User} />

                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
