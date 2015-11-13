import React from 'react';

export default class CommentForm extends React.Component {
	handleSubmit(e) {
		e.preventDefault();
		//impedimos que actue como un form normal
		let email = this.refs.author.value.trim();
		//con this.refs podemos obtener el valor de los campos
		//a los cuales hace referencia
		//trim es un metodo para eliminar los espacios en blanco de 
		//izquiera y derecha
		let text = this.refs.text.value.trim();

		this.refs.email.value = " ";
		this.refs.text.value = " ";
		//vaciamos los campos
	}
	render() {
			//en ecmascript6 react no hace bind de los metodos
			//tenemos que especificarle que haga referencia a este scope
			//con la funcion bind(this)
		return (
			<div className="commentForm">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input type="email" placeholder="Email" ref="author"/>
					<input type="text" placeholder="Comentario.." ref="text" />
					<input type="submit" value="post"/>
				</form>
			</div>
		)
	}
}