import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import MainBlog from './Pages/Blog/Blog/MainBlog';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute'
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AddBlog from './Pages/AddBlog/AddBlog';
import AddBestSeller from './Pages/AddBestSeller/AddBestSeller';
import AddTrending from './Pages/AddTrending/AddTrending';
import Shop from './Pages/Home/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
     
     <AuthProvider>
     <Router>
        <Switch>
       
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/blog">
            <MainBlog />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/shop">
            <Shop />
          </PrivateRoute>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
           <About></About>
          </Route>
          <PrivateRoute path="/dashboard">
           <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/addblog">
           <AddBlog></AddBlog>
          </PrivateRoute>
          <PrivateRoute path="/addbestseller">
         <AddBestSeller></AddBestSeller>
          </PrivateRoute>
          <PrivateRoute path="/addtrending">
         <AddTrending></AddTrending>
          </PrivateRoute>
        </Switch>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
