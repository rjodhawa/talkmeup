import React from 'react';
import axios from 'axios';

export default class HomePage extends React.Component {
  state = {
    Hash: '',
    url: window.location.href,
  }

  sendActivationConfirmationToDjango = e => {
    let startIndex = this.state.url.indexOf("hash")+5;
    let endIndex = this.state.url.length;
    console.log(startIndex);
    axios.get('http://localhost:8000/signup/?hash='+this.state.url.slice(startIndex,endIndex), {
          Hash: this.state.Hash,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};
  render() {
    return (
      <div className="App">
        <p>
          {this.sendActivationConfirmationToDjango()}
          Thank you for registering!
        </p>
      </div>
    );
  }
}
