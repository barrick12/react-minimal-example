import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
	<div>
		<h1>Hello world!!</h1>
	</div>
)
ReactDOM.render(<App/>, document.getElementById('root'));

// class TodoApp extends React.Component {
//   constructor(props) {
//     super(props);
//
// 	this.state = {
// 		items: [],
// 		text: ''
// 	};
//
// 	this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   render() {
//     return (
//       <div>
//         <h3>TODO</h3>
//
//         <TodoList items={this.state.items} />
//
// 		<form onSubmit={this.handleSubmit}>
//           <label htmlFor="new-todo">
//             What needs to be done?<br/>
//           </label>
//           <input
//             id="new-todo"
//             onChange={this.handleChange}
//             value={this.state.text}
//           />
//           <button type="submit">
//             Add #{this.state.items.length + 1}
//           </button>
//         </form>
//
//       </div>
//     );
//   }
//
//   handleChange(e) {
//     this.setState({ text: e.target.value });
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//
//     if (!this.state.text.length) {
//       return;
//     }
//
//     const newItem = {
//       text: this.state.text,
//       id: Date.now()
//     };
//
//     this.setState(state => ({
//       items: state.items.concat(newItem),
//       text: ''
//     }));
//   }
// }
//
// class TodoList extends React.Component {
//
//   render() {
//     return (
//       <ul>
//         {this.props.items.map(item => (
//           <li key={item.id}>{item.text}</li>
//         ))}
//       </ul>
//     );
//   }
//
// }
//
// ReactDOM.render(
//   <TodoApp />,
//   document.getElementById('root')
// );
