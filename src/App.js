import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/HomePage/HomePage';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className='background'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <HomePage/>
          </Route>
          <Route exact path='/home'>
            <HomePage/>
          </Route>
          <Route path='/contacts'>
            <ContactUs/>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
