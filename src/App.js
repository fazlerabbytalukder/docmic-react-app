import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import OurFeatures from './Components/OurFeatures/OurFeatures';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className='background'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
        </Switch>
        <Services />
        <Experience />
        <OurFeatures />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
