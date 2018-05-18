import React from 'react';
import { Link } from 'react-router';

// const HomePage = () => {
//   return (
//     <div>
//       <h1>React Slingshot</h1>
//
//       <h2>Get Started</h2>
//       <ol>
//         <li>Review the <Link to="/fuel-savings">demo app</Link></li>
//         <li>Remove the demo and start coding: npm run remove-demo</li>
//       </ol>
//     </div>
//   );
// };


class HomePage extends React.Component{
  render(){
    return (
      <div>
        <div>Home PAge</div>
        <h1>Pluralsight Admistration</h1>
        <p>React,Redux </p>
        <Link to="about" class="btn btn-primary btn-lg">Learn more</Link>
      </div>

  );
  }
}

export default HomePage;
