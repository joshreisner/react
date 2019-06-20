import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { setFilter } from './redux/actions';

const App = ({ activeFilter, setFilter }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{activeFilter}</p>
        <button
          onClick={() => {
            setFilter('hello dere');
          }}
          style={{
            backgroundColor: 'white',
            border: 0,
            color: 'black',
            padding: 20,
            borderRadius: 20,
            cursor: 'pointer'
          }}
          hoverStyle={{
            color: 'red'
          }}
        >
          Learn React
        </button>
      </header>
    </div>
  );
};

const mapStateToProps = state => {
  return { activeFilter: state };
};

export default connect(
  mapStateToProps,
  { setFilter }
)(App);
