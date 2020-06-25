import React from "react";
import moment from "moment";
import { Input } from "../Input/input";
import { Item } from "../Item/Item";
import "./ToDoList.css";

class ToDoList extends React.Component {
	constructor(props) { 
		super(props);
		this.state = {
			item: "", 
			list: [
				{
					id: 5, 
					value: "Ask Ross Baker how he is so good at code", 
					date: "5 PM", 
					checked: false, 
					editing: false,
				}, 
				{
					id: 2, 
					value: "Fix my trash work portfolio", 
					date: "6 PM", 
					checked: false,
					editing: false, 
				}, 
				{
					id: 52, 
					value: "Grind and Stream Valorant", 
					date: "7 PM", 
					checked: false,
					editing: false, 
				}, 
			],
		};
	}

	addItem(e) {
		e.preventDefault();
		if (this.state.item !== ""){
			const newItem = {
				id: 1+ Math.random(), 
				value: this.state.item.slice(),
				date: moment().format("LT"), 
				checked: false, 
				editing: false,
			};
			let list = [...this.state.list];
	
			list.push(newItem); 
			this.setState({ list, newItem, item: ""});
		}
	}

	updateInput(key, value) {
		this.setState({ [key]: value });
	}

	setEditing(id) {
		let list = this.state.list;
		const item = list.findIndex((item) => item.id === id);
		let updatedItem = list[item];
		updatedItem.editing = true;
		const newToDoList = [...list];
		newToDoList[item] = updatedItem;
		this.setState({list: newToDoList});

	}

	deactivateEditing(e, id) {
		e.preventDefault();
		let list = this.state.list;
		const item = list.findIndex((item) => item.id === id);
		let updatedItem = list[item];
		updatedItem.editing = false;
		updatedItem.date = moment().format("LT");
		const newToDoList = [...list];
		newToDoList[item] = updatedItem;
		this.setState({list: newToDoList});

	}

	editTask(id, value) {
		let list = this.state.list;
		const item = list.findIndex((item) => item.id === id);
		let updatedItem = list[item];
		updatedItem.value = value;
		const newToDoList = [...list];
		newToDoList[item] = updatedItem;
		this.setState({list: newToDoList});


	}

	crossItem(id) {
		let list = this.state.list;
		const item = list.findIndex((item) => item.id === id);
		let updatedItem = list[item];
		updatedItem.checked = !updatedItem.checked;
		const newToDoList = [...list];
		newToDoList[item] = updatedItem;
		this.setState({list: newToDoList});


	}


render() {
	console.log(this.state.list);
	return (
	<div className="ToDoContainer">
		<div className="ToDoList">
			<div className="TodoHeader">
				<h2>Things To Do</h2>
				<span className="DateHeading">{moment().format("lll")}</span>
				<Input onChange={(e) => this.updateInput("item", e.target.value)} 
				onSubmit={(e) => this.addItem(e)}
				value={this.state.item} 
				/>
			</div>
			<ul className="ListCont">
			{this.state.list.map((item) => ( 
				<Item
				editingState={item.editing}
				setEditing={() => this.setEditing(item.id)}
				deactivateEditing={(e) => this.deactivateEditing(e, item.id)}
				editTask={(e) => this.editTask(item.id, e.target.value)}
				key={item.id} 
				checked={item.checked} 
				id={item.id} 
				crossItem={() => this.crossItem(item.id)} 
				value={item.value} 
				date={item.date}
				/>
			))}
			</ul>
		</div>
	</div>
		);
	}
}

export default ToDoList;
