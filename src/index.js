import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Swal from 'sweetalert2';


class DictForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {definition:''};
	}
	submitHandler = (event) => {
		event.preventDefault();
		fetch('http://142.11.236.67:3010/definition?def='+this.state.definition).then(function (data) {
			data.json().then((value)=>{
				console.log(value[1]);
				Swal.fire({title: value[0].toString(), text: value[1].toString()});
			});
		});
	}
	myChangeHandler = (event) => {
		this.setState({definition: event.target.value});
	}
	render () {
		return (
			<form onSubmit={this.submitHandler}>
			<h1>Get Dict</h1>
			<p>Find a Definition:</p>
			<input type="text" onChange={this.myChangeHandler}/>
			<input type="submit"/>
			</form>
		);
	}
}

ReactDOM.render(<DictForm/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
