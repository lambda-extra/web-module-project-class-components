import React from 'react';
import Header from './components/Header';
import './styles.scss';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;