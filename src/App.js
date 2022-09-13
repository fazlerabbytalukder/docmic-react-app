import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import ContactUs from './Components/ContactUs/ContactUs';
import Department from './Components/Department/Department';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/HomePage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import Pages from './Components/Pages/Pages';

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
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/blog'>
            <Blog/>
          </Route>
          <Route path='/pages'>
            <Pages/>
          </Route>
          <Route path='/department'>
            <Department/>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
