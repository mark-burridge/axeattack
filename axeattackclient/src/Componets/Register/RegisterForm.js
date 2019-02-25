import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types';

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
        alert('FirstName: ' + this.state.firstName + " Last Name: " + this.state.lastName + " email: " + this.state.email);
        event.preventDefault();
      }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <TextField
                label= "First Name"
                name="firstName"
                value={this.state.firstName} 
                onChange={this.handleChange}/>
                <TextField
                label= "Last Name"
                name="lastName"
                value={this.state.lastName} 
                onChange={this.handleChange}/>
                <TextField
                label= "Email"
                name="email"
                value={this.state.email} 
                onChange={this.handleChange}/>
                <br></br>
            <Button type="submit" size="small" color="default">
                Submit
            </Button>
        
        </form>
      );
    }
  }

  export default RegisterForm;