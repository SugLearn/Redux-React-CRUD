import React, { Component } from 'react';
import { connect } from 'react-redux';
import GetPost from './GetPost.js';
import EditComponent from './EditComponent.js';
class AllPost extends Component {
    render() {
        return (
            <div>
            <table className="table table-bordered">
             <thead>
             <tr>
             <td>First Name</td>
             <td>Last Name</td>
             <td>Email</td>
             <td>Edit</td>
             <td>Delete</td>
            </tr>
            </thead>
            {this.props.postsdata.map((data) => (
            <tbody key={data.id}>
                {data.editing ? <EditComponent data={data} key={data.id} /> : <GetPost key={data.id} data={data} />}
            </tbody>
             ))}
             {console.log('AllPost',this.props.postsdata)}
            
            </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        postsdata: state
        
    }
    
}
export default connect(mapStateToProps)(AllPost);