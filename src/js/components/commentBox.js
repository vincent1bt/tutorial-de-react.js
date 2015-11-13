import React from 'react';
import CommentForm from 'js/components/commentForm';
import CommentList from 'js/components/commentList'
//importamos los otros componentes para poder hacer render de ellos
//dentro del commentBox

//export default le va a decir al import que exporte por defecto esta clase
export default class CommentBox extends React.Component {
	render () {
		// en javascript class es una palabara reservada
		// para poder asignar clases a los elementos html
		//usamos className
		return (
			<div className="commentsBox">
				<h1>Commentarios</h1>
				<CommentList/>
				<CommentForm/>
			</div>
		)
	}
}