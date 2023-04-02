import { connect } from "react-redux";
import { changeTodoFlag, delTodoOnServer } from "../actions/todos";
import { useParams } from "react-router-dom";
import TodoEdit from "../components/TodoEdit";
import { updateTodo } from "../actions/todos";
import EditTodo2 from "../components/EditTodo2";

// const EditTodoContainer = ({ myData, match }) => {
//   match && console.log(match);
//   const { myParam } = match.params;
//   console.log(myParam);
// };

// const mapStateToProps = (state) => ({
//   myData: state.myData,
// });

const mapStateToProps = (state, params) => {
  let id = GetParams();
  console.log("id:  " + id);
  return {
    item: state.todos.get("" + GetParams()),
  };
};
function mapDispatchToProps(dispatch, props) {
  return {
    updateTodo: (todo) => {
      //console.log("propok" + props.toJS());
      dispatch(updateTodo(todo));
    },
  };
}
function GetParams() {
  const { myParam } = useParams();

  console.log("asdasdasd" + myParam);
  return myParam;
}
const EditTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTodo2);

// export default EditTodoContainer;
//export default connect(mapStateToProps)(TodoEdit);
// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { useParams } from "react-router-dom";
// //import EditTodo2 from "../components/EditTodo2";
// import { updateTodo } from "../actions/todos";
// import EditTodo2 from "../components/EditTodo2";

// const EditTodoContainer = ({ todos, setMyData }) => {
//   const { myParam } = useParams();
//   let item = todos.get(myParam);

//   useEffect(() => {
//     setMyData(myParam);
//   }, [myParam, setMyData]);

//   return <EditTodo2 myData={item} updateTodo={updateTodo} />;
// };

// function mapStateToProps(state, props) {
//   return {
//     // item: myData,
//     todos: state.todos,
//   };
// }

// const mapDispatchToProps = (dispatch, props) => ({
//   setMyData: (myData) => dispatch({ type: "SET_MY_DATA", payload: myData }),
//   updateTodo: (todo) => {
//     //console.log("propok" + props.toJS());
//     dispatch(updateTodo(todo));
//   },
// });

export default connect(mapStateToProps, mapDispatchToProps)(EditTodo2);
