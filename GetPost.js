import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
class GetPost extends Component {
  render() {
  return (   
          <tr>
            <td>{this.props.data.FirstName}</td>
            <td>{this.props.data.LastName}</td>
            <td>{this.props.data.email}</td>
            <td><button onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.data.id })
                 }>Edit</button></td>
            <td><button onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.data.id})}>Delete</button></td>
          </tr>
         );
  }
 
}

export default connect() (GetPost);