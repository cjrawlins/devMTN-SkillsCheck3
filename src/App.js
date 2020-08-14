import React from 'react';

// CSS 
import './reset.css';
import './App.css';

// Other Components
import routes from './routes';
import Nav from './components/Nav';

function App() {

  
  return (
    <div className="App">
      {/* {this.props.location.pathname === '/' ? console.log("/ True"):console.log("/ False")} */}
      <Nav/>
      {routes}
    </div>
  );
}

export default App;
