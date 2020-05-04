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
				let valueLines = value[1].toString().split('\n');
				let valueHtml = value[1].toString().replace(/\n/g,'<br>');
				let dictRegex = /^[A-Za-z\s]*$/;
			window.valueHTML = value[0];//.match(/^[a-z\s]*$/);
				if (null != window.valueHTML.toString().match(dictRegex) && window.valueHTML.toString().match(dictRegex).length > 0) {
				//if (valueHtml.match
				console.log(value[1],valueLines);
				Swal.fire({title: value[0].toString(), html: value[1].toString().replace(/\n/g,'<br>')});
				} else {Swal.fire('You did not enter a valid word');}
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
