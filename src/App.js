import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { changeMessage } from './redux/actions';

const App = ({ statusMessage, changeMessage }) => {
  return (
    <div className="App">
      <header>
        <p>{statusMessage}</p>
        <button
          className="button"
          onClick={() => {
            changeMessage('new message');
          }}
        >
          Change Message
        </button>
      </header>
    </div>
  );
};

const mapStateToProps = state => {
  return { statusMessage: state };
};

export default connect(
  mapStateToProps,
  { changeMessage }
)(App);
