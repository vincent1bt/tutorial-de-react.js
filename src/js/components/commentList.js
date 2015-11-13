import React from 'react';
import Comment from 'js/components/comment';
//importamos el componente comment

export default class CommentList extends React.Component {
	render() {
		return (
			<div className="commentList">
				<Comment author="pete hunt">Este es un comentario</Comment>
				{
					//pasamos el nombre del atributo como si fuera una propiedad
					//de un tag de html y le asignamos el valor que queramos
				}
				<Comment author="jordan hunt">Este es otro comentario</Comment>
				{
					//en el caso de this.props.children
					//se usara lo que este adentro del componente
				}

			</div>
		)
	}
}