import React, { Component } from 'react';
import './App.css';
import './assets/css/bootstrap.min.css';
//import Header from './components/layout/header';
import Sidebar from './components/layout/Sidebar';
//import Footer from './components/layout/header';
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div>
      <div class="admin-panel clearfix">
        {/*<Header />*/}
        <Sidebar />
        <div class="main">
          <div class="mainContent clearfix">
            <Main />
          </div>
        </div>
        {/*<Footer />*/}
      </div>
      </div>
    );
  }
}

export default App;
