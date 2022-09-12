import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className='background'>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
