import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
      
    this.state = {
      name: '',
      password: '',
      confirm_password: '',
      email: '',
      verify: true
    }
    this.updateStateName = this.updateStateName.bind(this);
    this.updateStatePassword = this.updateStatePassword.bind(this);
    this.updateStatePasswordConfirm = this.updateStatePasswordConfirm.bind(this);
    this.updateStateEmail = this.updateStateEmail.bind(this);
    this.verifyButton = this.verifyButton.bind(this);
  };
  updateStateName(e) {
    this.setState({name: e.target.value});
  }
  updateStatePassword(e) {
    this.setState({password: e.target.value});
  }
  updateStatePasswordConfirm(e) {
    this.setState({confirm_password: e.target.value});
  }
  updateStateEmail(e) {
    this.setState({email: e.target.value});
  }

  verifyButton(e) {
    this.setState({verify: e.target.value});
    if(this.state.verify == true){
      alert("Confirmado!");
    }else{
      alert("Há campos fora do padrão, por favor verifique.");
    }
  }

  render(){
    let name_empty = '';
    let password_empty = '';
    let confirm_password_empty = '';
    let email_empty = '';
    var name = true;
    var email = true;
    var password = true;
    var confirm_password = true;

    if (this.state.name == '') {
      name_empty = <h6>Nome não pode estar vazio</h6>;
      name = false;
    }else{
      name = true;
    }

    if (this.state.email == '') {
      email_empty = <h6>Email não pode estar vazio</h6>;
      email = false;
    }else if (this.state.email.includes("@")!=true) {
      email_empty = <h6>Email não contêm @</h6>;      
      email = false;
    }else if (this.state.email.includes(".com")!=true) {
      email_empty = <h6>Email não contêm .com</h6>;      
      email = false;
    }else{
      email = true;
    }

    if (this.state.password == '') {
      password_empty = <h6>Senha não pode estar vazio</h6>;
      password = false;
    } else if(this.state.password.length<8){
      password_empty = <h6>Senha não pode ter menos de 8 caracteres</h6>;
      password = false;
    }else{
      password = true;
    }

    if (this.state.confirm_password == '') {
      confirm_password_empty = <h6>Confirmar senha não pode estar vazio</h6>;
      confirm_password = false;
    }else if(this.state.confirm_password.length<8){
      confirm_password_empty = <h6>Confirmar senha não pode ter menos de 8 caracteres</h6>;
      confirm_password = false;
    }else if(this.state.password != this.state.confirm_password){
      confirm_password_empty = <h6>Senhas incompatíveis</h6>;
      confirm_password = false;
    }else{
      confirm_password = true;
    }

    if(name==false || email==false || password==false || confirm_password==false){
      this.state.verify = false;
    }else{
      this.state.verify = true;
    }

    return(
      <div>
        <h1>Hello World</h1>
        <form>
          <label>Nome: </label>
          <input type = "text" value = {this.state.name} onChange = {this.updateStateName} />
          {name_empty}<p></p>

          <label>Email: </label>
          <input type = "email" value = {this.state.email} 
             onChange = {this.updateStateEmail} />
          {email_empty}<p></p>

          <label>Senha: </label> 
          <input type = "password" value = {this.state.password} 
             onChange = {this.updateStatePassword} />
          {password_empty}<p></p>

          <label>Confirmar Senha: </label> 
          <input type = "password" value = {this.state.confirm_password} 
             onChange = {this.updateStatePasswordConfirm} />
          {confirm_password_empty}<p></p>

          <button onClick={this.verifyButton}>Confirmar campos</button>
        </form>
      </div>
    );
  }
}

export default App;
