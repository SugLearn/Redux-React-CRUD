import React, { Component } from 'react';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


class PostForm extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const FirstName = this.getFName.value;
        const LastName =  this.getLName.value;
        const email= this.getEmail.value;
        
        const data = {
          id: new Date(),
          FirstName,
          LastName,
          email,
          editing:false,
        }
        

        this.props.dispatch({
          type:'ADD_POST',
          data});

        this.getFName.value = '';
        this.getLName.value = '';
        this.getEmail.value='';
        
      }

      
render() {

return (
<div>
  <h1>React Form</h1>
    <div className="row">
      <div className="col-sm-12">
  
       <form  onSubmit={this.handleSubmit}>
         <div>
         <label htmlFor="FName" className="form-label">First Name</label>
         <input className="form-control col-sm-4" required type="text" ref={(input)=>this.getFName = input} 
         placeholder="First Name"  /><br /><br />
         </div>

        <div>
        <label htmlFor="LName" className="form-label">Last Name</label>
        <input className="form-control col-sm-4" required type="text" ref={(input)=>this.getLName = input} 
         placeholder="Last Name" /><br /><br />
        </div>
   
        <div>
        <label htmlFor="Email" className="form-label">Email Id</label>
        <input className="form-control col-sm-4" required type="text" ref={(input)=>this.getEmail = input} 
         placeholder="Email ID" /><br /><br />
        </div>
  
        <button>Submit</button>

        </form>
      </div>
    </div>
  </div>
);
}
}


export default connect () (PostForm);