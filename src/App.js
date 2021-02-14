import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";

import Menu from './Menu/Menu';
import Footer from './Footer/Footer'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import FAQ from './Pages/FAQ/FAQ';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Dashboard from './Pages/User/DashboardHome/DashboardHome';

function IsUserLoggedIn() {
  const token = localStorage.getItem('token')
  if (!token) {
    return false;
  }
  try {
    // const jwtDecoded = jwtDecode(token)
    // console.log(jwtDecoded)
    return true;
  }
  catch (e) {
    return false;
  }
}

function App() {

  function GetRoutes() {
    var allRoutes = (
      <>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </>
    );
    if (IsUserLoggedIn()) {
        return (
          <>
            <Route exact path="/dashboard" component={Dashboard} />
            {allRoutes}
          </>
        )
    } else {
      return (
        <>
          {allRoutes}
          <Route exact path="/admin">
            <Redirect to="/home" />
          </Route>
        </>
      )
    };
  };

  return (
    <div className="pageContainer">
      <div className="content-wrap">
        <Menu />

        <Switch>
          {GetRoutes()}
        </Switch>
      </div>
      <Footer />
    </div>

  );
}

export default App;
