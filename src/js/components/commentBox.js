import React from 'react';
import CommentForm from 'js/components/commentForm';
import CommentList from 'js/components/commentList'
import request from "superagent";
//importamos los otros componentes para poder hacer render de ellos
//dentro del commentBox

//export default le va a decir al import que exporte por defecto esta clase
export default class CommentBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}
	loadComents() {
		Promise.resolve(request.get(this.props.url))
			.then((data) => {
				this.setState({data: data.body});
			});
	}
	componentDidMount() {
		this.loadComents();
	}
	render () {
		// en javascript class es una palabara reservada
		// para poder asignar clases a los elementos html
		//usamos className
		return (
			<div className="commentsBox">
				<h1>Commentarios</h1>
				<CommentList data={this.state.data}/>
				<CommentForm/>
			</div>
		)
	}
}