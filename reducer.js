
const postReducer = (state = [], action) => {
    switch(action.type) {
      case 'ADD_POST':
        return state.concat([action.data]);
      case 'DELETE_POST':
       return state.filter((data)=>data.id !== action.id);
      case 'EDIT_POST':
        return state.map((data) => data.id === action.id ? { ...data, editing: !data.editing } : data)
      case 'UPDATE':
        return state.map((data) => {
        if (data.id === action.id) {
          return {
          ...data,
          FirstName: action.data.newFirstName,
          LastName: action.data.newLastName,
          email:action.data.newEmail,
          editing: !data.editing
          }
          } else return data;
          })
      default:
        return state;
    }
  }
  export default postReducer;