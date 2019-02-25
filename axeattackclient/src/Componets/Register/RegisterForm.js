import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider'

const divStyle = {
    textAlign: 'left'
  };

  const btnStyle = {
      backgroundColor: 'black', 
      color: 'white'
  }

  const textBoxStyle = {
      minWidth : 300
  }
class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstName: '', lastName:'', email:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
      }
    
      handleSubmit(event) {

        if(this.state.firstName == '' || this.state.lastName == '' || this.state.email == ''){
            alert('All fields must be filled out before submission');
        }else{
            alert('FirstName: ' + this.state.firstName + " Last Name: " + this.state.lastName + " email: " + this.state.email);
        }
        
        event.preventDefault();
      }

    render() {
      return (
        <div style={divStyle}>
        <form onSubmit={this.handleSubmit}>
            <TextField style={textBoxStyle}
                label= "First Name"
                name="firstName"
                value={this.state.firstName} 
                onChange={this.handleChange}/>
            <br></br>
            <TextField style={textBoxStyle}
                label= "Last Name"
                name="lastName"
                value={this.state.lastName} 
                onChange={this.handleChange}/>
            <br></br>
            <TextField style={textBoxStyle}
                label= "Email"
                name="email"
                value={this.state.email} 
                onChange={this.handleChange}/>
            <br></br>
            <br></br>
            <Button type="submit" size="small" style={btnStyle}>
                Submit
            </Button>
        </form>
        </div>
      );
    }
  }

  export default RegisterForm;