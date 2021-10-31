import logo from './logo.svg';
import './App.css';
import { ButtonGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Choise from './Components/Choise/Choise';
import About from './Components/About/About';
import Discover from './Components/Discover/Discover';
import Notfound from './Components/Notfound/Notfound';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';
import Large from './Components/Large/Large';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Authprovider from './Context/Authprovider';
import Myorders from './Components/Myorders/Myorders';
import Manageall from './Components/ManageallOrder/Manageall';
import AddServices from './Components/AddServices/AddServices';
import MyorderHistory from './Components/MyorderHistory/MyorderHistory';
function App() {
  return (
    <div className="App bgm">
      <Header></Header>

      <Authprovider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Large></Large>
            </Route>
            <Route path="/home">
              <Large></Large>
              <Services></Services>
              <Discover></Discover>
              <About></About>
            </Route>

            <Route path="/myorders/:serviceId">
             <Myorders></Myorders>
            </Route>

            <Route path="/myhistory">
              <MyorderHistory></MyorderHistory>
            </Route>

            <Route path="/manage-all-orders">
            <Manageall></Manageall>
            </Route>

            <Route path="/addservice">
              <AddServices></AddServices>
            </Route>
           
            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/discover">
              <Discover></Discover>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </Router>
      </Authprovider>

      <Footer></Footer>
    </div>
  );
}
export default App;
