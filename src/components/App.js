import { React, Component, createRef } from "react";
import ListItemContainer from "../containers/ListItemContainer";
import { Link } from "react-router-dom";
import "../App.css";

// class ListItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { random: 0 };
//   }
//   deletThisOne() {
//     this.props.onDelete(this.props.item.id);
//   }
//   onButtonClick() {
//     this.setState({ random: Math.random() });
//   }

//   render() {
//     return (
//       <div>
//         {this.props.item.value}
//         <button onClick={(e) => this.deletThisOne()}>del</button>
//       </div>
//     );
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    // this.inputRef = createRef();
  }

  // onAdd() {
  //   console.log(this.state.newItem);
  //   this.props.onAddTodo(this.state.newItem);
  //   this.setState({ newItem: "" });
  // }

  // handleChangeEvent(event) {
  //   this.setState({ newItem: event.target.value });
  // }

  deleteMe(id) {
    console.log(id);
    // this.setState({
    //   todos: this.state.todos.filter((e) => e.id !== id),
    //   newItem: "",
    // });
  }

  render() {
    return (
      <div className="App">
        <b>Bevitel szerint sorba:</b>
        {/* {console.log("Sima todok   " + this.props.todos)}
        {console.log("rendezett todok   " + this.props.todosByName)} */}
        {this.props.todos.map((e) => {
          return <ListItemContainer key={e} id={e} />;
        })}
        <hr />
        <b>Név szerint sorba:</b>
        {this.props.todosByName.map((e) => {
          return <ListItemContainer key={e} id={e} />;
        })}
        <Link to="/newtodo">Új todo</Link>
        {/* <input type="text" ref={this.inputRef} />
        <button
          onClick={(e) => this.props.onAddTodo(this.inputRef.current.value)}
        >
          <b>Add</b>
        </button> */}
      </div>
    );
  }
}

export default App;
