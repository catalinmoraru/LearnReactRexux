//
 // import { NavLink, Route, Switch } from "react-router-dom";
//
// import AboutPage from "./AboutPage";
// import FuelSavingsPage from "./containers/FuelSavingsPage";
// import HomePage from "./HomePage";
// import NotFoundPage from "./NotFoundPage";
import React,{PropTypes} from "react";
import Header from "./common/Header";
// import PropTypes from "prop-types";
// import { hot } from "react-hot-loader";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

// class App extends React.Component {
//   render() {
//     const activeStyle = { color: 'blue' };
//     return (
//       <div>
//         <div>
//           <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
//           {' | '}
//           <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
//           {' | '}
//           <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
//         </div>
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route path="/fuel-savings" component={FuelSavingsPage} />
//           <Route path="/about" component={AboutPage} />
//           <Route component={NotFoundPage} />
//         </Switch>
//       </div>
//     );
//   }
// }
//



class App extends React.Component{
  render(){
    return (
      //<div><p>Frackj react</p></div>
    <div className="container-fluid">
      <h1>App component</h1>
      <Header/>
      {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};


export default App;
