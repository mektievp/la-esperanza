import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyClass from './js/components/MyClass';
import MyComp from './js/components/MyComp';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {

  render() {
    return(
      <div>
        <MyClass isMarried={true} />
        <MyComp name={'Dennis'} isMarried={true} kids={2} livedIn={['CA', 'AZ']} />
      </div>
    );
  }

}

export default App;
