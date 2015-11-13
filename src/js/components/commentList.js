import React from 'react';
import Comment from 'js/components/comment';
//importamos el componente comment

export default class CommentList extends React.Component {
	render() {
		//con la funcion map iteramos cada elemento y creamos
		//componentes comment pasandole las propiedades y guardadolos
		//en el array comments
		var comments = this.props.data.map((comment) => {
			return (
				<div className="commentList">
					<Comment author={comment.email} key={comment.id}>
						{comment.name}
					</Comment>
				</div>
			)
		});
		//al final hacemos render del array de componentes
		return (
			<div>
				{comments}
			</div>
		)
	}
}