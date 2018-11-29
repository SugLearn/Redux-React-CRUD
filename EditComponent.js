import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component {
handleEdit = (event) => {
  event.preventDefault();
  const newFirstName = this.getFName.value;
  const newLastName = this.getLName.value;
  const newEmail=this.getEmail.value;
  const data = {
    newFirstName,
    newLastName,
    newEmail
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.data.id, data: data })
}
render() {
return (
          <tr>
            <td><input className="form-control col-sm-5" required type="text" ref={(input)=>this.getFName = input}  placeholder="First Name"  
                  defaultValue={this.props.data.FirstName} /></td>
            <td><input className="form-control col-sm-5" required type="text" ref={(input)=>this.getLName = input}  placeholder="Last Name"
                  defaultValue={this.props.data.LastName} /></td>
            <td><input className="form-control col-sm-5" required type="text" ref={(input)=>this.getEmail = input}  
                 defaultValue={this.props.data.email} placeholder="Email ID" /></td>
            <td><button onClick={this.handleEdit}>Update</button></td>
              
   </tr>      
            

);
}
}
export default connect()(EditComponent);
