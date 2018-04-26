import React from 'react';
import axios from 'axios';

export default class Form extends React.Component{
  state = {
    Email: '',
    Password: '',
    confirmPassword: '',
  }

  sendEmailToDjango = e => {
    axios.get('http://localhost:8000/signup/?email='+this.state.Email+'&password='+this.state.Password, {
          Email: this.state.Email,
          Password: this.state.Password,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.sendEmailToDjango()
    this.setState({
      Email: '',
      Password: '',
      confirmPassword: '',
    }
  );
};

  render(){
    return(
      <form >
        <input placeholder="Email Address" value = {this.state.Email} onChange={e => this.setState({Email: e.target.value})}/><br/><br/>
        <input placeholder="Password" type="Password" value = {this.state.Password} onChange={e => this.setState({Password: e.target.value})}/><br/><br/>
        <input placeholder="confirmPassword" type="Password" value = {this.state.confirmPassword} onChange={e => this.setState({confirmPassword: e.target.value})}/><br/><br/>
        <label className="basic" style={{visibility: this.state.Password === this.state.confirmPassword? 'hidden' : 'visible' }}>Make sure that the two passwords match</label><br/><br/>
        <button className="basic" style={{visibility: this.state.Password === this.state.confirmPassword? 'visible' : 'hidden' }}
      onClick={e=>this.onSubmit(e)}>Register</button>
      </form>
    );
  }
}
